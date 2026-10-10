
# BAPENDA.HUB
## Portal Digital Pelayanan Pajak Daerah Kota Medan

---

**Dokumen Presentasi Client**
**Versi 1.0**

---

# 1. PENJELASAN UMUM PROJECT

---

## 1.1 Nama Project

**BAPENDA.HUB – Portal Digital Pelayanan Pajak Daerah Kota Medan**

Sebuah sistem informasi berbasis web yang dirancang khusus untuk mengelola seluruh layanan perpajakan daerah di lingkungan Badan Pendapatan Daerah (BAPENDA) Kota Medan secara digital, terintegrasi, dan real-time.

---

## 1.2 Latar Belakang

Kota Medan sebagai ibu kota Provinsi Sumatera Utara memiliki jumlah wajib pajak yang sangat besar dan terus bertambah setiap tahunnya. Pengelolaan pajak daerah — khususnya Pajak Bumi dan Bangunan (PBB) dan BPHTB — masih menghadapi berbagai tantangan, antara lain:

1. **Proses manual** — Pendataan, penilaian, dan pencatatan pembayaran pajak masih banyak dilakukan secara konvensional menggunakan dokumen fisik dan spreadsheet.
2. **Data tersebar** — Data objek pajak, wajib pajak, dan pembayaran tidak tersimpan dalam satu sistem terpusat sehingga sulit dilacak dan direkonsiliasi.
3. **Akses informasi terbatas** — Wajib pajak kesulitan mendapatkan informasi tagihan, status pembayaran, dan nilai pajak secara cepat dan mandiri.
4. **Pelayanan belum optimal** — Proses pengaduan, pengajuan keberatan, dan permohonan informasi masih memerlukan datang langsung ke kantor.
5. **Monitoring dan pelaporan lambat** — Pimpinan kesulitan mendapatkan data real-time tentang realisasi penerimaan pajak.
6. **Potensi penerimaan belum maksimal** — Kurangnya alat bantu untuk analisis potensi pajak berbasis data spasial.
7. **Pelaporan keuangan lambat** — Dibutuhkan waktu lama untuk menyusun laporan realisasi penerimaan pajak secara akurat.

---

## 1.3 Permasalahan yang Ingin Diselesaikan

| No | Masalah | Dampak |
|----|---------|--------|
| 1 | Pelayanan pajak masih manual dan terpencar | Wajib pajak harus datang ke kantor untuk banyak keperluan |
| 2 | Data objek pajak tidak terintegrasi | Sulit memantau status dan riwayat objek pajak |
| 3 | Pembayaran pajak belum bisa dilakukan secara online | Antrean panjang di loket pembayaran |
| 4 | Informasi tagihan tidak mudah diakses | Wajib pajak sering lupa atau tidak tahu jumlah tagihan |
| 5 | Pengaduan dan pengajuan masih offline | Proses penyelesaian lambat dan tidak transparan |
| 6 | Belum ada sistem informasi geografis untuk pajak | Potensi pajak tidak terpetakan secara visual |
| 7 | Laporan penerimaan tidak real-time | Pengambilan keputusan kurang cepat dan tepat |

---

## 1.4 Tujuan Pengembangan Sistem

1. **Menyediakan portal layanan pajak terpadu** — Seluruh layanan perpajakan dapat diakses melalui satu platform digital.
2. **Mendigitalkan proses pendataan dan penilaian** — Mengubah proses manual menjadi digital yang lebih cepat, akurat, dan efisien.
3. **Mempermudah pembayaran pajak** — Wajib pajak dapat membayar pajak kapan saja dan di mana saja melalui berbagai metode pembayaran.
4. **Menyediakan akses informasi real-time** — Wajib pajak dan pimpinan dapat mengakses informasi tagihan, status pembayaran, dan laporan secara langsung.
5. **Mengintegrasikan data spasial** — Objek pajak dipetakan secara geografis untuk mendukung analisis potensi dan penilaian.
6. **Meningkatkan transparansi dan akuntabilitas** — Seluruh proses tercatat dalam sistem audit yang lengkap.
7. **Mempercepat pelaporan** — Laporan penerimaan dapat dihasilkan secara otomatis dan real-time.

---

## 1.5 Manfaat Sistem

### Bagi Pemerintah Kota / BAPENDA:
- Data pajak tersimpan aman dan terpusat dalam satu database.
- Pendataan dan penilaian objek pajak lebih cepat dan akurat.
- Monitoring realisasi penerimaan pajak secara real-time.
- Laporan dapat dihasilkan secara instan tanpa rekap manual.
- Pengambilan keputusan berbasis data yang akurat.
- Potensi pajak dapat dianalisis dengan bantuan data spasial.

### Bagi Wajib Pajak / Masyarakat:
- Cek tagihan pajak secara online tanpa harus datang ke kantor.
- Bayar pajak secara digital melalui berbagai metode (transfer bank, kartu kredit, QRIS, dll).
- Lihat riwayat pembayaran kapan saja.
- Ajukan pengaduan atau permohonan informasi secara online.
- Dapatkan SPPT secara digital (PDF).
- Informasi tersedia 24 jam sehari, 7 hari seminggu.

### Bagi Instansi Terkait / Akademisi:
- Mahasiswa dapat mengajukan permohonan riset secara online.
- Mendukung keterbukaan informasi publik melalui PPID.

---

## 1.6 Target Pengguna

| Role | Deskripsi | Jumlah Target |
|------|-----------|---------------|
| **Super Admin** | Pengelola utama sistem dengan akses penuh | 1–2 orang |
| **Admin BAPENDA** | Admin yang mengelola operasional harian | 5–10 orang |
| **Petugas/Penilai** | Petugas lapangan yang melakukan pendataan dan penilaian | 20–50 orang |
| **Wajib Pajak** | Masyarakat pemilik objek pajak di Kota Medan | 500.000+ |
| **Mahasiswa** | Mahasiswa yang mengajukan riset tentang pajak | Tidak terbatas |

---

## 1.7 Ruang Lingkup Sistem

| Modul | Deskripsi |
|-------|-----------|
| **Manajemen Pengguna** | Registrasi, login, profil, role & hak akses |
| **Manajemen Objek Pajak** | Pendataan, penilaian, NOP, data properti |
| **SPPT Digital** | Surat Pemberitahuan Pajak Terutang elektronik |
| **Pembayaran Pajak** | Integrasi payment gateway, riwayat, tagihan |
| **GIS/Pemetaan** | Peta bidang PBB, ZNT, pasar properti, geo dashboard |
| **CMS** | Berita dan pengumuman |
| **PPID** | Permohonan informasi publik |
| **Pengaduan** | Pengaduan masyarakat |
| **Pengajuan** | Keberatan dan permohonan perubahan data |
| **Riset Mahasiswa** | Permohonan data untuk penelitian |
| **Chatbot AI** | Asisten virtual berbasis AI |
| **Notifikasi** | Notifikasi dalam aplikasi |
| **Audit Trail** | Catatan aktivitas sistem |
| **Statistik & Laporan** | Dashboard, grafik, dan laporan |

---

# 2. GAMBARAN SISTEM

---

Berikut adalah gambaran bagaimana sistem bekerja dari sudut pandang pengguna. Penjelasan ini menggunakan bahasa bisnis, bukan bahasa teknis pemrograman.

---

## 2.1 Alur Umum Sistem

```
                  ┌─────────────────────────┐
                  │   Halaman Utama Portal   │
                  │  (Informasi & Layanan)   │
                  └───────────┬─────────────┘
                              │
                              ▼
                  ┌─────────────────────────┐
                  │      LOGIN / DAFTAR      │
                  │   (Email & Password)     │
                  └───────────┬─────────────┘
                              │
                              ▼
                  ┌─────────────────────────┐
                  │       DASHBOARD          │
                  │  (Tampilan sesuai Role)  │
                  └───────────┬─────────────┘
                              │
                              ▼
                  ┌─────────────────────────┐
                  │   AKSES FITUR / MENU     │
                  │  (Sesuai Hak Akses)      │
                  └───────────┬─────────────┘
                              │
                              ▼
                  ┌─────────────────────────┐
                  │   MENGOLAH DATA          │
                  │(Tambah/Ubah/Hapus/Cari)  │
                  └───────────┬─────────────┘
                              │
                              ▼
                  ┌─────────────────────────┐
                  │   DATA TERSIMPAN KE      │
                  │   DATABASE TERPUSAT      │
                  └───────────┬─────────────┘
                              │
                              ▼
                  ┌─────────────────────────┐
                  │   DASHBOARD & LAPORAN    │
                  │    LANGSUNG TERUPDATE    │
                  └───────────┬─────────────┘
                              │
                              ▼
                  ┌─────────────────────────┐
                  │   LAPORAN SIAP CETAK     │
                  │   & UNDUH (PDF/Excel)    │
                  └─────────────────────────┘
```

---

## 2.2 Alur Pengguna — Wajib Pajak

1. **Membuka Portal** — Pengguna membuka website BAPENDA.HUB dari browser (komputer atau HP).
2. **Melihat Informasi** — Di halaman utama, pengguna dapat melihat berita terbaru, layanan pajak, panduan, dan informasi umum.
3. **Cek Pajak** — Pengguna dapat mengecek tagihan PBB cukup dengan memasukkan Nomor Objek Pajak (NOP) tanpa perlu login.
4. **Registrasi / Login** — Untuk mengakses layanan lengkap, pengguna mendaftar akun atau login jika sudah punya akun.
5. **Dashboard Pribadi** — Setelah login, wajib pajak melihat dashboard pribadi berisi: tagihan yang belum dibayar, riwayat pembayaran, SPPT digital, dan notifikasi.
6. **Membayar Pajak** — Wajib pajak memilih tagihan, memilih metode pembayaran (transfer bank, kartu kredit, QRIS, dll), dan melakukan pembayaran. Sistem akan memproses pembayaran secara otomatis.
7. **Melihat SPPT Digital** — Wajib pajak dapat melihat, mengunduh, dan mencetak SPPT dalam format PDF kapan saja.
8. **Mengajukan Pengaduan** — Jika ada masalah, wajib pajak dapat mengajukan pengaduan secara online dan memantau status penyelesaiannya.
9. **Mengajukan Permohonan** — Wajib pajak dapat mengajukan keberatan atau perubahan data objek pajak secara online.
10. **Menggunakan Chatbot** — Jika bingung, wajib pajak dapat bertanya kepada chatbot AI yang siap membantu 24 jam.

---

## 2.3 Alur Pengguna — Admin / Petugas

1. **Login** — Admin dan petugas login ke dashboard dengan akun masing-masing.
2. **Dashboard Monitoring** — Melihat ringkasan data: jumlah wajib pajak, objek pajak, realisasi penerimaan, dan status pengaduan.
3. **Manajemen Data** — Admin mengelola data pengguna, objek pajak, SPPT, dan pembayaran.
4. **Pendataan & Penilaian** — Petugas melakukan pendataan objek pajak baru dan penilaian ulang, dilengkapi data spasial.
5. **Verifikasi** — Admin memverifikasi pengajuan, pengaduan, dan permohonan informasi.
6. **Monitoring Pembayaran** — Admin memantau status pembayaran dan melakukan rekonsiliasi.
7. **Laporan** — Admin dan pimpinan dapat melihat laporan realisasi penerimaan dalam bentuk grafik dan tabel.
8. **GIS Dashboard** — Melihat peta sebaran objek pajak, zona nilai tanah, dan analisis properti.

---

# 3. PENJELASAN SETIAP ROLE

---

## 3.1 SUPER ADMIN

### Fungsi Utama
Super Admin adalah pemilik sistem dengan akses tertinggi. Bertanggung jawab atas pengelolaan keseluruhan sistem, termasuk konfigurasi, pengguna, dan pemantauan audit.

### Hak Akses
- ✅ Akses ke seluruh menu dan fitur tanpa terkecuali
- ✅ Mengelola semua pengguna (tambah, ubah, hapus, nonaktifkan)
- ✅ Mengubah role/hak akses pengguna
- ✅ Melihat seluruh data dan laporan
- ✅ Melihat log aktivitas (audit trail)
- ✅ Konfigurasi sistem

### Menu yang Tersedia
- Dashboard Admin
- Manajemen Pengguna
- Manajemen Objek Pajak
- Manajemen Pembayaran
- Manajemen SPPT
- GIS Dashboard
- CMS (Berita & Pengumuman)
- Manajemen Pengaduan
- Manajemen PPID
- Manajemen Riset Mahasiswa
- Statistik & Laporan
- Audit Log
- Pengaturan Sistem
- Notifikasi

### Aktivitas yang Dapat Dilakukan
- Menambah, mengubah, dan menonaktifkan akun pengguna
- Melihat dan memverifikasi seluruh data transaksi
- Melihat catatan aktivitas seluruh pengguna
- Mengirim notifikasi massal
- Mengelola konten berita dan pengumuman
- Menghasilkan laporan
- Melakukan backup data

