# Volunteer Event Page

live demo page : https://volunteer-event.vercel.app/

## 💻 Tech Stack

- **React.js** (Vite)
- **React Router DOM**
- **Tailwind CSS**
- **Lucide React**
- **Chat GPT** : API Data
- **State Management**: (`useState`, `useEffect`)

## 📂 Struktur Folder

```bash
src/
├── assets/
├── components/     # Komponen reusable (Card, Navbar)
├── pages/          # (Event Page, Detail Event Page)
├── services/       # API handler & Type Definition
├── App.jsx         # Konfigurasi routing
├── main.jsx
└── index.css
```

## ⚙️ Langkah Instalasi

1. Clone repository:

```bash
git clone https://github.com/username/volunteer-event.git
```

2. Masuk ke folder project:

```bash
cd volunteer-event
```

3. Install dependencies:

```bash
npm install
```

4. Jalankan project:

```bash
npm run dev
```

5. Buka di browser:

```bash
http://localhost:5173
```

## 🧠 Pertanyaan

1. Bagian tersulit apa dari sisi frontend?

```txt
Bagian tersulit adalah mengimplementasikan fetching API sekaligus mengatur UX logic seperti loading, error, empty, dan feedback state agar tetap konsisten di setiap halaman. Terutama saat menangani asynchronous API request,
```

2. Jika diberi waktu 1 minggu, apa yang akan kamu tingkatkan?

```txt
Dengan waktu kurang lebih 1 minggu, saya akan memprioritaskan fitur opsional sesuai arahan, seperti menambahkan authentication flow (login & token), protected route, serta meningkatkan konsistensi UI melalui penerapan reusable UI components. Selain itu, saya akan memperbaiki struktur state dan error handling agar aplikasi lebih stabil dan mudah dikembangkan.
```

3. Asumsi UX apa yang kamu ambil?

```txt
Saya mengasumsikan user menginginkan interaksi yang cepat dan jelas, sehingga setiap proses penting seperti fetch data dan join event selalu disertai feedback visual agar user memahami status aplikasi.
```
