# UI/UX AUDIT INVENTORY
## BAPENDA-MEDAN (SIPADA Medan)

### Project Overview
- **Framework:** Next.js 16 with Turbopack
- **Backend:** Prisma ORM + PostgreSQL
- **Auth:** Next-auth with bcrypt
- **Roles:** ADMIN (6), OFFICER (3), DEVELOPER (1), MAHASISWA (5), USER (100)
- **Total Users:** 115

---

## I. INVENTARISASI HALAMAN DAN ROUTE

### 1. Public Pages (Tidak Butuh Login)

| # | Halaman | Route | Deskripsi | Role |
|---|---------|-------|-----------|------|
| 1 | Home / Landing | / | Halaman utama dengan kalkulator, info berita, layanan | PUBLIC |
| 2 | Informasi | /informasi | Halaman berita dan pengumuman | PUBLIC |
| 3 | Layanan | /layanan | Katalog layanan pajak | PUBLIC |
| 4 | Panduan | /panduan | Ketentuan layanan dan kebijakan | PUBLIC |
| 5 | Cek Pajak (NOP) | / | Quick tax check di halaman utama | PUBLIC |
| 6 | Error Page | /error | Halaman error umum | PUBLIC |
| 7 | Not Found | /not-found | Halaman 404 | PUBLIC |

### 2. Authentication Pages

| # | Halaman | Route | Deskripsi | Role |
|---|---------|-------|-----------|------|
| 8 | Login | /login | Halaman login dengan kredensial | PUBLIC → DISARAKAN |
| 9 | Register | /register (via chatbot) | Registrasi akun baru | PUBLIC |
| 10 | Lupa Password | /lupa-kata-sandi | Permintaan reset kata sandi | PUBLIC |

### 3. Dashboard Pages (Butuh Login)

| # | Halaman | Route | Role | Deskripsi |
|---|---------|-------|------|-----------|
| 11 | Dashboard Umum | /dashboard | Semua role terautentikasi |
| 12 | Admin Dashboard | /dashboard (ADMIN/OFFICER/DEVELOPER) | ADMIN, OFFICER, DEVELOPER | Halaman admin lengkap |
| 13 | User Dashboard | /dashboard | USER | Halaman user biasa |
| 14 | Mahasiswa Dashboard | /dashboard | MAHASISWA | Halaman mahasiswa |
| 15 | Admin Layout |/dashboard/layout.tsx | ADMIN, OFFICER, DEVELOPER | Layout sidebar kiri |

### 4. Admin Sub-pages (Hanya ADMIN/OFFICER/DEVELOPER)

| # | Halaman | Route | Role | Deskripsi |
|---|---------|-------|------|-----------|
| 16 | Admin Users | /dashboard/admin/users | ADMIN, DEVELOPER | Manajemen user |
| 17 | Admin Settings | /dashboard/admin/settings | ADMIN, DEVELOPER | Setelan sistem |
| 18 | Admin Tax Objects | /dashboard/admin/tax-objects | ADMIN, OFFICER | Manajemen objek pajak |
| 19 | Admin Stats | /dashboard/admin/stats | ADMIN, OFFICER | Statistik sistem |
| 20 | Admin Announcements | /dashboard/admin/announcements | ADMIN, DEVELOPER | Pengumuman sistem |
| 21 | Admin Payments | /dashboard/admin/payments | ADMIN, OFFICER | Manajemen pembayaran |
| 22 | Admin Audit Logs | /dashboard/admin/audit | ADMIN, DEVELOPER | Log audit sistem |
| 23 | Admin PPID | /dashboard/ppid | ADMIN, OFFICER | Permohonan informasi publik |
| 23 | Admin Research | /dashboard/research | MAHASISWA | Pengajuan riset mahasiswa |
| 24 | Admin Submissions | /dashboard/admin/submissions | ADMIN | Pengajuan perpajakan |
| 25 | Admin Complaints | /dashboard/admin/complaints | ADMIN, OFFICER | Pengaduan masyarakat |
| 26 | Admin Settings General | /dashboard/admin/settings | ADMIN, DEVELOPER | Setelan umum sistem |

