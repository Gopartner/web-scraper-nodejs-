## Penjelasan:
.Struktur HTML: Dibuat dengan beberapa div menu-item yang menggambarkan setiap item di sidebar.

.CSS: Bagian sidebar menggunakan position: absolute; sehingga muncul di bagian kiri layar dan menutup penuh di sepanjang tinggi layar. transform: translateX(-100%); digunakan untuk menyembunyikan sidebar di awal, dan kelas .active akan menerapkan transform: translateX(0); untuk menampilkannya dengan animasi.

.Animasi: Animasi ditangani oleh properti transition pada sidebar untuk memberikan efek transisi halus saat sidebar dibuka atau ditutup.