### Manfaat bagi Pengguna
- Kontrol penuh atas sistem
- Kemampuan memonitor seluruh aktivitas dari satu tempat
- Keamanan terjaga karena setiap aktivitas tercatat

---

## 3.2 ADMIN

### Fungsi Utama
Admin adalah operator harian yang mengelola operasional layanan pajak, termasuk data objek pajak, pembayaran, verifikasi pengajuan, dan pelayanan publik.

### Hak Akses
- ✅ Mengelola data objek pajak
- ✅ Mengelola SPPT
- ✅ Melihat dan mengelola pembayaran
- ✅ Memverifikasi pengajuan dan pengaduan
- ✅ Mengelola CMS
- ✅ Melihat statistik dan laporan
- ✅ Mengirim notifikasi
- ❌ Tidak dapat mengubah role pengguna
- ❌ Tidak dapat menghapus pengguna permanen
- ❌ Tidak dapat melihat audit log

### Menu yang Tersedia
- Dashboard Admin
- Manajemen Objek Pajak
- Manajemen SPPT
- Manajemen Pembayaran
- Manajemen Pengaduan
- Manajemen PPID
- Manajemen Riset Mahasiswa
- CMS (Berita & Pengumuman)
- GIS Dashboard
- Statistik & Laporan
- Notifikasi

### Aktivitas yang Dapat Dilakukan
- Menambah, mengubah, dan menghapus data objek pajak
- Menerbitkan SPPT digital
- Memverifikasi pembayaran
- Menjawab pengaduan dan permohonan informasi
- Mempublikasikan berita dan pengumuman
- Melihat rekap penerimaan pajak
- Mengirim notifikasi kepada wajib pajak

### Manfaat bagi Pengguna
- Pekerjaan administrasi lebih cepat dan terorganisir
- Data dapat diakses dan diperbarui secara real-time
- Pelayanan kepada wajib pajak lebih responsif

---

## 3.3 PETUGAS / OFFICER

### Fungsi Utama
Petugas adalah staf lapangan yang bertugas melakukan pendataan objek pajak, penilaian, dan verifikasi data di lokasi.

### Hak Akses
- ✅ Melihat daftar objek pajak
- ✅ Menambah data objek pajak baru
- ✅ Melakukan penilaian objek pajak
- ✅ Mengakses GIS untuk pemetaan
- ✅ Melihat dashboard sendiri
- ❌ Tidak dapat mengelola pengguna
- ❌ Tidak dapat memverifikasi pembayaran
- ❌ Tidak dapat mengelola CMS

### Menu yang Tersedia
- Dashboard Petugas
- Data Objek Pajak
- Pendataan Pajak
- Penilaian Pajak
- GIS (Peta Bidang, ZNT, Pasar Properti)
- Profil

### Aktivitas yang Dapat Dilakukan
- Mencatat data objek pajak baru di lapangan
- Memperbarui data objek pajak yang berubah
- Melakukan penilaian ulang NJOP
- Memetakan lokasi objek pajak di peta digital
- Melihat zona nilai tanah untuk referensi penilaian
- Melihat data pasar properti untuk perbandingan

### Manfaat bagi Pengguna
- Pendataan lebih akurat dengan dukungan peta digital
- Penilaian lebih objektif dengan data zona nilai tanah
- Pekerjaan lapangan tercatat dan terpantau secara digital

---

## 3.4 WAJIB PAJAK / USER

### Fungsi Utama
Wajib Pajak adalah masyarakat pemilik objek pajak yang menggunakan portal untuk mengecek tagihan, membayar pajak, mengajukan pengaduan, dan mengakses layanan perpajakan secara mandiri.

### Hak Akses
- ✅ Melihat tagihan pajak sendiri
- ✅ Membayar pajak secara online
- ✅ Melihat dan mengunduh SPPT digital
- ✅ Melihat riwayat pembayaran
- ✅ Mengajukan pengaduan
- ✅ Mengajukan permohonan informasi (PPID)
- ✅ Mengajukan keberatan / perubahan data
- ✅ Menggunakan chatbot
- ✅ Memperbarui profil sendiri
- ❌ Tidak dapat melihat data wajib pajak lain
- ❌ Tidak dapat mengelola objek pajak milik orang lain

### Menu yang Tersedia
- Dashboard Pribadi
- Objek Pajak Saya
- Tagihan Pajak
- Riwayat Pembayaran
- SPPT Digital
- Kalkulator Pajak
- Simulasi Pajak
- Pengaduan
- Pengajuan (Keberatan / Perubahan Data)
- PPID (Permohonan Informasi)
- Chatbot
- Profil & Pengaturan
- Notifikasi

### Aktivitas yang Dapat Dilakukan
- Login dan melihat dashboard pribadi
- Mengecek tagihan pajak beserta detailnya
- Membayar pajak melalui berbagai metode pembayaran
- Mengunduh SPPT dalam format PDF
- Mengajukan pengaduan dan memantau statusnya
- Mengajukan permohonan informasi publik
- Mengajukan keberatan atas nilai pajak
- Menggunakan chatbot untuk bertanya
- Mengubah profil dan password

### Manfaat bagi Pengguna
- Tidak perlu antre di kantor untuk membayar atau mengecek tagihan
- Layanan tersedia 24 jam dari rumah
- Riwayat transaksi tercatat rapi dan mudah diakses
- Proses pengaduan lebih transparan dengan status yang bisa dipantau

---

# 4. PENJELASAN FITUR

---

## 4.1 Dashboard

| Aspek | Deskripsi |
|-------|-----------|
| **Tujuan** | Memberikan tampilan ringkasan data yang relevan sesuai peran pengguna |
| **Cara Kerja** | Setelah login, sistem menampilkan dashboard dengan kartu informasi, grafik, dan tabel ringkasan yang diambil dari database secara real-time |
| **Manfaat** | Pengguna langsung mendapatkan gambaran kondisi terkini tanpa harus membuka banyak halaman |
| **Pengguna** | Semua role (tampilan berbeda sesuai kebutuhan) |

---

## 4.2 Manajemen User

| Aspek | Deskripsi |
|-------|-----------|
| **Tujuan** | Mengelola akun pengguna sistem |
| **Cara Kerja** | Admin dapat menambah, mengubah, menonaktifkan, dan mencari pengguna. Setiap pengguna memiliki role yang menentukan hak aksesnya |
| **Manfaat** | Keamanan terjaga karena setiap pengguna memiliki akses sesuai perannya. Memudahkan pengelolaan pengguna dalam jumlah besar |
| **Pengguna** | Super Admin, Admin |

---

## 4.3 Manajemen Objek Pajak

| Aspek | Deskripsi |
|-------|-----------|
| **Tujuan** | Mendata dan mengelola seluruh objek pajak (tanah dan/atau bangunan) di Kota Medan |
| **Cara Kerja** | Petugas mencatat data objek pajak meliputi NOP, alamat, luas tanah, luas bangunan, NJOP, status, dan koordinat lokasi. Data dapat ditambah, diubah, dan dicari dengan mudah |
| **Manfaat** | Data objek pajak tersimpan rapi dan terpusat. Memudahkan pencarian dan pembaruan data |
| **Pengguna** | Admin, Petugas, Wajib Pajak (melihat objek milik sendiri) |

---

## 4.4 Pendataan

| Aspek | Deskripsi |
|-------|-----------|
| **Tujuan** | Mencatat objek pajak baru atau memperbarui data objek pajak yang sudah ada |
| **Cara Kerja** | Petugas memasukkan data objek pajak melalui formulir digital, lengkap dengan foto dan koordinat lokasi |
| **Manfaat** | Proses pendataan lebih cepat dan akurat. Data langsung tersimpan di database tanpa perlu rekap manual |
| **Pengguna** | Petugas, Admin |

---

## 4.5 Penilaian

| Aspek | Deskripsi |
|-------|-----------|
| **Tujuan** | Menentukan atau memperbarui NJOP (Nilai Jual Objek Pajak) |
| **Cara Kerja** | Petugas penilai menganalisis data objek pajak, membandingkan dengan zona nilai tanah dan data pasar properti, kemudian menetapkan NJOP baru |
| **Manfaat** | Penilaian lebih akurat dan objektif karena didukung data pembanding. Riwayat penilaian tercatat |
| **Pengguna** | Petugas, Admin |

---

## 4.6 SPPT Digital

| Aspek | Deskripsi |
|-------|-----------|
| **Tujuan** | Menyediakan Surat Pemberitahuan Pajak Terutang dalam format digital yang dapat diakses dan diunduh kapan saja |
| **Cara Kerja** | Sistem menghasilkan SPPT digital berdasarkan data objek pajak dan perhitungan pajak. Wajib pajak dapat melihat, mengunduh PDF, dan mencetaknya langsung dari portal |
| **Manfaat** | Wajib pajak tidak perlu menunggu SPPT fisik dikirim. Hemat kertas dan biaya distribusi. Dokumen dapat diakses kapan saja |
| **Pengguna** | Wajib Pajak, Admin |

---

## 4.7 Pembayaran Pajak

| Aspek | Deskripsi |
|-------|-----------|
| **Tujuan** | Memfasilitasi pembayaran pajak secara online melalui berbagai metode pembayaran |
| **Cara Kerja** | Wajib pajak memilih tagihan yang akan dibayar, sistem membuat kode pembayaran, pengguna memilih metode pembayaran (transfer bank, kartu kredit, QRIS, dll), kemudian sistem memproses pembayaran. Status pembayaran diperbarui secara otomatis dan real-time |
| **Manfaat** | Wajib pajak dapat membayar dari mana saja, kapan saja. Proses pembayaran cepat dan aman. Riwayat pembayaran tercatat rapi |
| **Pengguna** | Wajib Pajak |

---

## 4.8 Pengajuan

| Aspek | Deskripsi |
|-------|-----------|
| **Tujuan** | Memfasilitasi pengajuan keberatan atas nilai pajak atau permohonan perubahan data objek pajak |
| **Cara Kerja** | Wajib pajak mengisi formulir pengajuan secara online, melampirkan dokumen pendukung. Admin menerima dan memproses pengajuan tersebut |
| **Manfaat** | Proses pengajuan lebih mudah tanpa harus datang ke kantor. Status pengajuan dapat dipantau secara real-time |
| **Pengguna** | Wajib Pajak, Admin |

---

## 4.9 Pengaduan

| Aspek | Deskripsi |
|-------|-----------|
| **Tujuan** | Menampung dan memproses pengaduan masyarakat terkait layanan perpajakan |
| **Cara Kerja** | Masyarakat mengisi formulir pengaduan (dapat dilakukan secara anonim). Admin menerima, menindaklanjuti, dan memberikan tanggapan. Status pengaduan dapat dipantau |
| **Manfaat** | Masyarakat memiliki saluran resmi untuk menyampaikan keluhan. Proses penyelesaian lebih transparan dan terpantau |
| **Pengguna** | Wajib Pajak/Masyarakat, Admin |

---

## 4.10 Notifikasi

| Aspek | Deskripsi |
|-------|-----------|
| **Tujuan** | Memberikan informasi penting kepada pengguna secara proaktif |
| **Cara Kerja** | Sistem mengirimkan notifikasi dalam aplikasi untuk berbagai kejadian: tagihan baru, pembayaran berhasil, status pengaduan berubah, pengumuman, dll |
| **Manfaat** | Pengguna selalu mendapat informasi terbaru tanpa harus mengecek secara manual. Meningkatkan kesadaran dan kepatuhan pajak |
| **Pengguna** | Semua role |

---

## 4.11 Geo Dashboard

| Aspek | Deskripsi |
|-------|-----------|
| **Tujuan** | Menyediakan dashboard analisis pajak berbasis peta interaktif |
| **Cara Kerja** | Data objek pajak, zona nilai tanah, dan properti ditampilkan di peta digital. Pengguna dapat melihat sebaran, menganalisis pola, dan mendapatkan wawasan visual |
| **Manfaat** | Memudahkan analisis potensi pajak secara spasial. Mendukung pengambilan keputusan berbasis lokasi |
| **Pengguna** | Admin, Petugas, Pimpinan |

---

## 4.12 Peta Bidang PBB

| Aspek | Deskripsi |
|-------|-----------|
| **Tujuan** | Menampilkan peta bidang tanah objek PBB secara visual |
| **Cara Kerja** | Setiap objek pajak yang memiliki data koordinat ditampilkan sebagai titik atau poligon di peta interaktif |
| **Manfaat** | Petugas dan admin dapat melihat lokasi persis objek pajak. Memudahkan verifikasi data lapangan |
| **Pengguna** | Admin, Petugas |