### 5. User Dashboard Sub-pages

| # | Halaman | Route | Role | Deskripsi |
|---|---------|-------|------|-----------|
| 27 | User Dashboard | /dashboard/pajak | USER | Dashboard pajak user |
| 28 | Hitung Pajak | /dashboard/pajak/hitung | USER | Kalkulator pajak |
| 29 | Tagihan Saya | /dashboard/pajak/tagihan | USER | Riwayat pembayaran |
| 30 | Riwayat Pembayaran | /dashboard/pajak/riwayat | USER | Riwayat pembayaran lengkap |
| 31 | Objek Pajak | /dashboard/pajak/objek | USER | Cek objek pajak per NOP |
| 31 | SPPT Digital | /dashboard/pajak/sppt | USER | SPPT digital |
| 32 | Simulasi Pajak | /dashboard/pajak/hitung | USER | Simulasi perhitungan pajak |

### 6. Mahasiswa Sub-pages

| # | Halaman | Route | Role | Deskripsi |
|---|---------|-------|------|-----------|
| 33 | Mahasiswa Dashboard | /dashboard | MAHASISWA | Dashboard mahasiswa |
| 34 | Pengajuan Riset | /dashboard/mahasiswa/pengajuan | MAHASISWA | Pengajuan riset geospasial |

### 7. GIS/Geospasial Pages

| # | Halaman | Route | Role | Deskripsi |
|---|---------|-------|------|-----------|
| 35 | Peta Bidang | /dashboard/gis/peta-bidang | USER, ADMIN | Visualisasi bidang pajak |
| 36 | ZNT (Zona Nilai Tanah) | /dashboard/gis/znt | USER, ADMIN | Zona nilai tanah |
| 37 | Pendataan | /dashboard/gis/pendataan | USER, ADMIN | Proses pendataan |
| 38 | Penilaian | /dashboard/gis/penilaian | USER, ADMIN | Penilaian properti |
| 39 | Integrasi | /dashboard/gis/integrasi | USER, ADMIN | Integrasi data |
| 40 | Pasar Properti | /dashboard/gis/pasar-properti | USER, ADMIN | Pasar properti |
| 41 | Peta GIS | /dashboard/gis/peta-bidang | USER, ADMIN | Halaman peta GIS |

### 8. API Routes (Backend)

| # | Endpoint | Method | Deskripsi |
|---|----------|--------|-----------|
| 42 | /api/tax/check | GET | Cek tagihan berdasarkan NOP |
| 43 | /api/tax/objects | GET/POST | Daftar/create objek pajak |
| 44 | /api/tax/pay | GET/POST | Daftar/Inisialisasi pembayaran |
| 45 | /api/users | GET/POST | Daftar/Registrasi user |
| 46 | /api/users/[id] | GET/PATCH/DELETE | Manage user |
| 47 | /api/auth/register | POST | Registrasi user |
| 47 | /api/auth/forgot-password | POST | Reset password |
| 48 | /api/ppid | GET/POST | Daftar/Buat permohonan PPID |
| 49 | /api/research | GET/POST | Daftar/Buat riset mahasiswa |
| 50 | /api/complaints | GET/POST | Daftar/Buat pengaduan |
| 51 | /api/tax/submissions | GET/POST | Daftar/Buat pengajuan pajak |
| 51 | /api/cms/news | GET | Berita terbaru |

---

## II. INVENTARISASI LAYOUT

### 1. Root Layout (Tidak Butuh Login)

| File | Deskripsi |
|------|-----------|
| `app/layout.tsx` | Root layout dengan Providers, accessibility widget, chatbot, sticky nav |
| `app/globals.css` | Global CSS styling |
| `app/page.tsx` | Home page komponen utama |

### 2. Auth Layout

| File | Deskripsi |
|------|-----------|
| `app/login/page.tsx` | Halaman login |

