# Roadmap Refactor

Tahap 1 sudah aman: CSS dan JS dipisah dari `index.html`.

Tahap 2 yang disarankan:

1. Pindahkan `PRODUCTS` ke `src/js/data/products.js`.
2. Pindahkan `ARTICLES` ke `src/js/data/articles.js`.
3. Pecah renderer per halaman ke `src/js/views/`.
4. Pecah cart/localStorage ke `src/js/services/cart.js`.
5. Ganti checkout prototype menjadi WhatsApp checkout atau payment gateway.
6. Hubungkan produk ke CMS/Airtable/Google Sheet jika katalog sering berubah.