---

## 4.13 Zona Nilai Tanah (ZNT)

| Aspek | Deskripsi |
|-------|-----------|
| **Tujuan** | Menampilkan zona-zona nilai tanah di Kota Medan sebagai referensi penilaian |
| **Cara Kerja** | Data zona nilai tanah (kode zona, nama zona, nilai per meter) ditampilkan dalam peta interaktif dengan kode warna |
| **Manfaat** | Petugas penilai memiliki acuan nilai tanah yang akurat. Memudahkan penetapan NJOP yang wajar dan konsisten |
| **Pengguna** | Admin, Petugas |

---

## 4.14 Sebaran Pasar Properti

| Aspek | Deskripsi |
|-------|-----------|
| **Tujuan** | Menampilkan data pasar properti sebagai pembanding dalam penilaian |
| **Cara Kerja** | Data properti (harga pasar, luas tanah/bangunan, lokasi) ditampilkan di peta. Pengguna dapat menganalisis tren harga properti |
| **Manfaat** | Mendukung penilaian objek pajak dengan data pasar yang aktual. Meningkatkan akurasi penetapan NJOP |
| **Pengguna** | Admin, Petugas |

---

## 4.15 Laporan

| Aspek | Deskripsi |
|-------|-----------|
| **Tujuan** | Menyediakan laporan realisasi penerimaan pajak dan data terkait dalam bentuk yang informatif |
| **Cara Kerja** | Sistem mengolah data dari database dan menampilkannya dalam bentuk tabel, grafik, dan diagram. Laporan dapat difilter berdasarkan periode, jenis pajak, atau wilayah |
| **Manfaat** | Pimpinan dan admin mendapatkan laporan yang akurat dan real-time tanpa perlu rekap manual. Mempercepat pengambilan keputusan |
| **Pengguna** | Admin, Super Admin, Pimpinan |

---

## 4.16 Chatbot AI

| Aspek | Deskripsi |
|-------|-----------|
| **Tujuan** | Membantu pengguna mendapatkan informasi dan panduan layanan secara mandiri |
| **Cara Kerja** | Chatbot berbasis kecerdasan buatan (AI) yang dapat menjawab pertanyaan umum, membantu navigasi menu, memberikan panduan pembayaran, menjelaskan prosedur layanan, dan menjawab pertanyaan seputar pajak daerah |
| **Manfaat** | Pengguna mendapat bantuan instan 24 jam tanpa harus menghubungi petugas. Mengurangi beban kerja petugas untuk pertanyaan umum |
| **Pengguna** | Semua pengguna (termasuk yang belum login) |

---

## 4.17 CMS (Content Management System)

| Aspek | Deskripsi |
|-------|-----------|
| **Tujuan** | Mengelola konten informasi berupa berita dan pengumuman |
| **Cara Kerja** | Admin dapat menulis, mengedit, dan mempublikasikan berita serta pengumuman. Konten dapat dilengkapi gambar. Sistem mencatat jumlah pembaca |
| **Manfaat** | Informasi dapat diperbarui dengan cepat dan mudah. Masyarakat mendapatkan informasi terkini seputar pajak daerah |
| **Pengguna** | Admin |

---

## 4.18 PPID (Pejabat Pengelola Informasi dan Dokumentasi)

| Aspek | Deskripsi |
|-------|-----------|
| **Tujuan** | Memfasilitasi permohonan informasi publik sesuai UU Keterbukaan Informasi Publik |
| **Cara Kerja** | Pemohon mengisi formulir permohonan informasi secara online. PPID memproses dan memberikan tanggapan. Status permohonan dapat dipantau |
| **Manfaat** | Mendukung transparansi dan keterbukaan informasi publik. Proses permohonan lebih mudah dan terpantau |
| **Pengguna** | Masyarakat, Admin PPID |

---

## 4.19 Riset Mahasiswa

| Aspek | Deskripsi |
|-------|-----------|
| **Tujuan** | Memfasilitasi permohonan data untuk keperluan penelitian akademis |
| **Cara Kerja** | Mahasiswa mengajukan permohonan riset dengan melampirkan proposal dan surat keterangan. Admin mereview dan menyetujui permohonan |
| **Manfaat** | Mendukung kegiatan akademik dan penelitian di bidang perpajakan. Data diberikan secara sah dan tercatat |
| **Pengguna** | Mahasiswa, Admin |

---

# 5. ALUR PENGGUNAAN SISTEM

---

## 5.1 Alur Wajib Pajak (Lengkap)

```
1. Buka Portal
        │
2. Cek Tagihan (Cukup dengan NOP, tanpa login)
        │
3. Registrasi Akun (jika belum punya)
   atau Login (jika sudah punya)
        │
4. Dashboard Pribadi
        ├── Lihat ringkasan tagihan
        ├── Lihat notifikasi
        └── Akses menu cepat
        │
5. Menu Utama
        ├── Objek Pajak Saya → Lihat detail objek pajak
        ├── Tagihan → Pilih tagihan → Bayar
        │                    → Pilih metode pembayaran
        │                    → Bayar via Midtrans
        │                    → Status berubah Lunas
        │                    → Riwayat tersimpan
        │
        ├── SPPT Digital → Lihat SPPT → Unduh PDF → Cetak
        ├── Riwayat → Lihat semua transaksi
        ├── Pengaduan → Buat pengaduan → Pantau status
        ├── Pengajuan → Ajukan keberatan/perubahan → Pantau status
        ├── Kalkulator → Hitung pajak
        └── Simulasi → Simulasi NJOP
        │
6. Chatbot → Bertanya jika butuh bantuan
        │
7. Profil → Ubah data diri / password
        │
8. Logout
```

---

## 5.2 Alur Admin (Lengkap)

```
1. Login
        │
2. Dashboard Admin
        ├── Ringkasan penerimaan pajak
        ├── Grafik realisasi
        ├── Pengaduan terbaru
        └── Statistik pengguna
        │
3. Menu Manajemen
        ├── Users → Tambah/Ubah/Nonaktifkan pengguna
        ├── Objek Pajak → Tambah/Ubah data objek pajak
        ├── SPPT → Kelola penerbitan SPPT
        ├── Pembayaran → Verifikasi & monitoring
        ├── Pengaduan → Tanggapi pengaduan
        ├── PPID → Proses permohonan informasi
        ├── Riset → Review permohonan riset
        └── CMS → Kelola berita & pengumuman
        │
4. GIS & Laporan
        ├── Geo Dashboard → Analisis peta
        ├── Statistik → Lihat grafik & laporan
        └── Export data
        │
5. Notifikasi → Kirim pengumuman
        │
6. Logout
```

---

## 5.3 Alur Petugas (Lengkap)

```
1. Login
        │
2. Dashboard Petugas
        └── Ringkasan tugas & target
        │
3. Menu Tugas
        ├── Objek Pajak → Tambah data objek baru
        ├── Pendataan → Input data lapangan
        ├── Penilaian → Tentukan NJOP
        └── GIS → Petakan objek pajak
        │
4. Referensi
        ├── ZNT → Lihat zona nilai tanah
        └── Pasar Properti → Data pembanding
        │
5. Logout
```

---

# 6. PENJELASAN TEKNOLOGI

---

Berikut adalah penjelasan mengenai teknologi yang digunakan dalam membangun BAPENDA.HUB, dengan fokus pada manfaat bagi client, bukan detail teknis pemrograman.

---

## 6.1 Next.js (Framework Web)

| Aspek | Penjelasan |
|-------|------------|
| **Apa itu** | Framework utama untuk membangun website |
| **Manfaat bagi Client** | Website cepat diakses karena halaman dimuat secara efisien. Mendukung SEO sehingga portal mudah ditemukan di mesin pencari seperti Google. Tampilan responsif — dapat diakses dari komputer, tablet, maupun HP dengan pengalaman yang sama baiknya |

---

## 6.2 React (Library Interface)

| Aspek | Penjelasan |
|-------|------------|
| **Apa itu** | Library untuk membangun antarmuka pengguna (user interface) |
| **Manfaat bagi Client** | Tampilan portal interaktif dan responsif. Pengguna mendapat pengalaman seperti menggunakan aplikasi desktop — tidak perlu loading ulang halaman setiap kali berpindah menu. Navigasi terasa cepat dan mulus |

---

## 6.3 TypeScript

| Aspek | Penjelasan |
|-------|------------|
| **Apa itu** | Bahasa pemrograman yang membuat kode lebih terstruktur dan aman |
| **Manfaat bagi Client** | Sistem lebih stabil karena kesalahan dapat dideteksi sejak awal pengembangan. Risiko error atau bug yang mengganggu layanan menjadi lebih kecil. Sistem lebih mudah dikembangkan di masa depan |

---

## 6.4 TailwindCSS

| Aspek | Penjelasan |
|-------|------------|
| **Apa itu** | Framework CSS untuk mempercantik tampilan website |
| **Manfaat bagi Client** | Tampilan portal modern, rapi, dan konsisten di semua halaman. Loading halaman cepat karena file CSS yang ringan. Tampilan dapat dengan mudah disesuaikan dengan identitas BAPENDA Kota Medan (warna, logo, dll) |

---

## 6.5 Prisma ORM

| Aspek | Penjelasan |
|-------|------------|
| **Apa itu** | Alat untuk mengelola database |
| **Manfaat bagi Client** | Data tersimpan dengan struktur yang rapi dan terorganisir. Proses penyimpanan dan pengambilan data cepat. Memudahkan pengembangan fitur baru tanpa perlu khawatir mengganggu data yang sudah ada |

---

## 6.6 PostgreSQL (Database)

| Aspek | Penjelasan |
|-------|------------|
| **Apa itu** | Sistem database (tempat penyimpanan data) yang andal |
| **Manfaat bagi Client** | Data tersimpan dengan aman dan stabil. Dapat menangani jutaan data pengguna dan transaksi. Mendukung pencarian data yang kompleks dengan cepat. Database yang sudah teruji secara global digunakan oleh perusahaan-perusahaan besar |

---

## 6.7 NextAuth (Autentikasi)

| Aspek | Penjelasan |
|-------|------------|
| **Apa itu** | Sistem keamanan untuk login dan manajemen sesi pengguna |
| **Manfaat bagi Client** | Proses login aman dengan password yang dienkripsi. Setiap pengguna hanya bisa mengakses sesuai hak aksesnya. Sistem secara otomatis mengingat sesi login pengguna sehingga tidak perlu login ulang terus-menerus |

---

## 6.8 Midtrans (Payment Gateway)

| Aspek | Penjelasan |
|-------|------------|
| **Apa itu** | Layanan pembayaran online yang menghubungkan sistem dengan berbagai bank dan metode pembayaran |
| **Manfaat bagi Client** | Wajib pajak dapat membayar melalui berbagai metode: transfer bank (BCA, Mandiri, BRI, BNI, dll), kartu kredit, kartu debit, QRIS, GoPay, OVO, Dana, ShopeePay, dan lainnya. Pembayaran diproses secara aman. Sistem pembayaran sudah bersertifikat dan memenuhi standar keamanan industri |

---

## 6.9 UploadThing (Upload File)

| Aspek | Penjelasan |
|-------|------------|
| **Apa itu** | Layanan untuk mengunggah dan menyimpan file |
| **Manfaat bagi Client** | Wajib pajak dapat mengunggah dokumen pendukung (KTP, sertifikat tanah, dll) dengan mudah. File tersimpan secara aman di server yang terpisah. Mendukung berbagai format file |

---

## 6.10 Leaflet (GIS / Peta Interaktif)

| Aspek | Penjelasan |
|-------|------------|
| **Apa itu** | Library peta interaktif untuk menampilkan data geografis |
| **Manfaat bagi Client** | Objek pajak dapat dilihat di peta digital. Zona nilai tanah ditampilkan secara visual dengan kode warna. Sebaran properti dapat dianalisis berdasarkan lokasi. Semuanya dapat diakses langsung dari browser tanpa perlu software tambahan |

---

# 7. PENJELASAN DATABASE

---

## 7.1 Data yang Disimpan

Berikut adalah jenis-jenis data yang disimpan dalam sistem BAPENDA.HUB:

### Data Pengguna
- Informasi akun: nama, email, password (dienkripsi), peran/hak akses
- Data diri: NIK, alamat, nomor telepon, foto KTP
- Status akun: aktif / nonaktif

### Data Wajib Pajak
- Data diri wajib pajak (terintegrasi dengan data pengguna)
- Hubungan kepemilikan dengan objek pajak
- Riwayat transaksi dan aktivitas

### Data Objek Pajak
- Nomor Objek Pajak (NOP) — identitas unik objek pajak
- Data properti: alamat, luas tanah, luas bangunan, NJOP, NJOPTKP
- Status objek pajak
- Koordinat lokasi (latitude, longitude)
- Pemilik objek pajak

