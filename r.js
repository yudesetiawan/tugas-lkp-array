// nilai para siswa
let score_siswa = [80, 75, 90, 60, 85, 70];

// menampilkan nilai siswa
console.log("Nilai siswa:", score_siswa);

// menghitung nilai average para siswa
let total = score_siswa.reduce((jumlah, nilai) => jumlah + nilai, 0);
let average = total / score_siswa.length;
console.log("nilai average:", score_siswa);

// untuk menampilkan nilai dibawah 75
let nilaiTinggi = score_siswa.filter(nilai => nilai >= 75);
console.log("Nilai ≥ 75:", nilaiTinggi);

// penambahan nilai baru
score_siswa.push(95);
console.log("setelah ditambah nilai:", score_siswa);

// menghapus nilai spesifik di dalam nilai siswa
score_siswa.splice(2, 1);
console.log("Setelah hapus nilai tertentu:", score_siswa);

// panampilan semua hasil console
console.log("=== Hasil Akhir ===");
console.log("Nilai siswa:", score_siswa);
console.log("nilai average:", average);
console.log("Nilai ≥ 75:", nilaiTinggi);