### 3. Dashboard Layout

| File | Role | Deskripsi |
|------|------|-----------|
| `app/dashboard/layout.tsx` | ADMIN, OFFICER, DEVELOPER | Layout dengan sidebar kiri, topbar, konten utama |
| `app/dashboard/page.tsx` | Semua role | Routing berdasarkan role ke dashboard masing-masing |

### 4. Component Layouts

| File | Deskripsi |
|------|-----------|
| `components/PublicLayout.tsx` | Layout publik |
| `components/Navbar.tsx` | Navbar atas |
| `components/StickyBottomNav.tsx` | Navigasi bawah stickynya |
| `components/dashboard/DashboardNav.tsx` | Navigasi sidebar dashboard |
| `components/dashboard/AdminDashboard.tsx` | Dashboard admin |
| `components/dashboard/UserDashboard.tsx` | Dashboard user |
| `components/dashboard/OfficerDashboard.tsx` | Dashboard officer |
| `components/dashboard/MahasiswaDashboard.tsx` | Dashboard mahasiswa |

---

## III. INVENTARISASI KOMPONEN UTAMA

### 1. Komponen UI (ui/)

| Komponen | File | Deskripsi |
|----------|------|-----------|
| Button | `components/ui/Button.tsx` | Tombol varian berbeda |
| Card | `components/ui/Card.tsx` | Kotak konten |
| Skeleton | `components/ui/Skeleton.tsx` | Placeholder loading |
| Toaster | `components/ui/Toaster.tsx` | Sistem toast notifikasi |

### 2. Dashboard Components