### Data Pembayaran
- Nomor invoice / tagihan
- Jumlah pembayaran
- Periode pajak
- Metode pembayaran yang digunakan
- Status pembayaran (menunggu, lunas, gagal, kadaluarsa)
- Tanggal pembayaran
- Kode pembayaran dari Midtrans

### Data SPPT
- Nomor SPPT
- Periode pajak
- Nilai NJOP dan NJOPTKP
- Pokok ketetapan pajak
- Status (sudah diunduh / belum)
- Data objek pajak terkait

### Data Pengajuan
- Nomor tiket pengajuan
- Jenis pengajuan (keberatan / perubahan data)
- Deskripsi dan alasan pengajuan
- Dokumen pendukung
- Status pengajuan (menunggu, diproses, disetujui, ditolak)

### Data Pengaduan
- Nomor tiket pengaduan
- Subjek dan deskripsi pengaduan
- Kategori dan prioritas
- Status dan tanggapan
- Opsi anonimitas

### Data PPID (Permohonan Informasi)
- Nomor tiket permohonan
- Jenis informasi yang diminta
- Tujuan permohonan
- Status dan tanggapan

### Data Notifikasi
- Judul dan pesan notifikasi
- Jenis dan kategori notifikasi
- Penerima notifikasi
- Status baca

### Data GIS / Spasial
- Lokasi objek pajak (titik koordinat)
- Zona nilai tanah (wilayah dan nilainya)
- Data pasar properti (harga pasar, luas, lokasi)

### Data CMS
- Berita: judul, isi, gambar, tanggal publikasi
- Pengumuman: judul, isi, kategori, status tayang

### Data Chatbot
- Riwayat percakapan
- Pertanyaan dan jawaban
- Sesi chat pengguna

### Data Audit
- Catatan aktivitas: siapa, melakukan apa, kapan, data apa yang berubah
- Data sebelum dan sesudah perubahan

---

## 7.2 Hubungan Antar Data

Berikut penjelasan hubungan antar data menggunakan analogi sederhana:

**1. Pengguna dengan Wajib Pajak**
- Satu akun pengguna dapat memiliki satu atau lebih objek pajak.
- Contoh: Bapak Andi punya akun di portal, dan di akun itu terdaftar rumahnya di Jl. Merdeka dan tokonya di Jl. Ahmad Yani.

**2. Objek Pajak dengan SPPT**
- Satu objek pajak menghasilkan satu SPPT setiap periode pajak.
- Contoh: Rumah Bapak Andi akan memiliki SPPT tahun 2025, SPPT tahun 2026, dan seterusnya.

**3. Objek Pajak dengan Pembayaran**
- Satu objek pajak dapat memiliki banyak pembayaran (untuk periode yang berbeda).
- Contoh: Rumah Bapak Andi punya riwayat pembayaran tahun 2023, 2024, 2025.

**4. Pengguna dengan Pengaduan/Pengajuan/PPID**
- Satu pengguna dapat membuat banyak pengaduan, pengajuan, atau permohonan informasi.
- Contoh: Bapak Andi bisa mengadu 3 kali dan mengajukan keberatan 1 kali.

**5. Objek Pajak dengan Data Spasial**
- Satu objek pajak memiliki satu lokasi di peta (koordinat).
- Zona nilai tanah mencakup banyak objek pajak di wilayah yang sama.

**6. Pengguna dengan Notifikasi**
- Satu pengguna dapat menerima banyak notifikasi.
- Contoh: Bapak Andi mendapat notifikasi tagihan, notifikasi pembayaran berhasil, dan notifikasi pengumuman.

---

# 8. KEUNGGULAN SISTEM

---

Berikut adalah nilai tambah BAPENDA.HUB dibandingkan proses manual:

| No | Keunggulan | Penjelasan |
|----|-----------|------------|
| 1 | **Digitalisasi Data** | Seluruh data tersimpan secara digital dalam satu database terpusat. Tidak ada lagi data tersebar di spreadsheet, file Word, atau dokumen fisik |
| 2 | **Mengurangi Kesalahan Pencatatan** | Sistem memiliki validasi data sehingga meminimalkan kesalahan input. Format data konsisten dan terstandarisasi |
| 3 | **Mempercepat Pelayanan** | Wajib pajak dapat mengecek tagihan, membayar, mengunduh SPPT, mengajukan pengaduan secara online tanpa antre |
| 4 | **Monitoring Real-time** | Pimpinan dan admin dapat melihat realisasi penerimaan pajak secara langsung tanpa harus menunggu laporan rekap |
| 5 | **Keamanan Data Terjamin** | Data dilindungi dengan password terenkripsi, hak akses sesuai peran, dan setiap aktivitas tercatat dalam audit log |
| 6 | **Laporan Otomatis** | Laporan penerimaan dapat dihasilkan secara instan dalam bentuk grafik dan tabel. Tidak perlu rekap manual |
| 7 | **Akses 24 Jam** | Portal dapat diakses kapan saja, dari mana saja, melalui komputer atau HP. Pelayanan tidak terbatas jam kantor |
| 8 | **Pembayaran Multi-channel** | Wajib pajak dapat membayar melalui berbagai metode: transfer bank, kartu kredit, QRIS, e-wallet, dan lainnya |
| 9 | **Analisis Spasial** | Data pajak divisualisasikan dalam peta interaktif untuk analisis potensi dan pengambilan keputusan berbasis lokasi |
| 10 | **Transparansi** | Setiap proses tercatat dan dapat dilacak. Wajib pajak dapat memantau status pengajuan dan pengaduan mereka |
| 11 | **Mendukung Keterbukaan Informasi** | Fitur PPID memfasilitasi permohonan informasi publik sesuai peraturan perundang-undangan |
| 12 | **Efisiensi Biaya** | Mengurangi biaya cetak SPPT, biaya distribusi dokumen, dan biaya operasional pelayanan manual |
| 13 | **Skalabilitas** | Sistem dapat menangani jumlah pengguna dan data yang terus bertambah. Siap dikembangkan dengan fitur-fitur baru |
| 14 | **Backup Data** | Data tersimpan di database yang dapat di-backup secara berkala. Mengurangi risiko kehilangan data |

---

# 9. KEAMANAN SISTEM

---

## 9.1 Lapisan Keamanan

BAPENDA.HUB menerapkan beberapa lapisan keamanan untuk melindungi data dan privasi pengguna:

### Lapisan 1: Autentikasi (Login)
- Setiap pengguna harus login menggunakan email dan password untuk mengakses sistem.
- Password disimpan dalam bentuk terenkripsi (tidak bisa dibaca oleh siapa pun, termasuk admin).
- Session login memiliki batas waktu.

### Lapisan 2: Otorisasi (Hak Akses)
- Setiap pengguna hanya dapat mengakses menu dan fitur sesuai perannya.
- Wajib Pajak hanya bisa melihat data miliknya sendiri.
- Admin tidak bisa mengubah data sensitif seperti password pengguna lain.
- Setiap akses ke halaman tertentu diverifikasi oleh sistem.

### Lapisan 3: Enkripsi Data
- Password dienkripsi menggunakan algoritma bcrypt.
- Data yang dikirim antara browser dan server diamankan dengan HTTPS.
- Token pembayaran dari Midtrans diamankan.

### Lapisan 4: Audit Trail
- Setiap aktivitas penting dalam sistem tercatat: siapa, apa, kapan, dan data apa yang berubah.
- Catatan audit tidak bisa diubah atau dihapus.
- Admin dapat memantau aktivitas mencurigakan.

### Lapisan 5: Keamanan Database
- Database hanya dapat diakses oleh server aplikasi (tidak langsung dari luar).
- Koneksi database menggunakan credential yang aman.
- Database dapat di-backup secara berkala.

### Lapisan 6: Keamanan Pembayaran
- Proses pembayaran ditangani oleh Midtrans yang sudah bersertifikat PCI DSS (standar keamanan industri pembayaran).
- Data kartu kredit/debit tidak pernah disimpan di sistem kami.
- Setiap transaksi memiliki kode unik dan tercatat.

### Lapisan 7: Validasi Data
- Data yang dimasukkan oleh pengguna divalidasi untuk mencegah input berbahaya.
- File yang diunggah diperiksa tipe dan ukurannya.

---

## 9.2 Praktik Keamanan Tambahan

- **Sesi pengguna** akan otomatis berakhir setelah periode tidak aktif tertentu.
- **Notifikasi aktivitas login** — pengguna dapat melihat riwayat login mereka.
- **Perubahan data penting** — memerlukan konfirmasi.
- **Role bawaan** — Super Admin, Admin, Petugas, Wajib Pajak, Mahasiswa — masing-masing dengan batasan akses yang jelas.

---

# 10. ALUR PEMBAYARAN

---

## 10.1 Ilustrasi Alur Pembayaran

```
                    ┌─────────────────────────────┐
                    │   WAJIB PAJAK LOGIN          │
                    └─────────────┬───────────────┘
                                  │
                                  ▼
                    ┌─────────────────────────────┐
                    │   LIHAT TAGIHAN              │
                    │   (Daftar tagihan yang       │
                    │    belum dibayar)             │
                    └─────────────┬───────────────┘
                                  │
                                  ▼
                    ┌─────────────────────────────┐
                    │   PILIH TAGIHAN              │
                    │   & KLIK "BAYAR"             │
                    └─────────────┬───────────────┘
                                  │
                                  ▼
                    ┌─────────────────────────────┐
                    │   SISTEM MEMBUAT             │
                    │   KODE TAGIHAN (INVOICE)     │
                    └─────────────┬───────────────┘
                                  │
                                  ▼
                    ┌─────────────────────────────┐
                    │   PILIH METODE BAYAR:        │
                    │   - Transfer Bank            │
                    │   - Kartu Kredit/Debit       │
                    │   - QRIS                     │
                    │   - E-wallet (GoPay/OVO/dll) │
                    │   - Indomaret/Alfamart       │
                    └─────────────┬───────────────┘
                                  │
                                  ▼
                    ┌─────────────────────────────┐
                    │   DIALIHKAN KE HALAMAN       │
                    │   PEMBAYARAN MIDTRANS        │
                    │   (Aman & Terenkripsi)       │
                    └─────────────┬───────────────┘
                                  │
                                  ▼
                    ┌─────────────────────────────┐
                    │   WAJIB PAJAK MEMBAYAR       │
                    │   MELALUI METODE DIPILIH     │
                    └─────────────┬───────────────┘
                                  │
                                  ▼
                    ┌─────────────────────────────┐
                    │   MIDTRANS PROSES            │
                    │   PEMBAYARAN & KIRIM         │
                    │   KONFIRMASI KE SISTEM       │
                    └─────────────┬───────────────┘
                                  │
                                  ▼
                    ┌─────────────────────────────┐
                    │   STATUS TAGIHAN BERUBAH     │
                    │   MENJADI "LUNAS"            │
                    └─────────────┬───────────────┘
                                  │
                                  ▼
                    ┌─────────────────────────────┐
                    │   NOTIFIKASI TERKIRIM        │
                    │   KE WAJIB PAJAK             │
                    └─────────────┬───────────────┘
                                  │
                                  ▼
                    ┌─────────────────────────────┐
                    │   RIWAYAT TERSIMPAN          │
                    │   & LAPORAN TERUPDATE        │
                    └─────────────┬───────────────┘
                                  │
                                  ▼
                    ┌─────────────────────────────┐
                    │   BUKTI BAYAR / RESI         │
                    │   DIGITAL DAPAT DIUNDUH      │
                    └─────────────────────────────┘
```

---

## 10.2 Penjelasan Detail Alur Pembayaran

1. **Tagihan Muncul** — Sistem menampilkan daftar tagihan pajak yang harus dibayar oleh wajib pajak untuk periode tertentu.
2. **Pilih Tagihan** — Wajib pajak memilih tagihan yang ingin dibayar, lalu mengklik tombol "Bayar".
3. **Sistem Membuat Invoice** — Sistem membuat kode tagihan unik (invoice) dan mencatat status "menunggu pembayaran".
4. **Pilih Metode Pembayaran** — Wajib pajak memilih metode pembayaran yang tersedia:
   - Transfer Bank (BCA, Mandiri, BRI, BNI, dll)
   - Kartu Kredit / Debit (Visa, Mastercard)
   - QRIS (scan QR code)
   - E-Wallet (GoPay, OVO, Dana, ShopeePay, LinkAja)
   - Gerai Retail (Indomaret, Alfamart)
