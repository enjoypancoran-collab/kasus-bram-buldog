// Membuat file suara dialog dari js/script.js lewat ElevenLabs.
// Jalankan: ELEVEN_API_KEY=... node tools/gen_voice.mjs [--only id1,id2] [--test]
import { CAST, allLines } from '../js/script.js';
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
const KEY = process.env.ELEVEN_API_KEY;
const outDir = new URL('../assets/audio/voice/', import.meta.url).pathname;
const args = process.argv.slice(2);
const only = args.includes('--only') ? new Set(args[args.indexOf('--only') + 1].split(',')) : null;
const test = args.includes('--test');
const SETTINGS = {
  hakim: { stability: 0.55, similarity_boost: 0.8, style: 0.35 },
  tutor: { stability: 0.35, similarity_boost: 0.7, style: 0.2 },
};
async function tts(line) {
  const voice = CAST[line.s].voice;
  const body = { text: line.t, model_id: 'eleven_multilingual_v2',
    voice_settings: SETTINGS[line.s] || { stability: 0.4, similarity_boost: 0.8, style: 0.3, use_speaker_boost: true } };
  for (let attempt = 0; attempt < 4; attempt++) {
    const r = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voice}?output_format=mp3_44100_128`, {
      method: 'POST', headers: { 'xi-api-key': KEY, 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
    if (r.ok) return Buffer.from(await r.arrayBuffer());
    const msg = await r.text();
    if (r.status === 429 || r.status >= 500) { await new Promise(s => setTimeout(s, 3000 * (attempt + 1))); continue; }
    throw new Error(`${line.id} ${r.status} ${msg.slice(0, 200)}`);
  }
  throw new Error(`${line.id} gagal setelah retry`);
}
let lines = allLines();
if (only) lines = lines.filter(l => only.has(l.id));
if (test) { const seen = new Set(); lines = lines.filter(l => !seen.has(l.s) && seen.add(l.s)); lines = Object.keys(CAST).map(s => ({ id: 'test_' + s, s, t: 'Selamat pagi, rekan-rekan PTP Kemenkeu.' })); }
const queue = lines.filter(l => test || only || !fs.existsSync(outDir + l.id + '.mp3'));
console.log('akan dibuat', queue.length, 'baris');
let i = 0, fails = [];
async function worker() {
  while (i < queue.length) {
    const l = queue[i++];
    try { const buf = await tts(l); fs.writeFileSync(outDir + l.id + '.mp3', buf); process.stdout.write('.'); }
    catch (e) { fails.push(e.message); process.stdout.write('x'); }
  }
}
await Promise.all([1, 2, 3, 4].map(worker));
console.log('\nselesai. gagal:', fails.length); fails.forEach(f => console.log(f));
// manifest durasi
const man = {};
for (const f of fs.readdirSync(outDir).filter(f => f.endsWith('.mp3') && !f.startsWith('test_'))) {
  const d = execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', outDir + f]).toString().trim();
  man[f.replace('.mp3', '')] = Math.round(parseFloat(d) * 100) / 100;
}
fs.writeFileSync(outDir + 'manifest.json', JSON.stringify(man, null, 0));