| Komponen | File | Modul |
|----------|------|-------|
| DashboardNav | `components/dashboard/DashboardNav.tsx` | Semua dashboard |
| AdminDashboard | `components/dashboard/AdminDashboard.tsx` | Dashboard admin |
| UserDashboard | `components/dashboard/UserDashboard.tsx` | Dashboard user |
| OfficerDashboard | `components/dashboard/OfficerDashboard.tsx` | Dashboard officer |
| MahasiswaDashboard | `components/dashboard/MahasiswaDashboard.tsx` | Dashboard mahasiswa |
| QuickActionGrid | `components/dashboard/QuickActionGrid.tsx | Dashboard |
| DashboardSidebar | `components/dashboard/DashboardSidebar.tsx` | Sidebar dashboard |
| DashboardTopbar | `components/dashboard/DashboardTopbar.tsx` | Topbar dashboard |

### 3. Navigasi

| Komponen | File | Deskripsi |
|----------|------|-----------|
| Navbar | `components/Navbar.tsx` | Navbar atas di halaman publik |
| StickyBottomNav | `components/StickyBottomNav.tsx` | Navigasi bawah |
| AccessibilityWidget | `components/AccessibilityWidget.tsx` | Widget aksesibilitas |
| ChatbotWidget | `components/ChatbotWidget.tsx` | Widget chatbot |
| PublicLayout | `components/PublicLayout.tsx` | Layout publik |
| NavigationDropdown | `components/NotificationDropdown.tsx` | Dropdown notifikasi |

### 4. Formulir dan Input

| Komponen | File | Modul |
|----------|------|-------|
| FileUpload | `components/FileUpload.tsx` | Unggah file |
| Navbar | `components/Navbar.tsx` | Navigasi atas |
| Input varian | Beberapa halaman | Formulir berbagai modul |

### 5. Tabel dan Data

| Komponen | File | Modul |
|----------|------|-------|
| DigitalSppt | `components/sppt/DigitalSppt.tsx` | SPPT digital |
| ReceiptButton | `components/payment/ReceiptButton.tsx` | Bukti pembayaran |
| DigitalReceipt | `components/payment/DigitalReceipt.tsx` | Kuitansi digital |

### 6. GIS/Geospasial Components

| Komponen | File | Modul |
|----------|------|-------|
| MapVisualization | `components/landing/MapVisualization.tsx` | Visualisasi peta |
| GISPreview | `components/landing/GISPreview.tsx` | Pratinjau GIS |

### 7. UI Library Components

| Komponen | File | Deskripsi |
|----------|------|-----------|
| lucide-react icons | Multiple | Ikon berbagai jenis |
| Tailwind CSS classes | Throughout | Styling konsisten |

---

## IV. INVENTARISASI FORMULIR

### 1. Formulir Registrasi

| File | Field | Validasi |
|------|-------|----------|
| `app/register/page.tsx` (via chatbot) | name, email, password, nik, phone, role | Zod schema validation |

### 2. Formulir PPID

| File | Field | Validasi |
|------|-------|----------|
| `app/dashboard/ppid/page.tsx` | title, description, informationType, urgency | Zod schema + checkbox tanggapan |

### 3. Formulir Riset Mahasiswa

| File | Field | Validasi |
|------|-------|----------|
| `app/dashboard/mahasiswa/pengajuan/page.tsx` | title, description, institution, supervisor | Zod schema |

### 3. Formulir Pengaduan

| File | Field | Validasi |
|------|-------|----------|
| Various | subject, description, category, priority | Zod schema |

### 4. Formulir Tax Submission

| File | Field | Validasi |
|------|-------|----------|
| Various | ticketNumber, title, description, type | Zod schema |

### 5. Formulir Admin Settings

| File | Field | Validasi |
|------|-------|----------|
| `app/dashboard/admin/settings/page.tsx` | appName, budgetYear, auditInterval, autoBackup, dan banyak pilihan toggle | |

---

## V. INVENTARISASI MENAMPILKAN DATA

### 1. Tabel dan Daftar Data

| Komponen | File | Data yang Ditampilkan |
|----------|------|----------------------|
| Admin Users Tabel | `app/dashboard/admin/users/page.tsx` | Nama, email, NIK, role, status bayar, status, aksi |
| Riwayat Pembayaran | `app/dashboard/pajak/riwayat/page.tsx` | Invoice, objek pajak, nominal, status, aksi |
| Daftar Tax Objects | `app/dashboard/admin/tax-objects/page.tsx` | NOP, nama, tipe, status, aksi |
| Daftar PPID | `app/dashboard/ppid/page.tsx` | Ticket number, title, status, aksi |
| Daftar Research | `app/dashboard/research/page.tsx` | Nomor permohonan, title, status, aksi |
| Daftar Complaints | `app/dashboard/admin/complaints page` | Subject, status, category, aksi |
| Daftar Tax Submissions | `app/dashboard/admin/submissions/page.tsx` | Ticket number, title, type, status, aksi |

### 2. Kartu Statistik

| Komponen | File | Menampilkan |
|----------|------|-----------|
| Statistik berbagai | Berbagai file | Total users, payments, objects, dll |

### 3. Grafik dan Visualisasi

| Komponen | File | Deskripsi |
|----------|------|-----------|
| PremiumChart | `components/ui/PremiumChart.tsx` | Grafik statistik |
| MapVisualization | `components/landing/MapVisualization.tsx` | Visualisasi peta |

### 4. Empty State

| Kondisi | File | Pesan |
|---------|------|-------|
| Data kosong | Berbagai halaman | Pesan "Belum ada data" |
| Tidak ada hasil | Beberapa halaman | Pesan sesuai konteks |

### 4. Loading State

| Kondisi | File | Indikator |
|---------|------|-----------|
| Sedang memuat | Berbagai halaman | Skeleton loader, spiner |
| AJAX loading | Beberapa endpoint | Spinner saat fetch |

### 5. Error State

| Kondisi | File | Pesan |
|---------|------|-------|
| Error umum | `app/error.tsx` | Halaman error |
| Not Found | `app/not-found.tsx` | Halaman 404 |
| API Error | Beberapa endpoint | Pesan error dari API |
| Validasi Form | Beberapa form | Pesan error di near field |

---

## VI. INVENTARISASI NAVIGASI DAN MENU

### 1. Navbar Publik

| Elemen | File | Deskripsi |
|--------|------|-----------|
| Logo | `app/page.tsx` | Logo BAPENDA MEDAN |
| Menu Layanan | `app/page.tsx` | Layanan, Pajak Daerah, Berita, Panduan |
| Search Form | `app/page.tsx | Kotak pencarian NOP |
| Tombol Masuk/Dashboard | `app/page.tsx` | Tombol login/ke dashboard |
| Tema Warna | Konsistennya | Primary warna digunakan |