5. **Pembayaran** — Wajib pajak menyelesaikan pembayaran melalui kanal yang dipilih.
6. **Konfirmasi Otomatis** — Midtrans mengirimkan notifikasi ke sistem bahwa pembayaran berhasil.
7. **Status Berubah** — Sistem mengubah status tagihan dari "menunggu" menjadi "lunas".
8. **Riwayat Tersimpan** — Data pembayaran tercatat dalam riwayat transaksi wajib pajak.
9. **Notifikasi** — Wajib pajak mendapat notifikasi bahwa pembayaran telah berhasil.
10. **Laporan Terupdate** — Dashboard penerimaan dan laporan realisasi langsung diperbarui.
11. **Bukti Bayar** — Wajib pajak dapat mengunduh bukti pembayaran digital (PDF).

---

## 10.3 Penanganan Status Pembayaran

| Status | Arti | Tindakan yang Perlu Dilakukan |
|--------|------|-------------------------------|
| **Menunggu** | Tagihan dibuat, menunggu pembayaran | Wajib pajak segera melakukan pembayaran |
| **Lunas** | Pembayaran berhasil diverifikasi | Tidak perlu tindakan. Bukti bayar tersedia |
| **Gagal** | Pembayaran gagal diproses | Wajib pajak dapat mencoba lagi dengan metode lain |
| **Kadaluarsa** | Batas waktu pembayaran terlewati | Wajib pajak dapat membuat tagihan baru |
| **Refund** | Pembayaran dikembalikan | Menunggu proses refund selesai |

---

# 11. PENJELASAN GIS

---

## 11.1 Apa itu GIS dalam Konteks Pajak Daerah?

GIS (Geographic Information System) atau Sistem Informasi Geografis adalah teknologi yang menghubungkan data pajak dengan lokasi geografis. Dalam BAPENDA.HUB, GIS memungkinkan data objek pajak, nilai tanah, dan properti divisualisasikan dalam peta digital interaktif.

---

## 11.2 Peta Bidang PBB

### Manfaat bagi Instansi:
- **Visualisasi Objek Pajak** — Seluruh objek PBB dapat dilihat lokasinya di peta secara visual, lengkap dengan informasi detail seperti NOP, alamat, luas tanah, luas bangunan, dan NJOP.
- **Verifikasi Lapangan** — Petugas dapat memverifikasi apakah data objek pajak sesuai dengan kondisi di lapangan dengan membandingkan data di peta.
- **Monitoring Kepemilikan** — Memudahkan identifikasi kepemilikan tanah di suatu wilayah.
- **Deteksi Potensi Pajak** — Memudahkan identifikasi objek pajak baru yang belum terdaftar.

---

## 11.3 Zona Nilai Tanah (ZNT)

### Manfaat bagi Instansi:
- **Acuan Penilaian** — Memberikan acuan nilai tanah per meter persegi untuk setiap wilayah/zona di Kota Medan.
- **Konsistensi Penilaian** — Penetapan NJOP menjadi lebih konsisten karena ada standar nilai per zona.
- **Visualisasi Zona** — Zona nilai tanah ditampilkan dengan kode warna yang memudahkan pembacaan.
- **Pembaruan Data** — Zona nilai tanah dapat diperbarui secara berkala mengikuti perkembangan pasar.
- **Transparansi** — Masyarakat dapat melihat zona nilai tanah di wilayahnya sehingga memahami dasar penetapan pajak.

### Contoh Penggunaan:
Misalnya, di Kecamatan Medan Baru, nilai tanah per meter persegi adalah Rp 5.000.000. Maka untuk tanah seluas 200 m² di zona tersebut, NJOP tanah = 200 × Rp 5.000.000 = Rp 1.000.000.000. Penilai tidak perlu lagi memperkirakan secara manual.

---

## 11.4 Sebaran Pasar Properti

### Manfaat bagi Instansi:
- **Data Pembanding** — Menyediakan data harga pasar properti aktual sebagai pembanding dalam penilaian NJOP.
- **Analisis Tren** — Memantau tren harga properti di berbagai wilayah Kota Medan.
- **Akurasi Penilaian** — NJOP dapat ditetapkan lebih akurat karena didukung data pasar yang real-time.
- **Informasi Pasar** — Mengetahui perkembangan harga properti di setiap kecamatan/kelurahan.

### Contoh Penggunaan:
Petugas penilai ingin menilai sebuah rumah di Kecamatan Medan Selayang. Dengan melihat data pasar properti, petugas dapat membandingkan dengan properti serupa di wilayah yang sama yang telah memiliki harga pasar.

---

## 11.5 Geo Dashboard

### Manfaat bagi Instansi:
- **Monitoring Real-time** — Melihat statistik pajak berbasis lokasi secara real-time dalam satu dashboard.
- **Analisis Spasial** — Menganalisis potensi pajak berdasarkan wilayah: kecamatan mana yang potensi pajaknya besar, mana yang masih rendah.
- **Pendukung Keputusan** — Data visual membantu pimpinan dalam pengambilan keputusan strategis.
- **Laporan Berbasis Lokasi** — Laporan dapat difilter berdasarkan wilayah geografis.

### Yang Ditampilkan:
- Jumlah objek pajak per kecamatan (ditampilkan di peta)
- Realisasi penerimaan per wilayah
- Sebaran nilai tanah
- Tingkat kepatuhan pembayaran per wilayah
- Perbandingan target vs realisasi

---

# 12. PENJELASAN CHATBOT

---

## 12.1 Apa Itu Chatbot AI?

Chatbot adalah asisten virtual berbasis kecerdasan buatan (AI) yang dapat berkomunikasi dengan pengguna melalui teks. Chatbot di BAPENDA.HUB berfungsi seperti petugas layanan yang siap membantu 24 jam sehari, 7 hari seminggu.

---

## 12.2 Fungsi Chatbot

### 1. Membantu Pengguna Memperoleh Informasi
- Menjawab pertanyaan umum tentang pajak daerah.
- Menjelaskan jenis-jenis pajak yang dikelola BAPENDA.
- Memberikan informasi tarif pajak dan dasar hukumnya.

### 2. Membantu Navigasi Menu
- Membantu pengguna menemukan menu atau fitur yang dicari.
- Contoh: "Bagaimana cara melihat SPPT saya?" → Chatbot akan mengarahkan ke menu SPPT Digital.

### 3. Memberikan Panduan Pembayaran
- Menjelaskan langkah-langkah pembayaran pajak secara online.
- Menjelaskan metode pembayaran yang tersedia.
- Membantu jika pengguna mengalami masalah pembayaran.

### 4. Memberikan Informasi SPPT
- Menjelaskan cara mendapatkan SPPT digital.
- Menjelaskan komponen yang ada di SPPT (NJOP, NJOPTKP, Pajak Terutang, dll).

### 5. Menjawab Pertanyaan Umum (FAQ)
- "Bagaimana cara daftar akun?"
- "Apa itu NOP dan bagaimana mendapatkannya?"
- "Kapan jatuh tempo pembayaran pajak?"
- "Bagaimana cara mengajukan keberatan?"
- "Apa saja dokumen yang diperlukan untuk mengajukan perubahan data?"

### 6. Informasi Kontak dan Lokasi
- Memberikan alamat kantor BAPENDA Kota Medan.
- Memberikan jam operasional pelayanan.
- Menyediakan nomor telepon yang bisa dihubungi.

---

## 12.3 Manfaat Chatbot

| Manfaat | Penjelasan |
|---------|------------|
| **Pelayanan 24 Jam** | Pengguna dapat bertanya kapan saja, termasuk di luar jam kantor |
| **Respon Instan** | Tidak perlu menunggu — jawaban langsung diberikan |
| **Mengurangi Beban Petugas** | Pertanyaan umum dijawab oleh chatbot, petugas fokus pada pertanyaan kompleks |
| **Mudah Diakses** | Tersedia di setiap halaman portal melalui widget chat |
| **Konsisten** | Informasi yang diberikan selalu akurat dan konsisten |
| **Biaya Efisien** | Tidak perlu menambah staf untuk layanan informasi dasar |

---

# 13. DEMO PRESENTASI

---

Berikut adalah urutan demo yang disarankan beserta poin-poin yang harus disampaikan pada setiap halaman.

---

## 13.1 Urutan Demo

### Langkah 1: Halaman Utama Portal (Landing Page)

**Yang Ditampilkan:**
- Tampilan awal portal BAPENDA.HUB
- Hero section dengan tagline dan gambaran sistem
- Fitur "Cek Pajak" dengan memasukkan NOP
- Berita terbaru dan pengumuman
- Layanan-layanan yang tersedia
- Peta interaktif di halaman utama

**Yang Disampaikan:**
"Bapak/Ibu, ini adalah halaman utama portal BAPENDA.HUB. Dari sini, masyarakat dapat melihat informasi layanan pajak, berita terbaru, dan yang paling penting — mereka bisa mengecek tagihan PBB hanya dengan memasukkan Nomor Objek Pajak atau NOP, tanpa perlu login terlebih dahulu. Portal ini dapat diakses melalui komputer maupun HP."

---

### Langkah 2: Login

**Yang Ditampilkan:**
- Halaman login dengan form email dan password
- Tautan untuk registrasi bagi pengguna baru
- Opsi "Lupa Password" (jika tersedia)

**Yang Disampaikan:**
"Ini adalah halaman login. Setiap pengguna — baik wajib pajak, petugas, maupun admin — masuk melalui halaman yang sama. Sistem akan mengenali peran masing-masing pengguna dan menampilkan dashboard yang sesuai. Bagi yang belum punya akun, dapat mendaftar melalui tautan registrasi."

---

### Langkah 3: Login sebagai Wajib Pajak → Dashboard Pribadi

**Yang Ditampilkan:**
- Dashboard wajib pajak setelah login
- Ringkasan tagihan yang belum dibayar
- Riwayat pembayaran terakhir
- Notifikasi terbaru
- Menu-menu yang tersedia (Objek Pajak, Tagihan, SPPT, Pengaduan, dll)

**Yang Disampaikan:**
"Setelah login, wajib pajak langsung melihat dashboard pribadi. Di sini mereka dapat melihat ringkasan tagihan yang belum dibayar, riwayat pembayaran terakhir, dan notifikasi penting. Semua informasi ini diperbarui secara real-time. Dari sini mereka bisa mengakses layanan-layanan lain seperti melihat objek pajak, membayar tagihan, mengunduh SPPT, mengajukan pengaduan, dan lainnya."

---

### Langkah 4: Tagihan & Pembayaran

**Yang Ditampilkan:**
- Daftar tagihan yang harus dibayar
- Detail tagihan (periode, jumlah, jatuh tempo)
- Proses pembayaran: pilih tagihan → pilih metode bayar → halaman Midtrans
- Konfirmasi pembayaran berhasil
- Riwayat pembayaran

**Yang Disampaikan:**
"Ini adalah fitur pembayaran pajak. Wajib pajak melihat daftar tagihan yang harus dibayar. Mereka bisa memilih tagihan, lalu mengklik Bayar. Sistem akan menampilkan berbagai metode pembayaran: transfer bank, kartu kredit, QRIS, e-wallet, hingga pembayaran di gerai ritel. Setelah memilih metode, mereka akan diarahkan ke halaman pembayaran yang aman dari Midtrans. Pembayaran diproses secara real-time, dan status langsung berubah menjadi Lunas. Ini adalah contoh bukti pembayaran digital yang bisa diunduh."

---

### Langkah 5: SPPT Digital

**Yang Ditampilkan:**
- Daftar SPPT yang tersedia
- Tampilan SPPT digital
- Tombol unduh PDF

**Yang Disampaikan:**
"Ini adalah fitur SPPT Digital. Wajib pajak dapat melihat dan mengunduh Surat Pemberitahuan Pajak Terutang mereka dalam format PDF. Tidak perlu lagi menunggu SPPT fisik dikirimkan ke rumah. Cukup login, buka menu SPPT, dan unduh. Ini menghemat waktu, biaya cetak, dan biaya distribusi."

---

### Langkah 6: Objek Pajak

**Yang Ditampilkan:**
- Daftar objek pajak milik wajib pajak
- Detail objek pajak (NOP, alamat, luas tanah/bangunan, NJOP, status)
- Peta lokasi objek pajak

**Yang Disampaikan:**
"Di sini, wajib pajak dapat melihat data objek pajak yang dimilikinya. Mulai dari NOP, alamat, luas tanah, luas bangunan, hingga NJOP. Jika objek pajak memiliki data koordinat, lokasinya juga dapat dilihat di peta. Jika ada data yang tidak sesuai, wajib pajak dapat mengajukan perubahan data melalui menu pengajuan."

---

### Langkah 7: Pengaduan

**Yang Ditampilkan:**
- Formulir pengaduan
- Daftar pengaduan yang sudah dibuat
- Status pengaduan (menunggu, diproses, selesai)
- Tanggapan dari admin

