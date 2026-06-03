// --- DATA ---
        const PRODUCTS = [
            {
                id: "dops-for-car",
                name: "DOPS For Car",
                category: "Car Perfume",
                price: 39000,
                variant: "Americano / Bubblegum / Vanilla Cake / Sweet Berry",
                tag: "Best Seller",
                description: "Parfum mobil gantung 10 ml dengan karakter wangi premium, clean, dan tidak bikin mual.",
                notes: ["Fresh", "Sweet", "Premium Daily Scent"],
                benefit: ["Cocok untuk mobil harian", "Desain simple premium", "Aroma tidak menusuk"],
                mockup: "mockup-bottle"
            },
            {
                id: "car-diffuser-kadipaten",
                name: "DOPS Car Diffuser Kadipaten",
                category: "Car Diffuser",
                price: 69000,
                variant: "Tea • Floral • Fresh",
                tag: "Kadipaten Series",
                description: "Car diffuser 15 ml untuk kisi AC mobil. Aroma teh keraton yang kalem, bersih, dan classy.",
                notes: ["Tea", "Floral", "Clean"],
                benefit: ["Dipakai di kisi AC", "Aroma menyebar saat AC menyala", "Vibe mobil lebih premium"],
                image: "assets/cardiff_kadipaten.png",
                mockup: "mockup-diffuser"
            },
            {
                id: "room-diffuser-kadipaten",
                name: "DOPS Room Diffuser Kadipaten",
                category: "Home Fragrance",
                price: 95000,
                variant: "50 ml Reed Diffuser",
                tag: "For Home",
                description: "Room diffuser untuk kamar, kantor, dan ruang tamu. Nuansa teh hangat dengan kesan premium.",
                notes: ["Tea", "Warm", "Elegant"],
                benefit: ["Cocok untuk ruangan", "Dekoratif", "Aroma kalem dan mewah"],
                mockup: "mockup-diffuser"
            },
            {
                id: "linen-spray",
                name: "DOPS Linen Spray",
                category: "Home Fragrance",
                price: 49000,
                variant: "Kadipaten / Lavender / Roses",
                tag: "Daily Use",
                description: "Semprot linen, sofa, bantal, dan interior agar ruangan terasa segar dalam beberapa detik.",
                notes: ["Fresh", "Soft", "Clean"],
                benefit: ["Praktis dipakai harian", "Cocok untuk kain dan ruangan", "Aroma cepat terasa"],
                mockup: "mockup-spray"
            },
            {
                id: "autocare-bundle",
                name: "DOPS AutoCare Bundle",
                category: "AutoCare",
                price: 99000,
                variant: "Super Shine Shampoo + Ultra Black Tyre Gel",
                tag: "Bundle",
                description: "Paket cuci mobil: shampoo dan tyre gel untuk finishing mobil lebih clean, hitam, dan glossy.",
                notes: ["Clean", "Glossy", "Auto Detailing"],
                benefit: ["Mobil terlihat lebih niat", "Ban lebih hitam", "Cocok untuk bundling parfum mobil"],
                mockup: "mockup-spray"
            },
            {
                id: "dops-deodorant",
                name: "DOPS Deodorant Spray",
                category: "BodyCare",
                price: 59000,
                variant: "Quick Dry Formula",
                tag: "BodyCare",
                description: "Deodorant spray cepat kering untuk daily activity, cocok buat aktivitas indoor dan outdoor.",
                notes: ["Fresh", "Dry", "Daily"],
                benefit: ["Cepat kering", "Nyaman dipakai harian", "Aroma fresh"],
                mockup: "mockup-spray"
            }
        ];

        const ARTICLES = [
            {
                id: "mood-naik",
                title: "Kenapa Mobil Wangi Bisa Bikin Mood Naik?",
                date: "May 10, 2026",
                excerpt: "Tahukah Anda bahwa aroma dalam kabin mobil memiliki dampak langsung pada psikologis pengemudi saat menghadapi kemacetan?",
                content: "<p class='mb-4'>Aroma memiliki jalur langsung ke sistem limbik otak kita, bagian yang mengatur emosi dan ingatan. Itulah sebabnya, saat Anda masuk ke mobil yang wangi, mood Anda bisa langsung berubah positif.</p><p class='mb-4'>Di jalanan kota yang macet, stres sangat mudah memuncak. Parfum mobil dengan notes fresh atau calming (seperti teh atau vanilla lembut) berfungsi sebagai aromaterapi instan. Jangan pilih parfum yang terlalu menyengat, karena justru bisa memicu pusing atau mual. Pilihlah aroma 'clean' yang membuat kabin terasa seperti lounge eksklusif.</p><p class='mb-4'>DOPS For Car dirancang khusus untuk menciptakan ekosistem aroma yang premium namun tetap subtle untuk menemani daily activity Anda.</p>"
            },
            {
                id: "kadipaten-teh",
                title: "Kadipaten: Aroma Teh yang Bikin Ruangan Terasa Mahal",
                date: "May 15, 2026",
                excerpt: "Mengulik inspirasi di balik seri Kadipaten yang membawa nuansa keraton Jawa ke dalam ruang tamu modern Anda.",
                content: "<p class='mb-4'>Teh bukan sekadar minuman; ia adalah simbol ketenangan dan keramahan. Seri Kadipaten dari DOPS terinspirasi dari ritual minum teh di sore hari di lingkungan keraton—kalem, hangat, dan berkelas.</p><p class='mb-4'>Dengan notes utama black tea, berpadu dengan sentuhan floral ringan dan musk, aroma ini tidak mendominasi ruangan secara agresif, melainkan menyatu dengan udara. Baik menggunakan Room Diffuser maupun Linen Spray, aroma Kadipaten seketika menaikkan 'kelas' dari sebuah ruangan.</p><p class='mb-4'>Tips: Semprotkan DOPS Linen Spray Kadipaten di sofa kain atau gorden Anda lima menit sebelum tamu datang untuk impresi pertama yang tak terlupakan.</p>"
            },
            {
                id: "parfum-mobil-mual",
                title: "Cara Memilih Parfum Mobil yang Tidak Bikin Mual",
                date: "May 22, 2026",
                excerpt: "Sering pusing karena parfum mobil? Anda tidak sendiri. Berikut panduan memilih aroma yang tepat untuk road trip panjang.",
                content: "<p class='mb-4'>Keluhan paling umum tentang parfum mobil adalah aromanya yang bikin mual. Hal ini biasanya terjadi karena penggunaan bibit parfum sintetis berkualitas rendah atau konsentrasi yang terlalu tajam di ruangan sempit.</p><h3 class='text-xl font-bold mb-2 mt-6'>1. Hindari Aroma Terlalu Manis (Fruity/Candy)</h3><p class='mb-4'>Aroma buah-buahan sintetis yang berlebihan di ruang tertutup ber-AC sering kali bertabrakan dengan bau plastik/kulit interior mobil, memicu rasa pusing.</p><h3 class='text-xl font-bold mb-2 mt-6'>2. Pilih Karakter 'Clean' atau 'Fresh'</h3><p class='mb-4'>Aroma seperti kopi ringan (Americano), teh, atau ozonic/aquatic jauh lebih aman. DOPS Car Diffuser sangat ideal karena aromanya didistribusikan perlahan lewat kisi AC.</p>"
            }
        ];

        // --- UTILITIES ---
        const formatRupiah = (number) => {
            return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(number);
        };

        const showToast = (message) => {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            toast.className = 'toast';
            toast.innerHTML = `<i class="ph-fill ph-check-circle text-primary text-lg"></i> <span>${message}</span>`;
            container.appendChild(toast);
            setTimeout(() => {
                toast.style.opacity = '0';
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        };

        const getMockupHTML = (type, label = 'DOPS') => {
            return `
                <div class="w-full aspect-square mockup-container rounded-t-2xl">
                    <div class="${type}">
                        <span class="mockup-label absolute bottom-4">${label}</span>
                    </div>
                </div>
            `;
        };

        const getProductVisualHTML = (product) => {
            if (product.image) {
                return `
                    <div class="w-full aspect-square bg-soft flex items-center justify-center overflow-hidden border-b border-line">
                        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-contain p-6" onerror="this.style.display='none'; this.nextElementSibling.classList.remove('hidden');">
                        <div class="hidden w-full h-full mockup-container">
                            <div class="${product.mockup}">
                                <span class="mockup-label absolute bottom-4">DOPS</span>
                            </div>
                        </div>
                    </div>
                `;
            }
            return getMockupHTML(product.mockup, 'DOPS');
        };

        const getProductDetailVisualHTML = (product) => {
            if (product.image) {
                return `
                    <div class="bg-soft rounded-3xl p-8 flex items-center justify-center h-[400px] md:h-[600px] border border-line overflow-hidden">
                        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-contain" onerror="this.style.display='none'; this.nextElementSibling.classList.remove('hidden');">
                        <div class="hidden w-full h-full items-center justify-center">
                            <div class="${product.mockup} scale-150 transform">
                                <span class="mockup-label absolute bottom-4">DOPS</span>
                            </div>
                        </div>
                    </div>
                `;
            }
            return `
                <div class="bg-soft rounded-3xl p-8 flex items-center justify-center h-[400px] md:h-[600px] border border-line">
                    <div class="${product.mockup} scale-150 transform">
                        <span class="mockup-label absolute bottom-4">DOPS</span>
                    </div>
                </div>
            `;
        };

        const getCartVisualHTML = (item) => {
            if (item.image) {
                return `<img src="${item.image}" alt="${item.name}" class="w-full h-full object-contain p-2" onerror="this.style.display='none'; this.nextElementSibling.classList.remove('hidden');"><div class="hidden ${item.mockup} scale-50 origin-bottom pb-0 h-[80px]"></div>`;
            }
            return `<div class="${item.mockup} scale-50 origin-bottom pb-0 h-[80px]"></div>`;
        };

        // --- CART LOGIC ---
        const getCart = () => JSON.parse(localStorage.getItem('dopsCart')) || [];
        const saveCart = (cart) => {
            localStorage.setItem('dopsCart', JSON.stringify(cart));
            updateCartBadge();
        };

        const addToCart = (productId, qty = 1) => {
            const cart = getCart();
            const existing = cart.find(item => item.id === productId);
            if (existing) {
                existing.qty += qty;
            } else {
                cart.push({ id: productId, qty });
            }
            saveCart(cart);
            showToast('Ditambahkan ke keranjang');
            if(window.location.hash.includes('#cart')) initCart();
        };

        const removeFromCart = (productId) => {
            let cart = getCart();
            cart = cart.filter(item => item.id !== productId);
            saveCart(cart);
            initCart();
        };

        const updateQty = (productId, delta) => {
            const cart = getCart();
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.qty += delta;
                if (item.qty <= 0) removeFromCart(productId);
                else { saveCart(cart); initCart(); }
            }
        };

        const cartDetails = () => {
            const cart = getCart();
            return cart.map(cartItem => {
                const product = PRODUCTS.find(p => p.id === cartItem.id);
                return { ...product, qty: cartItem.qty };
            }).filter(item => item.id); // Filter out if product no longer exists
        };

        const cartSubtotal = () => {
            return cartDetails().reduce((sum, item) => sum + (item.price * item.qty), 0);
        };

        const updateCartBadge = () => {
            const cart = getCart();
            const badge = document.getElementById('cart-badge');
            const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
            if (totalItems > 0) {
                badge.textContent = totalItems;
                badge.classList.remove('hidden');
            } else {
                badge.classList.add('hidden');
            }
        };

        // --- AUTH LOGIC (DUMMY) ---
        const checkAuth = () => {
            const user = localStorage.getItem('dopsUser');
            const navBtn = document.getElementById('nav-user-btn');
            if (user) {
                navBtn.innerHTML = '<i class="ph-fill ph-user-circle text-primary text-2xl"></i>';
                navBtn.href = "#home"; 
                navBtn.onclick = () => { 
                    if(confirm('Logout?')) { localStorage.removeItem('dopsUser'); checkAuth(); window.location.hash = '#home'; }
                };
            } else {
                navBtn.innerHTML = '<i class="ph ph-user text-2xl"></i>';
                navBtn.href = "#signin";
                navBtn.onclick = null;
            }
        };

        // --- VIEW RENDERERS ---

        // Product Card Generator
        const createProductCard = (product) => `
            <div class="bg-white rounded-2xl border border-line overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                <a href="#product?id=${product.id}" class="block relative">
                    <span class="absolute top-3 left-3 bg-white text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest z-10 shadow-sm">${product.tag}</span>
                    ${getProductVisualHTML(product)}
                </a>
                <div class="p-5 flex flex-col flex-grow">
                    <p class="text-xs text-muted mb-1">${product.category}</p>
                    <a href="#product?id=${product.id}" class="font-bold text-black text-lg mb-2 hover:text-primary transition-colors line-clamp-2">${product.name}</a>
                    <div class="mt-auto pt-4 flex items-center justify-between">
                        <span class="font-extrabold text-lg">${formatRupiah(product.price)}</span>
                        <button onclick="addToCart('${product.id}')" class="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-primary hover:text-black transition-colors" aria-label="Add to cart">
                            <i class="ph ph-plus font-bold"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;

        const initHome = () => {
            const bestSellers = PRODUCTS.slice(0, 3);
            document.getElementById('home-bestsellers').innerHTML = bestSellers.map(createProductCard).join('');
        };

        const initCatalog = (queryParams) => {
            const grid = document.getElementById('catalog-grid');
            const emptyState = document.getElementById('catalog-empty');
            const searchInput = document.getElementById('catalog-search');
            const categorySelect = document.getElementById('catalog-category');
            
            // Set initial filters from URL if present
            if(queryParams) {
                const urlCat = queryParams.get('cat');
                const urlFilter = queryParams.get('filter'); // e.g. Kadipaten Series
                if (urlCat) categorySelect.value = urlCat;
                if (urlFilter) searchInput.value = urlFilter;
            }

            const renderGrid = () => {
                const search = searchInput.value.toLowerCase();
                const category = categorySelect.value;
                
                const filtered = PRODUCTS.filter(p => {
                    const matchSearch = p.name.toLowerCase().includes(search) || p.tag.toLowerCase().includes(search);
                    const matchCat = category === 'All' || p.category === category;
                    return matchSearch && matchCat;
                });

                if (filtered.length > 0) {
                    grid.innerHTML = filtered.map(createProductCard).join('');
                    grid.classList.remove('hidden');
                    emptyState.classList.add('hidden');
                } else {
                    grid.classList.add('hidden');
                    emptyState.classList.remove('hidden');
                }
            };

            searchInput.addEventListener('input', renderGrid);
            categorySelect.addEventListener('change', renderGrid);
            
            renderGrid();
        };

        const initProduct = (id) => {
            const container = document.getElementById('product-detail-container');
            const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0]; // fallback
            
            if(!product) return;

            window.scrollTo(0, 0);
            
            container.innerHTML = `
                <!-- Left: Product Image -->
                ${getProductDetailVisualHTML(product)}
                
                <!-- Right: Details -->
                <div class="flex flex-col justify-center">
                    <span class="inline-block bg-black text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest w-fit mb-4">${product.tag}</span>
                    <h1 class="text-3xl md:text-5xl font-extrabold text-black mb-2">${product.name}</h1>
                    <p class="text-muted font-medium mb-6">${product.category} &bull; ${product.variant}</p>
                    <p class="text-3xl font-bold text-black mb-8">${formatRupiah(product.price)}</p>
                    
                    <p class="text-text leading-relaxed mb-8">${product.description}</p>
                    
                    <div class="grid grid-cols-2 gap-4 mb-8">
                        <div class="bg-soft p-4 rounded-xl border border-line">
                            <h4 class="font-bold text-sm mb-2"><i class="ph ph-wind"></i> Notes</h4>
                            <p class="text-sm text-muted">${product.notes.join(', ')}</p>
                        </div>
                        <div class="bg-soft p-4 rounded-xl border border-line">
                            <h4 class="font-bold text-sm mb-2"><i class="ph ph-sparkle"></i> Benefits</h4>
                            <ul class="text-sm text-muted list-disc list-inside">
                                ${product.benefit.map(b => `<li>${b}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                    
                    <div class="flex items-center gap-4">
                        <div class="flex items-center border border-line rounded-full bg-soft">
                            <button onclick="document.getElementById('p-qty').stepDown()" class="w-12 h-12 flex items-center justify-center hover:text-primary"><i class="ph ph-minus"></i></button>
                            <input type="number" id="p-qty" min="1" value="1" class="w-12 text-center bg-transparent font-bold outline-none" readonly>
                            <button onclick="document.getElementById('p-qty').stepUp()" class="w-12 h-12 flex items-center justify-center hover:text-primary"><i class="ph ph-plus"></i></button>
                        </div>
                        <button onclick="addToCart('${product.id}', parseInt(document.getElementById('p-qty').value))" class="flex-1 bg-black text-white h-12 rounded-full font-semibold hover:bg-primary hover:text-black transition-colors flex items-center justify-center gap-2">
                            <i class="ph ph-shopping-cart"></i> Add to Cart
                        </button>
                    </div>
                </div>
            `;
        };

        const initCart = () => {
            const container = document.getElementById('cart-items-container');
            const items = cartDetails();
            const subtotalDisplay = document.getElementById('cart-subtotal-display');
            const btnCheckout = document.getElementById('btn-checkout');
            
            if (items.length === 0) {
                container.innerHTML = `
                    <div class="text-center py-20 bg-soft rounded-2xl border border-line">
                        <i class="ph ph-shopping-cart text-5xl text-muted mb-4"></i>
                        <h2 class="text-2xl font-bold mb-2">Keranjang Kosong</h2>
                        <p class="text-muted mb-6">Belum ada produk di keranjang Anda.</p>
                        <a href="#catalog" class="inline-block bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-primary hover:text-black transition-colors">Belanja Sekarang</a>
                    </div>
                `;
                subtotalDisplay.textContent = 'Rp0';
                btnCheckout.classList.add('opacity-50', 'pointer-events-none');
            } else {
                container.innerHTML = `<div class="space-y-4">
                    ${items.map(item => `
                        <div class="flex items-center gap-4 p-4 border border-line rounded-2xl bg-white relative">
                            <div class="w-24 h-24 bg-soft rounded-xl flex items-center justify-center flex-shrink-0">
                               ${getCartVisualHTML(item)}
                            </div>
                            <div class="flex-1">
                                <h3 class="font-bold text-black line-clamp-1"><a href="#product?id=${item.id}">${item.name}</a></h3>
                                <p class="text-sm text-muted mb-2">${formatRupiah(item.price)}</p>
                                <div class="flex items-center border border-line rounded-full bg-soft w-fit">
                                    <button onclick="updateQty('${item.id}', -1)" class="w-8 h-8 flex items-center justify-center hover:text-primary"><i class="ph ph-minus text-xs"></i></button>
                                    <span class="w-8 text-center font-bold text-sm">${item.qty}</span>
                                    <button onclick="updateQty('${item.id}', 1)" class="w-8 h-8 flex items-center justify-center hover:text-primary"><i class="ph ph-plus text-xs"></i></button>
                                </div>
                            </div>
                            <div class="text-right flex flex-col items-end justify-between h-24 py-1">
                                <button onclick="removeFromCart('${item.id}')" class="text-muted hover:text-red-500 transition-colors p-1"><i class="ph ph-trash text-lg"></i></button>
                                <span class="font-bold">${formatRupiah(item.price * item.qty)}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>`;
                subtotalDisplay.textContent = formatRupiah(cartSubtotal());
                btnCheckout.classList.remove('opacity-50', 'pointer-events-none');
            }
        };

        const initCheckout = () => {
            if(getCart().length === 0) { window.location.hash = '#cart'; return; }
            const form = document.getElementById('checkout-form');
            const cust = JSON.parse(localStorage.getItem('dopsCustomer')) || {};
            
            // Prefill if exists
            if(cust.name) document.getElementById('chk-name').value = cust.name;
            if(cust.email) document.getElementById('chk-email').value = cust.email;
            if(cust.phone) document.getElementById('chk-phone').value = cust.phone;
            if(cust.address) document.getElementById('chk-address').value = cust.address;
            if(cust.city) document.getElementById('chk-city').value = cust.city;
            if(cust.province) document.getElementById('chk-province').value = cust.province;
            if(cust.postal) document.getElementById('chk-postal').value = cust.postal;

            form.onsubmit = (e) => {
                e.preventDefault();
                const customerData = {
                    name: document.getElementById('chk-name').value,
                    email: document.getElementById('chk-email').value,
                    phone: document.getElementById('chk-phone').value,
                    address: document.getElementById('chk-address').value,
                    city: document.getElementById('chk-city').value,
                    province: document.getElementById('chk-province').value,
                    postal: document.getElementById('chk-postal').value,
                };
                localStorage.setItem('dopsCustomer', JSON.stringify(customerData));
                window.location.hash = '#shipping';
            };
        };

        const initShipping = () => {
            if(getCart().length === 0) { window.location.hash = '#cart'; return; }
            const cust = JSON.parse(localStorage.getItem('dopsCustomer'));
            if(!cust) { window.location.hash = '#checkout'; return; }

            document.getElementById('ship-contact-display').textContent = `${cust.email} • ${cust.phone}`;
            document.getElementById('ship-address-display').innerHTML = `${cust.address},<br>${cust.city}, ${cust.province} ${cust.postal}`;

            // Mini cart summary
            const items = cartDetails();
            const summaryDiv = document.getElementById('ship-cart-summary');
            summaryDiv.innerHTML = items.map(item => `
                <div class="flex justify-between">
                    <span class="text-muted"><span class="font-bold text-black">${item.qty}x</span> ${item.name}</span>
                    <span class="font-medium">${formatRupiah(item.price * item.qty)}</span>
                </div>
            `).join('');
            document.getElementById('ship-subtotal-display').textContent = formatRupiah(cartSubtotal());

            const form = document.getElementById('shipping-form');
            form.onsubmit = (e) => {
                e.preventDefault();
                const formData = new FormData(form);
                const cost = parseInt(formData.get('shipping-method'));
                localStorage.setItem('dopsShipping', JSON.stringify({ cost }));
                window.location.hash = '#payment';
            };
        };

        const initPayment = () => {
            if(getCart().length === 0) { window.location.hash = '#cart'; return; }
            const cust = JSON.parse(localStorage.getItem('dopsCustomer'));
            const ship = JSON.parse(localStorage.getItem('dopsShipping'));
            if(!cust) { window.location.hash = '#checkout'; return; }
            if(!ship) { window.location.hash = '#shipping'; return; }

            const sub = cartSubtotal();
            const shippingCost = ship.cost;
            const total = sub + shippingCost;

            document.getElementById('pay-subtotal').textContent = formatRupiah(sub);
            document.getElementById('pay-shipping-cost').textContent = formatRupiah(shippingCost);
            document.getElementById('pay-total').textContent = formatRupiah(total);

            const form = document.getElementById('payment-form');
            form.onsubmit = (e) => {
                e.preventDefault();
                // Place Order Logic
                const invoice = `DOPS-2026-${Math.floor(1000 + Math.random() * 9000)}`;
                document.getElementById('invoice-id').textContent = invoice;
                
                // Clear Cart, Keep Customer data for convenience
                localStorage.removeItem('dopsCart');
                localStorage.removeItem('dopsShipping');
                updateCartBadge();
                
                window.location.hash = '#success';
            };
        };

        const initAuthPages = () => {
            const signinForm = document.getElementById('signin-form');
            const registerForm = document.getElementById('register-form');
            
            if(signinForm) {
                signinForm.onsubmit = (e) => {
                    e.preventDefault();
                    localStorage.setItem('dopsUser', JSON.stringify({ dummy: true }));
                    checkAuth();
                    window.location.hash = '#home';
                    showToast('Login berhasil');
                };
            }
            if(registerForm) {
                registerForm.onsubmit = (e) => {
                    e.preventDefault();
                    const name = document.getElementById('reg-name').value;
                    localStorage.setItem('dopsUser', JSON.stringify({ name }));
                    checkAuth();
                    window.location.hash = '#home';
                    showToast('Registrasi berhasil');
                };
            }
        };

        const initBlog = () => {
            const grid = document.getElementById('blog-grid');
            grid.innerHTML = ARTICLES.map(a => `
                <a href="#article?id=${a.id}" class="group block bg-white rounded-2xl border border-line overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div class="aspect-[4/3] bg-black flex items-center justify-center p-6 text-center">
                         <span class="text-primary font-extrabold text-2xl uppercase tracking-widest opacity-30 group-hover:opacity-100 transition-opacity">DOPS Journal</span>
                    </div>
                    <div class="p-6">
                        <span class="text-xs text-muted mb-2 block font-medium">${a.date}</span>
                        <h3 class="font-bold text-xl mb-3 group-hover:text-primary transition-colors line-clamp-2">${a.title}</h3>
                        <p class="text-muted text-sm line-clamp-3">${a.excerpt}</p>
                    </div>
                </a>
            `).join('');
        };

        const initArticle = (id) => {
            const container = document.getElementById('article-content');
            let article = ARTICLES.find(a => a.id === id);
            if(!article) article = ARTICLES[0]; // fallback

            container.innerHTML = `
                <span class="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">Journal</span>
                <h1 class="text-4xl md:text-5xl font-extrabold text-black mb-4 leading-tight">${article.title}</h1>
                <p class="text-muted mb-8 pb-8 border-b border-line">${article.date} &bull; by DOPS Editorial</p>
                
                <div class="aspect-video bg-black rounded-3xl flex items-center justify-center mb-10">
                     <span class="text-primary font-extrabold text-3xl uppercase tracking-widest opacity-50">DOPS Visual</span>
                </div>
                
                <div class="prose max-w-none text-text text-lg leading-relaxed">
                    ${article.content}
                </div>
                
                <div class="mt-12 pt-8 border-t border-line text-center">
                    <a href="#catalog" class="inline-block bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-black transition-colors">Shop DOPS Collection</a>
                </div>
            `;
            window.scrollTo(0, 0);
        };

        // --- ROUTER ---
        const router = () => {
            const hash = window.location.hash || '#home';
            const [path, queryString] = hash.split('?');
            const viewId = path.replace('#', '') || 'home';
            const queryParams = new URLSearchParams(queryString || '');

            // Hide all views
            document.querySelectorAll('.page-view').forEach(el => {
                el.classList.remove('active');
            });

            // Show target view
            const targetView = document.getElementById(viewId);
            if(targetView) {
                targetView.classList.add('active');
            } else {
                document.getElementById('home').classList.add('active');
            }

            // Execute view-specific logic
            switch(viewId) {
                case 'home': initHome(); break;
                case 'catalog': initCatalog(queryParams); break;
                case 'product': initProduct(queryParams.get('id')); break;
                case 'cart': initCart(); break;
                case 'checkout': initCheckout(); break;
                case 'shipping': initShipping(); break;
                case 'payment': initPayment(); break;
                case 'signin':
                case 'register': initAuthPages(); break;
                case 'blog': initBlog(); break;
                case 'article': initArticle(queryParams.get('id')); break;
            }
            
            // Scroll top unless it's cart (prevent jarring jumps if just updating qty)
            if(viewId !== 'cart') window.scrollTo(0, 0);
        };

        // --- INIT APP ---
        window.addEventListener('hashchange', router);
        window.addEventListener('DOMContentLoaded', () => {
            updateCartBadge();
            checkAuth();
            initHome(); // Cache initial DOM
            router(); // Route based on current URL
        });