### 2. Sidebar Dashboard

| Elemen | File | Deskripsi |
|--------|------|-----------|
| Menu sidebar | `components/dashboard/DashboardNav.tsx` | Menu navigasi kiri |
| Menu admin | Hanya ADMIN/OFFICER | Fitur admin |
| Menu officer | Hanya OFFICER | Fitur officer |
| Menu user | Hanya USER | Fitur user |
| Menu mahasiswa | Hanya MAHASISWA | Fitur mahasiswa |

### 3. Footer

| Elemen | File | Deskripsi |
|--------|------|-----------|
| Footer | `app/page.tsx` | Footer bawah dengan link |
| Copyright | Tahun 2026 | Tahun fiskal |

### 4. Breadcrumb

| Elemen | File | Deskripsi |
|--------|------|-----------|
| Breadcrumb | Banyak halaman | Hierarki halaman |

---

## VI. ROLE-BASED ACCESS INVENTORY

| Role | Hak Akses | Halaman Dapat Diakses |
|------|-----------|----------------------|
| ADMIN | Lengkap | Semua halaman admin + dashboard |
| OFFICER | Partial | Dashboard officer + fitur PPID, complaints, submissions |
| DEVELOPER | Lengkap | Semua fitur + akses penuh |
| MAHASISWA | Limited | Dashboard mahasiswa + pengajuan riset |
| USER | Basic | Dashboard user + fitur pajak, pembayaran |

---

## VI. SISTEM WARNA DAN TIPOGRAFI

### 1. Warna Primer

- Primary: Warna biru tua (#1E40AF atau varian)
- Secondary: Warna emerald atau varian lainnya
- Background: Warna putih atau grayscale
- Surface: Warna zinc atau varian

### 2. Tipografi

- Font: Jost (heading) dan Geist Mono (monospace)
- Ukuran variasi: Dari text-xs hingga text-7xl
- Garis tinggi: Sesuai desain sistem Tailwind

---

## VII. MASALAH UMUM YANG DITEMUKAN

1. **NIK validation** - Empty string diterima (akan diperbaiki)
2. **User delete behavior** - Mixed soft/hard delete (akan diperbaiki)
3. **Tax object address** - Optional tapi seharusnya required (akan diperbaiki)
4. **Tidak konsisten** - Desain antarhalaman belum sejalan
5. **Responsive** - Perlu diverifikasi di multiple breakpoint
6. **Aksesibilitas** - Perlu audit kontras dan label
7. **State UI** - Loading, empty, error states perlu diverifikasi
8. **Cross-browser** - Belum diuji secara menyeluruh

---

## VII. PENYEMPATAN PRIORITAS PERBAIKAN

### Prioritas Tinggi (Bug Fixes yang Sudah Dilakukan)
1. BUG-001: NIK validation accepts empty string
2. BUG-002: Mixed soft/hard user delete behavior
3. BUG-003: Tax object address optional

### Prioritas Menengah (Desain & UX)
4. Konsistensi desain antarhalaman
5. Responsivitas pada mobile/tablet
6. Aksesibilitas dasar
7. Hierarki visual yang jelas
8. State UI (loading, empty, error, success)

### Prioritas Rendah (Perbaikan Visual)
9. Animasi dan micro-interactions
10. Design system documentation
11. Warna dan tipografi lebih konsisten
12. Komponen reusable enhancement

---

SELANJUTNYA: Saya akan melanjutkan ke Fase 2: Audit Desain dan Hierarki Visual, kemudian melanjutkan ke setiap fase selanjutnya.