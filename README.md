# Kasus Bram Buldog
**Menjadi Pengacara PTP Kemenkeu di Sidang Kenaikan Grading**

Game 3D (three.js) untuk acara daring PTP Kemenkeu. Peserta membantu pengacara Bram Buldog
mengumpulkan 7 berkas bukti di 7 lantai Menara Pembelajaran, lalu membawanya ke sidang
kenaikan grading di hadapan Hakim von Timbangen.

## Cara main
1. Buka halaman game, isi nama peserta (satu nama per baris), tekan **Play**.
2. Di setiap lantai, tekan **SPIN** untuk mengundi peserta, tanyakan pilihannya, lalu klik kartu bukti yang dipilih.
3. Setelah 7 lantai, sidang dimulai dan hakim membacakan putusan.
4. Tekan **Main Lagi** untuk putaran kedua (daftar nama berlanjut).

Kendali: klik/spasi = lanjut dialog · ⏭ = lewati adegan · 🔊 = suara · ⛶ = layar penuh.

## Struktur
- `js/script.js` — naskah dan data kartu bukti
- `js/main.js` — alur game · `js/sets.js`, `js/court.js` — lingkungan 3D · `js/characters.js` — tokoh
- `assets/audio` — suara (ElevenLabs), efek suara, musik
- `tools/` — skrip pembuat audio (butuh `ELEVEN_API_KEY` di environment; key tidak disimpan di repo)

Semua tokoh dan instansi dalam game ini fiktif.