**Yang Disampaikan:**
"Ini adalah fitur pengaduan. Masyarakat dapat menyampaikan keluhan atau masalah terkait layanan perpajakan secara online. Mereka bisa memilih kategori pengaduan, menulis deskripsi, dan mengirimkannya. Status pengaduan dapat dipantau — apakah masih menunggu, sedang diproses, atau sudah selesai. Pengguna juga bisa memilih untuk menyampaikan pengaduan secara anonim."

---

### Langkah 8: Login sebagai Admin → Dashboard Admin

**Yang Ditampilkan:**
- Dashboard admin dengan ringkasan data
- Grafik realisasi penerimaan
- Statistik pengguna dan objek pajak
- Pengaduan terbaru yang perlu ditindaklanjuti

**Yang Disampaikan:**
"Sekarang kita beralih ke tampilan Admin. Dashboard admin memberikan gambaran menyeluruh tentang kondisi sistem dan penerimaan pajak. Admin dapat melihat realisasi penerimaan dalam bentuk grafik, jumlah wajib pajak terdaftar, jumlah objek pajak, serta pengaduan yang perlu ditindaklanjuti. Semua data ini real-time."

---

### Langkah 9: Manajemen Objek Pajak (Admin)

**Yang Ditampilkan:**
- Tabel daftar objek pajak
- Form tambah/ubah objek pajak
- Pencarian dan filter

**Yang Disampaikan:**
"Ini adalah halaman manajemen objek pajak untuk admin. Admin dapat melihat seluruh objek pajak, mencari berdasarkan NOP atau alamat, menambah objek pajak baru, mengubah data yang ada, dan menghapus data. Fitur pencarian dan filter memudahkan pengelolaan ribuan objek pajak."

---

### Langkah 10: Geo Dashboard & Peta

**Yang Ditampilkan:**
- Geo Dashboard dengan peta interaktif
- Peta bidang PBB (titik objek pajak)
- Zona Nilai Tanah (kode warna per zona)
- Sebaran Pasar Properti
- Grafik dan statistik spasial

**Yang Disampaikan:**
"Ini adalah fitur GIS atau Sistem Informasi Geografis. Di sini, data pajak dihubungkan dengan lokasi geografis. Kita bisa melihat peta sebaran objek pajak di seluruh Kota Medan, zona nilai tanah dengan kode warna, dan data pasar properti. Fitur ini sangat membantu petugas dalam melakukan penilaian, karena mereka bisa melihat acuan nilai tanah dan data pembanding properti di suatu wilayah. Ini juga membantu pimpinan dalam menganalisis potensi pajak berbasis wilayah."

---

### Langkah 11: Chatbot

**Yang Ditampilkan:**
- Widget chatbot di pojok kanan bawah
- Contoh interaksi: bertanya tentang cara bayar pajak, cara lihat SPPT, dll

**Yang Disampaikan:**
"Ini adalah fitur chatbot AI. Pengguna bisa bertanya apa pun tentang layanan pajak di sini. Chatbot akan menjawab secara instan. Misalnya, kita tanya 'Bagaimana cara membayar pajak?' — chatbot langsung memberikan panduan langkah demi langkah. Chatbot tersedia 24 jam dan dapat diakses dari halaman mana pun."

---

### Langkah 12: Logout

**Yang Ditampilkan:**
- Menu logout
- Kembali ke halaman utama

**Yang Disampaikan:**
"Setelah selesai menggunakan sistem, pengguna dapat logout dengan aman. Sistem akan mengakhiri sesi dan kembali ke halaman utama."

---

## 13.2 Tips Demo

| Tips | Penjelasan |
|------|------------|
| **Gunakan Data Demo** | Siapkan data contoh (bukan data asli) untuk demo, agar lebih leluasa menampilkan fitur |
| **Siapkan Akun Demo** | Siapkan minimal 2 akun: 1 wajib pajak dan 1 admin |
| **Siapkan Skenario** | Buat skenario seperti "Seorang wajib pajak ingin mengecek tagihan dan membayar" |
| **Fokus pada Manfaat** | Saat mendemo, jelaskan manfaatnya, bukan teknisnya |
| **Siapkan Jaringan** | Pastikan koneksi internet stabil selama demo |
| **Backup Offline** | Siapkan screenshot atau video jika koneksi bermasalah |

---

# 14. PERTANYAAN CLIENT

---

Berikut adalah prediksi pertanyaan yang mungkin diajukan client beserta jawaban profesionalnya.

---

## Pertanyaan Umum

### Q1: Mengapa kami harus menggunakan sistem ini?

**Jawaban:**
Sistem ini dirancang untuk menjawab tantangan utama dalam pengelolaan pajak daerah di Kota Medan: data yang tersebar, proses manual yang lambat, dan akses informasi yang terbatas. Dengan BAPENDA.HUB, seluruh proses layanan pajak menjadi digital, terpusat, dan real-time. Wajib pajak bisa membayar dari rumah, admin bisa memonitor penerimaan secara langsung, dan laporan bisa dihasilkan secara instan. Ini akan meningkatkan efisiensi, transparansi, dan penerimaan pajak daerah.

---

### Q2: Apakah sistem ini sudah pernah diimplementasikan di tempat lain?

**Jawaban:**
Saat ini BAPENDA.HUB masih dalam tahap pengembangan dan siap diimplementasikan di BAPENDA Kota Medan. Sistem ini dibangun dengan teknologi yang sudah teruji dan banyak digunakan oleh instansi pemerintah maupun perusahaan swasta di seluruh dunia.

---

### Q3: Berapa lama waktu yang dibutuhkan untuk mengimplementasikan sistem ini?

**Jawaban:**
Implementasi sistem ini dapat dilakukan secara bertahap. Tahap pertama — yang sudah selesai dikembangkan — mencakup seluruh fitur inti seperti manajemen objek pajak, pembayaran online, SPPT digital, GIS, pengaduan, dan CMS. Tahap implementasi dan migrasi data dapat dilakukan dalam waktu 1–3 bulan tergantung pada kesiapan data dan sumber daya.

---

### Q4: Apakah sistem ini dapat dikembangkan lagi di masa depan?

**Jawaban:**
Sangat bisa. Sistem ini dibangun dengan arsitektur yang fleksibel dan dapat dikembangkan. Beberapa fitur yang dapat ditambahkan di masa depan antara lain: integrasi dengan sistem pembayaran daerah lainnya, dashboard analitik yang lebih canggih, aplikasi mobile native, integrasi dengan E-KTP dan data kependudukan, serta integrasi dengan sistem keuangan daerah.

---

### Q5: Apakah sistem ini mendukung banyak pengguna sekaligus?

**Jawaban:**
Ya. Sistem ini dibangun dengan arsitektur yang skalabel, artinya dapat menangani jumlah pengguna yang besar secara bersamaan. Infrastruktur database PostgreSQL sudah teruji menangani jutaan transaksi. Jika diperlukan, sistem juga dapat ditingkatkan kapasitasnya (scaling) dengan menambah sumber daya server.

---

## Pertanyaan Keamanan

### Q6: Bagaimana keamanan data dalam sistem ini?

**Jawaban:**
Kami menerapkan keamanan berlapis. Password dienkripsi menggunakan algoritma bcrypt yang sudah menjadi standar industri. Setiap pengguna memiliki hak akses sesuai perannya — wajib pajak tidak bisa melihat data orang lain. Setiap aktivitas penting tercatat dalam audit log yang tidak bisa diubah. Koneksi antara browser dan server diamankan dengan HTTPS. Untuk pembayaran, kami menggunakan Midtrans yang sudah bersertifikat PCI DSS — standar keamanan tertinggi di industri pembayaran. Data kartu kredit tidak pernah disimpan di sistem kami.

---

### Q7: Apakah data kami aman dari peretasan?

**Jawaban:**
Kami menerapkan berbagai praktik keamanan terbaik untuk melindungi data: validasi input untuk mencegah serangan injeksi, enkripsi data sensitif, otentikasi yang aman, dan logging aktivitas mencurigakan. Namun, keamanan sistem juga membutuhkan partisipasi pengguna — seperti menggunakan password yang kuat dan tidak membagikan akun kepada orang lain.

---

### Q8: Siapa yang bisa mengakses data di sistem ini?

**Jawaban:**
Setiap pengguna hanya bisa mengakses data sesuai dengan peran dan kewenangannya. Wajib pajak hanya bisa melihat data miliknya sendiri. Admin bisa melihat data yang diperlukan untuk operasional. Super Admin memiliki akses paling luas. Semua akses tercatat dalam audit log sehingga dapat dipantau.

---

### Q9: Apakah ada backup data?

**Jawaban:**
Ya. Data disimpan di PostgreSQL yang dapat dikonfigurasi untuk melakukan backup otomatis secara berkala. Kami merekomendasikan backup harian dengan retensi sesuai kebijakan instansi. Backup dapat disimpan di lokasi yang berbeda dari server utama untuk mengantisipasi bencana.

---

### Q10: Bagaimana jika server mati atau terjadi gangguan?

**Jawaban:**
Kami merekomendasikan penggunaan infrastruktur cloud yang memiliki uptime tinggi (99.9%+). Jika server mengalami gangguan, penyedia cloud biasanya memiliki mekanisme failover otomatis. Data tidak akan hilang karena tersimpan di database yang persisten. Untuk keperluan produksi, kami sarankan menggunakan minimal 2 server (production dan backup) dengan load balancing.

---

## Pertanyaan Pembayaran

### Q11: Apakah pembayaran benar-benar aman?

**Jawaban:**
Sangat aman. Kami menggunakan Midtrans, payment gateway terkemuka di Indonesia yang sudah bersertifikat PCI DSS Level 1 — standar keamanan internasional untuk industri pembayaran. Data kartu kredit dan informasi sensitif lainnya ditangani langsung oleh Midtrans, tidak pernah disimpan di sistem kami. Setiap transaksi juga dilindungi dengan enkripsi dan verifikasi.

---

### Q12: Metode pembayaran apa saja yang tersedia?

**Jawaban:**
Wajib pajak dapat membayar melalui berbagai metode: Transfer Bank (BCA, Mandiri, BRI, BNI, Permata, dll), Kartu Kredit/Debit (Visa, Mastercard), QRIS, E-Wallet (GoPay, OVO, Dana, ShopeePay, LinkAja), dan pembayaran di gerai ritel (Indomaret, Alfamart).

---

### Q13: Apakah ada biaya tambahan untuk pembayaran online?

**Jawaban:**
Setiap metode pembayaran mungkin dikenakan biaya transaksi (merchant fee) oleh penyedia layanan pembayaran, yang besarnya bervariasi tergantung metode yang dipilih. Detail biaya akan ditampilkan sebelum wajib pajak mengonfirmasi pembayaran sehingga tidak ada biaya tersembunyi.

---

### Q14: Bagaimana jika pembayaran gagal tetapi uang sudah terpotong?

**Jawaban:**
Jika pembayaran gagal setelah uang terpotong, sistem Midtrans akan secara otomatis melakukan refund. Proses refund biasanya memakan waktu 1–14 hari kerja tergantung kebijakan bank penerbit. Wajib pajak dapat menghubungi call center Midtrans atau admin BAPENDA untuk bantuan lebih lanjut.

---

### Q15: Apakah pembayaran bisa dilakukan melalui mobile banking?

**Jawaban:**
Ya. Wajib pajak dapat memilih metode transfer bank, dan sistem akan menampilkan kode pembayaran yang dapat digunakan di mobile banking. Atau jika memilih QRIS, cukup scan QR code menggunakan aplikasi pembayaran apa pun yang mendukung QRIS.

---

## Pertanyaan Teknis & Operasional

### Q16: Apakah sistem ini bisa diakses melalui HP?

**Jawaban:**
Tentu. Portal BAPENDA.HUB dirancang responsif, artinya tampilan akan menyesuaikan dengan ukuran layar perangkat apa pun — komputer, tablet, maupun HP. Pengguna dapat mengakses seluruh fitur melalui browser HP tanpa perlu menginstal aplikasi tambahan.

---

### Q17: Berapa biaya pengembangan dan implementasi sistem ini?

**Jawaban:**
Biaya pengembangan sistem ini bervariasi tergantung pada ruang lingkup fitur yang diimplementasikan, infrastruktur yang digunakan, dan dukungan teknis yang diperlukan. Untuk informasi lebih detail mengenai biaya, kami dapat mendiskusikannya lebih lanjut secara terpisah.

---

### Q18: Apakah ada biaya langganan bulanan?

**Jawaban:**
Biaya operasional bulanan meliputi hosting/server, database, layanan Midtrans (per transaksi), dan domain (tahunan). Untuk pengembangan awal, tidak ada biaya lisensi karena sistem ini dibangun menggunakan teknologi open-source. Detail biaya operasional akan disesuaikan dengan skala penggunaan.

---

### Q19: Siapa yang akan melakukan maintenance sistem?

