# DOPS Website

Struktur ini dibuat dari referensi `index.html` single-file dan dipisahkan agar mudah dikembangkan, dites, dan deploy otomatis.

## Jalankan di localhost

```bash
npm install
npm run dev
```

Buka: `http://localhost:3000`

## Build untuk deploy

```bash
npm run build
```

Hasil build ada di folder `dist/`.

## Test otomatis dengan Playwright

```bash
npx playwright install chromium
npm test
```

## Struktur utama

- `index.html` = struktur halaman utama, navbar, section SPA, footer.
- `src/styles/main.css` = custom CSS dari file referensi.
- `src/js/app.js` = logic SPA, product data, cart, checkout, auth dummy, blog.
- `public/assets/` = gambar/logo yang akan di-serve sebagai `/assets/...`.
- `tests/` = Playwright test.
- `.github/workflows/` = CI build/test sebelum auto deploy.
- `docs/reference/` = backup file original.

## Catatan asset

Referensi memakai `assets/cardiff_kadipaten.png`. Letakkan file tersebut di `public/assets/cardiff_kadipaten.png`, lalu ubah path di JS/HTML menjadi `/assets/cardiff_kadipaten.png` jika ingin full compatible dengan Vite.
