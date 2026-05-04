# Employee Self Service (ESS) - Next.js

Aplikasi dashboard mandiri untuk karyawan (ESS), dibangun menggunakan [Next.js](https://nextjs.org/) dan Bootstrap.

## 📋 Prasyarat

Sebelum memulai, pastikan Anda telah menginstal software berikut di komputer Anda:

1.  **Node.js** (Versi 18 atau lebih baru direkomendasikan) - [Download Node.js](https://nodejs.org/)
2.  **Git** - [Download Git](https://git-scm.com/)

---

## 🚀 Cara Menjalankan Project

Ikuti langkah-langkah di bawah ini untuk mengunduh dan menjalankan aplikasi di komputer lokal Anda.

### 1. Clone Repository

Buka terminal (Command Prompt, PowerShell, atau Git Bash) dan jalankan perintah berikut untuk mendownload project ini:

```bash
git clone https://github.com/hblhdrm29/Website-Latihan.git
```

### 2. Masuk ke Folder Project

Setelah proses clone selesai, masuk ke direktori project folder `ess-nextjs` (karena project Next.js ada di dalam folder ini):

```bash
cd Website-Latihan/ess-nextjs
```

### 3. Install Dependencies

Install semua library yang dibutuhkan menggunakan `npm`:

```bash
npm install
```

### 4. Jalankan Development Server

Untuk menjalankan aplikasi dalam mode development:

```bash
npm run dev
```

Buka browser Anda dan akses alamat berikut:
[http://localhost:3000](http://localhost:3000)

---

## 🛠️ Perintah Lainnya

### Build untuk Production
Untuk membuat build aplikasi yang siap depploy:

```bash
npm run build
```

### Struktur Project

- `app/` - Halaman dan layout utama Next.js (App Router).
- `components/` - Komponen UI yang dapat digunakan kembali (Header, Sidebar, ProfileView, dll).
- `public/` - Aset statis seperti gambar dan ikon.

---

## ✨ Fitur Utama
- **Dashboard Karyawan**: Ringkasan data cuti, lembur, dan agenda.
- **Profil Karyawan**: Tampilan profil modern dengan data pribadi dan kepegawaian.
- **Responsive**: Tampilan yang menyesuaikan dengan layar desktop dan mobile.

---

Dibuat dengan ❤️ menggunakan Next.js.