**Jawaban:**
Maintenance dapat dilakukan oleh tim IT internal BAPENDA setelah mendapatkan pelatihan, atau dapat menggunakan jasa pengembang untuk dukungan teknis berkala. Kami akan menyediakan dokumentasi teknis yang lengkap untuk memudahkan maintenance.

---

### Q20: Apakah sistem ini bisa diintegrasikan dengan sistem lain yang sudah ada?

**Jawaban:**
Ya. Sistem ini dibangun dengan arsitektur yang mendukung integrasi melalui API (Application Programming Interface). Sistem dapat diintegrasikan dengan sistem keuangan daerah, sistem kependudukan, sistem perizinan, atau sistem lain yang sudah ada di lingkungan Pemerintah Kota Medan.

---

### Q21: Bagaimana jika ada perubahan peraturan pajak?

**Jawaban:**
Sistem ini dirancang fleksibel sehingga perhitungan pajak, tarif, dan aturan dapat diperbarui dengan mudah melalui konfigurasi sistem tanpa harus mengubah kode program secara besar-besaran.

---

### Q22: Apakah sistem ini bisa menangani data dalam jumlah besar?

**Jawaban:**
Ya. PostgreSQL sebagai database utama sudah teruji menangani data dalam skala besar (millions of records) dengan performa yang tetap stabil. Sistem juga mendukung optimasi pencarian dan filtering data agar tetap cepat meskipun data sudah sangat banyak.

---

### Q23: Bahasa pemrograman apa yang digunakan? Apakah mendukung pengembangan oleh tim lokal?

**Jawaban:**
Sistem ini menggunakan TypeScript/JavaScript — bahasa pemrograman yang sangat populer dan banyak dikuasai oleh developer di Indonesia. Framework Next.js juga memiliki komunitas yang besar dan dokumentasi yang lengkap. Ini memudahkan jika suatu saat BAPENDA ingin mengembangkan sendiri sistem ini dengan tim developer lokal.

---

## Pertanyaan Fitur

### Q24: Apakah fitur GIS benar-benar diperlukan?

**Jawaban:**
Sangat diperlukan. Data pajak bumi dan bangunan pada dasarnya adalah data spasial — setiap objek pajak memiliki lokasi. Dengan GIS, kita bisa melihat sebaran objek pajak, menganalisis potensi pajak per wilayah, menentukan zona nilai tanah dengan lebih akurat, dan membandingkan dengan data pasar properti. Ini membantu penilaian yang lebih akurat dan pengambilan keputusan yang lebih baik.

---

### Q25: Apakah data peta yang digunakan akurat?

**Jawaban:**
Data peta yang digunakan bersumber dari OpenStreetMap, platform peta global yang dikelola oleh komunitas. Untuk data spesifik seperti zona nilai tanah dan objek pajak, data dimasukkan oleh petugas BAPENDA sendiri. Akurasi data sangat bergantung pada kualitas data yang dimasukkan.

---

### Q26: Apakah chatbot bisa menjawab semua pertanyaan?

**Jawaban:**
Chatbot dapat menjawab pertanyaan-pertanyaan umum tentang layanan perpajakan, panduan penggunaan sistem, dan informasi dasar. Untuk pertanyaan yang sangat spesifik atau memerlukan penanganan khusus, chatbot dapat mengarahkan pengguna untuk menghubungi petugas BAPENDA atau mengajukan pengaduan.

---

### Q27: Apakah sistem ini mendukung cetak laporan dalam format PDF?

**Jawaban:**
Ya. Sistem mendukung pembuatan dokumen dalam format PDF, termasuk SPPT digital, bukti pembayaran, dan laporan-laporan lainnya. Pengguna dapat mengunduh dan mencetak dokumen-dokumen tersebut dengan mudah.

---

## Pertanyaan Strategis

### Q28: Bagaimana sistem ini membantu meningkatkan penerimaan pajak?

**Jawaban:**
Sistem ini membantu meningkatkan penerimaan pajak melalui beberapa cara: (1) Memudahkan wajib pajak membayar sehingga tingkat kepatuhan meningkat, (2) Data objek pajak yang akurat membantu identifikasi potensi pajak yang belum tergali, (3) Monitoring real-time memungkinkan tindakan cepat jika ada target yang tidak tercapai, (4) GIS membantu analisis potensi pajak berbasis wilayah, (5) Notifikasi tagihan mengingatkan wajib pajak untuk membayar tepat waktu.

---

### Q29: Bagaimana dengan wajib pajak yang tidak memiliki akses internet atau HP?

**Jawaban:**
Kami menyadari bahwa tidak semua masyarakat memiliki akses internet. Oleh karena itu, sistem ini dirancang untuk melengkapi — bukan menggantikan — layanan manual yang sudah ada. Layanan tatap muka di kantor BAPENDA tetap tersedia. Portal digital ini adalah kanal tambahan untuk memberikan alternatif yang lebih mudah bagi wajib pajak yang memiliki akses internet.

---

### Q30: Apakah sistem ini mendukung multi-bahasa?

**Jawaban:**
Saat ini sistem menggunakan Bahasa Indonesia. Dukungan multi-bahasa (misalnya Inggris) dapat ditambahkan di pengembangan selanjutnya jika diperlukan.

---

### Q31: Apakah ada jaminan bahwa sistem ini akan berfungsi dengan baik?

**Jawaban:**
Kami melakukan pengujian sistem secara menyeluruh sebelum implementasi, termasuk unit testing, integration testing, dan user acceptance testing (UAT) bersama dengan pengguna. Kami juga memberikan masa garansi dan dukungan teknis setelah implementasi untuk memastikan sistem berfungsi dengan baik.

---

### Q32: Bagaimana proses migrasi data dari sistem lama?

**Jawaban:**
Migrasi data dilakukan secara bertahap dan hati-hati. Data dari sistem lama (Excel, database, dokumen fisik) akan diekstrak, dibersihkan, dikonversi ke format yang sesuai, lalu diimpor ke sistem baru. Proses ini akan melibatkan tim IT BAPENDA untuk memastikan akurasi data. Kami akan melakukan uji coba migrasi pada sampel data terlebih dahulu sebelum migrasi penuh.

---

### Q33: Apakah ada pelatihan untuk pengguna sistem?

**Jawaban:**
Ya. Kami akan menyediakan pelatihan untuk setiap role pengguna: admin, petugas, dan sosialisasi untuk wajib pajak. Pelatihan mencakup cara menggunakan sistem, alur kerja, dan troubleshooting dasar. Kami juga akan menyediakan dokumentasi pengguna dan video tutorial.

---

### Q34: Siapa yang memiliki source code sistem ini?

**Jawaban:**
Source code sistem ini sepenuhnya milik BAPENDA Kota Medan. Tidak ada ketergantungan pada vendor tertentu. Ini memastikan bahwa BAPENDA memiliki kendali penuh atas pengembangan dan pengelolaan sistem di masa depan.

---

### Q35: Apakah sistem ini bisa diakses oleh dinas atau instansi lain?

**Jawaban:**
Ya. Sistem ini dapat dikonfigurasi untuk memberikan akses terbatas kepada instansi lain yang membutuhkan data perpajakan, misalnya untuk kepentingan koordinasi atau pelaporan. Pengaturan akses tetap berada di bawah kendali admin BAPENDA.

---

# 15. PRESENTATION SCRIPT

---

Berikut adalah naskah presentasi lengkap yang dapat dibaca langsung. Durasi: 20–30 menit.

---

## 15.1 Pembukaan (2 menit)

---

**Assalamu'alaikum warahmatullahi wabarakatuh,**
**Selamat pagi dan salam sejahtera bagi kita semua.**

Yang terhormat,
- Bapak/Ibu pimpinan Badan Pendapatan Daerah Kota Medan
- Bapak/Ibu dosen pembimbing dan penguji
- Serta Bapak/Ibu hadirin sekalian yang kami hormati

Pertama-tama, marilah kita panjatkan puji dan syukur ke hadirat Tuhan Yang Maha Esa atas segala rahmat dan karunia-Nya sehingga kita dapat berkumpul di sini dalam keadaan sehat walafiat.

Perkenalkan, saya [Nama], dari [Program Studi/Jurusan], [Nama Universitas/Kampus].

Pada kesempatan ini, saya akan mempresentasikan sebuah sistem yang saya kembangkan dengan judul:

**"BAPENDA.HUB – Portal Digital Pelayanan Pajak Daerah Kota Medan"**

Saya berharap presentasi ini dapat memberikan gambaran yang jelas tentang sistem yang kami bangun, serta bagaimana sistem ini dapat membantu BAPENDA Kota Medan dalam meningkatkan kualitas pelayanan pajak daerah kepada masyarakat.

---

## 15.2 Latar Belakang (2 menit)

---

Bapak/Ibu sekalian,

Kota Medan sebagai ibu kota Provinsi Sumatera Utara memiliki jumlah wajib pajak yang sangat besar dan terus bertambah setiap tahunnya. Pengelolaan pajak daerah — khususnya Pajak Bumi dan Bangunan serta BPHTB — masih menghadapi berbagai tantangan.

Berdasarkan analisis yang kami lakukan, terdapat beberapa permasalahan utama:

**Pertama**, proses pelayanan pajak masih banyak dilakukan secara manual. Wajib pajak harus datang langsung ke kantor untuk mengecek tagihan, membayar, mengajukan pengaduan, atau mengurus dokumen perpajakan.

**Kedua**, data objek pajak, wajib pajak, dan pembayaran tidak tersimpan dalam satu sistem terpusat. Data tersebar di berbagai dokumen fisik dan spreadsheet, sehingga sulit dilacak dan direkonsiliasi.

**Ketiga**, akses informasi terbatas. Wajib pajak kesulitan mendapatkan informasi tagihan, status pembayaran, dan nilai pajak secara cepat dan mandiri.

**Keempat**, monitoring dan pelaporan masih lambat. Pimpinan kesulitan mendapatkan data real-time tentang realisasi penerimaan pajak, sehingga pengambilan keputusan menjadi tidak optimal.

**Kelima**, potensi penerimaan pajak belum maksimal karena kurangnya alat bantu analisis berbasis data spasial.

Dari permasalahan-permasalahan inilah kami mengembangkan **BAPENDA.HUB** — sebuah portal digital yang mengintegrasikan seluruh layanan perpajakan daerah dalam satu platform yang mudah diakses, aman, dan real-time.

---

## 15.3 Tujuan dan Manfaat (2 menit)

---

Bapak/Ibu sekalian,

Tujuan utama dari pengembangan sistem ini adalah:

1. Menyediakan portal layanan pajak terpadu yang dapat diakses kapan saja dan dari mana saja.
2. Mendigitalkan proses pendataan, penilaian, pembayaran, dan pelaporan pajak.
3. Meningkatkan transparansi dan akuntabilitas layanan perpajakan.
4. Mendukung pengambilan keputusan berbasis data yang akurat dan real-time.

Adapun manfaat dari sistem ini sangat luas. Bagi **Pemerintah Kota dan BAPENDA**, sistem ini menyediakan data yang tersimpan aman dan terpusat, monitoring real-time, laporan instan, serta alat analisis spasial untuk menggali potensi pajak.

Bagi **Wajib Pajak**, sistem ini memberikan kemudahan dalam mengecek tagihan, membayar pajak secara online, mengunduh SPPT digital, mengajukan pengaduan, dan mengakses informasi perpajakan — semuanya dari rumah, tanpa harus antre di kantor.

---

## 15.4 Gambaran Sistem (2 menit)

---

Sekarang, saya akan menjelaskan secara singkat bagaimana sistem ini bekerja.

Secara sederhana, alur penggunaan sistem dimulai ketika pengguna membuka portal BAPENDA.HUB. Dari halaman utama, masyarakat dapat langsung mengecek tagihan PBB hanya dengan memasukkan Nomor Objek Pajak — tanpa perlu login.

Jika ingin mengakses layanan lengkap, pengguna cukup mendaftar dan login. Setelah login, sistem akan menampilkan dashboard yang disesuaikan dengan peran pengguna. Wajib pajak akan melihat tagihan, riwayat, dan SPPT mereka. Admin akan melihat ringkasan data dan statistik penerimaan. Petugas akan melihat data objek pajak yang perlu didata atau dinilai.

Dari dashboard, pengguna dapat mengakses berbagai fitur, mengolah data, dan setiap perubahan akan langsung tersimpan di database dan diperbarui secara real-time di dashboard dan laporan.

Sistem ini mendukung **lima peran pengguna**:
1. **Super Admin** — pemilik sistem dengan akses penuh
2. **Admin** — operator yang mengelola operasional harian
3. **Petugas** — staf lapangan yang melakukan pendataan dan penilaian
4. **Wajib Pajak** — masyarakat pemilik objek pajak
5. **Mahasiswa** — akademisi yang mengajukan riset

Setiap peran memiliki hak akses dan menu yang berbeda sesuai dengan kebutuhannya.

---

## 15.5 Fitur-Fitur Unggulan (5 menit)

---

Bapak/Ibu sekalian,

BAPENDA.HUB dilengkapi dengan berbagai fitur yang dirancang untuk memenuhi kebutuhan seluruh pemangku kepentingan. Saya akan menjelaskan beberapa fitur unggulannya.

**Pertama: Dashboard dan Statistik**
Setelah login, setiap pengguna melihat dashboard yang informatif. Wajib pajak melihat ringkasan tagihan dan notifikasi. Admin melihat grafik realisasi penerimaan, jumlah pengguna, dan pengaduan terbaru. Semua data ini diperbarui secara real-time.

**Kedua: Manajemen Objek Pajak**
Petugas dan admin dapat menambah, mengubah, dan mencari data objek pajak dengan mudah. Setiap objek pajak tercatat lengkap dengan NOP, alamat, luas tanah dan bangunan, NJOP, status, dan koordinat lokasi. Pendataan dan penilaian dapat dilakukan secara digital.

**Ketiga: SPPT Digital**
Ini adalah fitur yang sangat bermanfaat. Wajib pajak dapat melihat, mengunduh, dan mencetak Surat Pemberitahuan Pajak Terutang dalam format PDF kapan saja. Tidak perlu lagi menunggu SPPT fisik dikirimkan, yang menghemat waktu, biaya cetak, dan biaya distribusi.

**Keempat: Pembayaran Pajak Online**
Wajib pajak dapat membayar pajak melalui berbagai metode pembayaran: transfer bank, kartu kredit, QRIS, e-wallet seperti GoPay dan OVO, hingga melalui Indomaret dan Alfamart. Pembayaran diproses secara aman melalui Midtrans — payment gateway terkemuka yang sudah bersertifikat keamanan internasional. Status pembayaran berubah secara real-time, dan bukti bayar dapat diunduh.

**Kelima: GIS dan Pemetaan**
Ini adalah fitur yang membedakan sistem kami dari yang lain. Data pajak divisualisasikan dalam peta interaktif. Kita bisa melihat sebaran objek pajak di seluruh Kota Medan, zona nilai tanah dengan kode warna, dan data pasar properti. Fitur ini membantu petugas dalam penilaian dan membantu pimpinan dalam analisis potensi pajak berbasis wilayah.

**Keenam: Pengaduan dan Pengajuan Online**
Masyarakat dapat mengajukan pengaduan, permohonan informasi publik melalui PPID, atau mengajukan keberatan atas nilai pajak — semuanya secara online. Status pengajuan dapat dipantau secara real-time. Ini meningkatkan transparansi dan kecepatan pelayanan.

**Ketujuh: Chatbot AI**
Kami juga menyediakan asisten virtual berbasis kecerdasan buatan yang siap membantu pengguna 24 jam sehari. Chatbot dapat menjawab pertanyaan umum, memberikan panduan pembayaran, membantu navigasi menu, dan memberikan informasi seputar pajak daerah.

**Kedelapan: CMS dan Notifikasi**
Admin dapat mengelola berita dan pengumuman, serta mengirim notifikasi kepada pengguna. Informasi penting seperti jatuh tempo pembayaran atau perubahan peraturan dapat disampaikan secara cepat dan tepat sasaran.

---

## 15.8 Teknologi yang Digunakan (1 menit)

---

Bapak/Ibu sekalian,

Sistem ini dibangun menggunakan teknologi-teknologi modern yang sudah teruji dan banyak digunakan secara global.

Untuk framework utama, kami menggunakan **Next.js** yang membuat website cepat, mendukung SEO, dan responsif di berbagai perangkat. Database menggunakan **PostgreSQL** — sistem database yang andal dan mampu menangani data dalam skala besar.

Untuk keamanan, kami menggunakan **NextAuth** untuk autentikasi pengguna. Setiap password dienkripsi dan setiap pengguna memiliki hak akses sesuai perannya. Untuk pembayaran, kami menggunakan **Midtrans** yang sudah bersertifikat PCI DSS, standar keamanan tertinggi di industri pembayaran.

Untuk peta interaktif, kami menggunakan **Leaflet** — library peta yang ringan namun powerful. Untuk upload dokumen, kami menggunakan **UploadThing** yang memudahkan pengguna mengunggah file.

Yang penting untuk ditekankan, seluruh teknologi yang digunakan adalah **teknologi open-source**, sehingga tidak ada biaya lisensi yang mahal. Source code sistem ini sepenuhnya milik BAPENDA Kota Medan.

---

## 15.9 Demo Sistem (10 menit)

---

Sekarang, saya akan mendemonstrasikan langsung sistem BAPENDA.HUB.

*(Lakukan demo sesuai urutan pada bagian 13)*

**Poin-poin yang harus disampaikan saat demo:**

1. **Halaman Utama** — "Ini adalah portal utama. Dari sini masyarakat bisa lihat informasi, berita, dan cek tagihan dengan NOP tanpa login."

2. **Login** — "Kita login sebagai wajib pajak."

3. **Dashboard Wajib Pajak** — "Ini dashboard pribadi. Ada ringkasan tagihan, riwayat, dan notifikasi."

4. **Tagihan & Bayar** — "Kita pilih tagihan, pilih metode bayar, dan bayar. Semua metode pembayaran tersedia."

5. **SPPT Digital** — "SPPT bisa dilihat dan diunduh dalam PDF."

6. **Objek Pajak** — "Data objek pajak lengkap dengan lokasi di peta."

7. **Pengaduan** — "Pengaduan bisa diajukan online dan statusnya bisa dipantau."

8. **Login Admin** — "Sekarang kita lihat tampilan admin."

9. **Dashboard Admin** — "Grafik real-time, statistik, dan data penting lainnya."

10. **Manajemen Objek Pajak** — "Admin bisa mengelola seluruh objek pajak."

11. **Geo Dashboard** — "Peta interaktif dengan sebaran objek pajak, ZNT, dan pasar properti."

12. **Chatbot** — "Kita coba tanya chatbot."

---

## 15.10 Penutup (2 menit)

---

Bapak/Ibu sekalian,

Demikian presentasi yang dapat saya sampaikan mengenai **BAPENDA.HUB – Portal Digital Pelayanan Pajak Daerah Kota Medan**.

Kami percaya bahwa sistem ini dapat menjadi solusi yang tepat untuk menjawab tantangan pengelolaan pajak daerah di Kota Medan. Dengan sistem ini, pelayanan pajak menjadi lebih cepat, lebih mudah, lebih transparan, dan lebih efisien.

Kami juga menyadari bahwa tidak ada sistem yang sempurna. Oleh karena itu, kami sangat terbuka terhadap saran, masukan, dan kritik yang membangun dari Bapak/Ibu sekalian.

Akhir kata, saya mengucapkan terima kasih atas perhatian dan waktu yang telah diberikan.

**Wassalamu'alaikum warahmatullahi wabarakatuh.**

---

# 16. PENUTUP PRESENTASI

---

## 16.1 Kalimat Penutup Formal

---

**Assalamu'alaikum warahmatullahi wabarakatuh,**

Bapak/Ibu sekalian yang kami hormati,

Demikian presentasi mengenai **BAPENDA.HUB – Portal Digital Pelayanan Pajak Daerah Kota Medan** yang dapat kami sampaikan.

Kami berharap melalui presentasi ini, Bapak/Ibu dapat memahami gambaran menyeluruh tentang sistem yang kami bangun — mulai dari latar belakang, tujuan, fitur-fitur unggulan, hingga manfaat yang dapat diperoleh oleh seluruh pemangku kepentingan.

BAPENDA.HUB hadir sebagai solusi digital yang terintegrasi untuk menjawab tantangan pengelolaan pajak daerah di Kota Medan. Dengan sistem ini, kami yakin pelayanan pajak dapat berjalan lebih cepat, lebih transparan, lebih efisien, dan lebih akurat.

Kami menyadari bahwa pengembangan sistem ini masih dapat terus ditingkatkan. Oleh karena itu, kami sangat terbuka terhadap segala saran, masukan, dan kritik yang membangun dari Bapak/Ibu sekalian. Masukan dari Bapak/Ibu akan menjadi bahan berharga bagi kami untuk terus menyempurnakan sistem ini ke depannya.

Beberapa potensi pengembangan sistem ini ke depan antara lain:
1. Integrasi dengan sistem keuangan daerah dan sistem pemerintahan lainnya
2. Pengembangan aplikasi mobile untuk kemudahan akses yang lebih luas
3. Penggunaan artificial intelligence yang lebih canggih untuk analisis data
4. Pengembangan dashboard eksekutif untuk pimpinan daerah
5. Integrasi dengan layanan perpajakan provinsi dan pusat

Kami berharap sistem ini dapat memberikan kontribusi nyata bagi peningkatan pelayanan pajak daerah dan pada akhirnya mendukung pembangunan Kota Medan yang lebih baik.

Terima kasih atas perhatian dan waktu yang Bapak/Ibu berikan. Kami siap menerima pertanyaan dan masukan dari Bapak/Ibu sekalian.

**Wassalamu'alaikum warahmatullahi wabarakatuh.**

---

## 16.2 Kalimat Penutup Singkat (Alternatif)

---

Bapak/Ibu sekalian,

Sebagai penutup, izinkan saya merangkum pesan utama dari presentasi ini.

**BAPENDA.HUB** adalah portal digital yang mengintegrasikan seluruh layanan perpajakan daerah Kota Medan dalam satu platform. Sistem ini menjawab kebutuhan akan layanan yang cepat, transparan, dan real-time.

Kami telah membangun fitur-fitur inti yang siap digunakan: manajemen objek pajak, pembayaran online, SPPT digital, GIS dan pemetaan, pengaduan online, serta chatbot AI.

Kami percaya sistem ini dapat membantu BAPENDA Kota Medan dalam:
- Meningkatkan kualitas pelayanan kepada masyarakat
- Meningkatkan efisiensi operasional
- Meningkatkan transparansi dan akuntabilitas
- Meningkatkan penerimaan pajak daerah

Kami sangat terbuka terhadap masukan dan saran dari Bapak/Ibu. Mari kita bersama-sama mewujudkan pelayanan pajak yang lebih baik untuk Kota Medan.

Terima kasih.

---

# 17. HASIL AKHIR

---

## Dokumen Presentasi Profesional

Dokumen ini disusun sebagai materi presentasi yang siap digunakan untuk:

### 1. Presentasi Client (BAPENDA Kota Medan)
- Menjelaskan sistem kepada pimpinan dan stakeholder BAPENDA
- Fokus pada manfaat bisnis dan solusi yang diberikan
- Bahasa yang mudah dipahami oleh non-IT

### 2. Sidang Tugas Akhir
- Struktur sistematis dan lengkap
- Mencakup analisis kebutuhan, solusi, implementasi, dan manfaat
- Siap digunakan sebagai bahan presentasi sidang

### 3. Demo Produk
- Urutan demo yang jelas dan terstruktur
- Panduan poin-poin yang harus disampaikan di setiap halaman
- Tips dan persiapan demo

### 4. Meeting dengan Instansi Pemerintah
- Penjelasan profesional dan formal
- Fokus pada transparansi, akuntabilitas, dan efisiensi
- Siap menjawab pertanyaan-pertanyaan kritis

---

## Ringkasan Eksekutif

| Aspek | Detail |
|-------|--------|
| **Nama Sistem** | BAPENDA.HUB – Portal Digital Pelayanan Pajak Daerah Kota Medan |
| **Tujuan** | Mendigitalkan dan mengintegrasikan seluruh layanan perpajakan daerah |
| **Target Pengguna** | BAPENDA Kota Medan, Wajib Pajak, Masyarakat, Mahasiswa |
| **Fitur Utama** | Dashboard, Manajemen Objek Pajak, SPPT Digital, Pembayaran Online, GIS, Pengaduan, Chatbot AI, CMS, Notifikasi, Laporan |
| **Teknologi** | Next.js, React, TypeScript, PostgreSQL, Prisma, Midtrans, NextAuth, Leaflet |
| **Database** | 16 tabel: User, TaxObject, Payment, SPPT, Complaint, PPID, Research, Notification, News, Announcement, GIS, Audit, Chatbot, dll |
| **Keunggulan** | Real-time, terintegrasi, aman, multi-platform, skalabel, open-source |
| **Status** | Siap implementasi dengan fitur inti lengkap |

---

*Dokumen ini disusun sebagai materi presentasi profesional untuk mendukung pengenalan dan implementasi BAPENDA.HUB di lingkungan Badan Pendapatan Daerah Kota Medan.*

*Versi 1.0 — Juni 2026*
