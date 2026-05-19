// --- 1. INISIALISASI DATA LOCALSTORAGE ---
const initData = {
    app_info: { name: "KebunKu", version: "1.2.0-prototype" },
    current_user: {
        id: "USR-001",
        name: "Pengguna 1",
        email: "user1@gmail.com",
        password: "password123",
        saldo: 150000,
        my_store: {
            is_active: false,
            store_name: "",
            seller_name: "",
            phone: "",
            address: ""
        }
    },
    products: [
        // 10 Sayur
        { id: "S01", name: "Bayam Hijau Segar", category: "Sayur", price: 4000, stock: 50, is_promo: false, discount_percentage: 0, unit: "Per ikat", store_name: "Penjual Sayur Premium", description: "Bayam hijau segar pilihan yang baru saja dipanen. Sangat cocok untuk dibuat sayur bening yang kaya akan zat besi.", image_url: "Asset/Photo/Sayur/Bayam_Hijau_Segar.jpg" },
        { id: "S02", name: "Kangkung Cabut", category: "Sayur", price: 3500, stock: 45, is_promo: false, discount_percentage: 0, unit: "Per ikat", store_name: "Penjual Sayur Premium", description: "Kangkung cabut hidroponik yang renyah dan bebas pestisida.", image_url: "Asset/Photo/Sayur/Kangkung_Cabut.jpg" },
        { id: "S03", name: "Wortel Brastagi", category: "Sayur", price: 15000, stock: 30, is_promo: true, discount_percentage: 20, unit: "Per Kg", store_name: "Penjual Sayur Premium", description: "Wortel manis asli Brastagi, cocok untuk jus dan sayur sop.", image_url: "Asset/Photo/Sayur/Wortel_Brastagi.jpg" },
        { id: "S04", name: "Tomat Merah", category: "Sayur", price: 12000, stock: 40, is_promo: false, discount_percentage: 0, unit: "Per Kg", store_name: "Penjual Sayur Premium", description: "Tomat merah segar yang banyak airnya, kualitas super.", image_url: "Asset/Photo/Sayur/Tomat_Merah.png" },
        { id: "S05", name: "Cabai Merah Keriting", category: "Sayur", price: 45000, stock: 20, is_promo: true, discount_percentage: 25, unit: "Per Kg", store_name: "Penjual Sayur Premium", description: "Cabai merah keriting pedas pas untuk sambal dan bumbu masakan.", image_url: "Asset/Photo/Sayur/Cabai_Merah_Keriting.jpg" },
        { id: "S06", name: "Bawang Merah", category: "Sayur", price: 35000, stock: 25, is_promo: false, discount_percentage: 0, unit: "Per Kg", store_name: "Penjual Sayur Premium", description: "Bawang merah brebes pilihan.", image_url: "Asset/Photo/Sayur/Bawang_Merah.jpg" },
        { id: "S07", name: "Bawang Putih", category: "Sayur", price: 32000, stock: 30, is_promo: false, discount_percentage: 0, unit: "Per Kg", store_name: "Penjual Sayur Premium", description: "Bawang putih kating berkualitas.", image_url: "Asset/Photo/Sayur/Bawang_Putih.jpg" },
        { id: "S08", name: "Sawi Hijau (Caisim)", category: "Sayur", price: 5000, stock: 60, is_promo: false, discount_percentage: 0, unit: "Per ikat", store_name: "Penjual Sayur Premium", description: "Sawi hijau segar, teman setia mie ayam dan bakso.", image_url: "Asset/Photo/Sayur/Sawi_Hijau_(Caisim).jpg" },
        { id: "S09", name: "Brokoli Hijau", category: "Sayur", price: 25000, stock: 15, is_promo: true, discount_percentage: 30, unit: "Per Kg", store_name: "Penjual Sayur Premium", description: "Brokoli hijau kaya antioksidan dan vitamin C.", image_url: "Asset/Photo/Sayur/Brokoli_Hijau.png" },
        { id: "S10", name: "Kentang Dieng", category: "Sayur", price: 18000, stock: 35, is_promo: false, discount_percentage: 0, unit: "Per Kg", store_name: "Penjual Sayur Premium", description: "Kentang kuning Dieng yang empuk dan pulen.", image_url: "Asset/Photo/Sayur/Kentang_Dieng.jpg" },
        // 10 Buah
        { id: "B01", name: "Apel Malang", category: "Buah", price: 25000, stock: 40, is_promo: false, discount_percentage: 0, unit: "Per Kg", store_name: "Penjual Sayur Premium", description: "Apel Malang hijau manis asam segar, langsung dari kebun.", image_url: "Asset/Photo/Buah/Apel_Malang.jpg" },
        { id: "B02", name: "Jeruk Manis", category: "Buah", price: 22000, stock: 30, is_promo: true, discount_percentage: 20, unit: "Per Kg", store_name: "Penjual Sayur Premium", description: "Jeruk manis kaya vitamin C untuk menjaga imunitas.", image_url: "Asset/Photo/Buah/Jeruk_Manis.jpg" },
        { id: "B03", name: "Pisang Cavendish", category: "Buah", price: 18000, stock: 25, is_promo: false, discount_percentage: 0, unit: "Per Kg", store_name: "Penjual Sayur Premium", description: "Pisang kuning mulus kesukaan semua orang.", image_url: "Asset/Photo/Buah/Pisang_cavendish.jpg" },
        { id: "B04", name: "Mangga Harumanis", category: "Buah", price: 30000, stock: 20, is_promo: true, discount_percentage: 25, unit: "Per Kg", store_name: "Penjual Sayur Premium", description: "Mangga harum dan manis legit.", image_url: "Asset/Photo/Buah/Mangga_Harumanis.jpeg" },
        { id: "B05", name: "Semangka Merah", category: "Buah", price: 15000, stock: 15, is_promo: false, discount_percentage: 0, unit: "Per Pcs", store_name: "Penjual Sayur Premium", description: "Semangka tanpa biji yang sangat menyegarkan.", image_url: "Asset/Photo/Buah/Semangka_Merah.jpg" },
        { id: "B06", name: "Melon Hijau", category: "Buah", price: 20000, stock: 12, is_promo: true, discount_percentage: 30, unit: "Per Pcs", store_name: "Penjual Sayur Premium", description: "Melon hijau manis berair.", image_url: "Asset/Photo/Buah/Melon_Hijau.jpg" },
        { id: "B07", name: "Pepaya California", category: "Buah", price: 12000, stock: 18, is_promo: false, discount_percentage: 0, unit: "Per Pcs", store_name: "Penjual Sayur Premium", description: "Pepaya manis untuk melancarkan pencernaan.", image_url: "Asset/Photo/Buah/Pepaya California.jpg" },
        { id: "B08", name: "Alpukat Mentega", category: "Buah", price: 35000, stock: 22, is_promo: false, discount_percentage: 0, unit: "Per Kg", store_name: "Penjual Sayur Premium", description: "Alpukat mentega super legit.", image_url: "Asset/Photo/Buah/Alpukat_Mentega.jpg" },
        { id: "B09", name: "Anggur Merah", category: "Buah", price: 45000, stock: 10, is_promo: false, discount_percentage: 0, unit: "Per Kg", store_name: "Penjual Sayur Premium", description: "Anggur merah manis tanpa biji.", image_url: "Asset/Photo/Buah/Anggur_Merah.jpg" },
        { id: "B10", name: "Nanas Subang", category: "Buah", price: 10000, stock: 25, is_promo: false, discount_percentage: 0, unit: "Per Pcs", store_name: "Penjual Sayur Premium", description: "Nanas madu asli Subang.", image_url: "Asset/Photo/Buah/Nanas_Subang.jpg" }
    ],
    cart: [],
    transactions: []
};

// Cek dan Paksa Reset jika versi lama
let existingDataStr = localStorage.getItem('kebunku_app_data');
if (existingDataStr) {
    let existingData = JSON.parse(existingDataStr);
    if (!existingData.app_info || existingData.app_info.version !== "1.2.0-prototype") {
        localStorage.setItem('kebunku_app_data', JSON.stringify(initData));
    }
} else {
    localStorage.setItem('kebunku_app_data', JSON.stringify(initData));
}

let appData = JSON.parse(localStorage.getItem('kebunku_app_data'));

// Utils
const formatRupiah = (number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
const getDiscountedPrice = (price, pct) => price - (price * (pct / 100));

// --- 2. AUTH & NAVIGATION ---

const checkAuth = () => {
    const isLogged = localStorage.getItem('kebunku_logged_in');
    if (isLogged) {
        document.getElementById('login-view').style.display = 'none';
        document.getElementById('app-view').style.display = 'block';
        initApp();
    } else {
        document.getElementById('login-view').style.display = 'flex';
        document.getElementById('app-view').style.display = 'none';
    }
};

document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    localStorage.setItem('kebunku_logged_in', 'true');
    checkAuth();
});

document.getElementById('btn-logout').addEventListener('click', () => {
    localStorage.removeItem('kebunku_logged_in');
    checkAuth();
});

let viewHistory = []; // Untuk tombol back

window.navTo = (targetId) => {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));

    const targetEl = document.getElementById(targetId);
    if (targetEl) {
        targetEl.classList.remove('hidden');
        window.scrollTo(0, 0);
        viewHistory.push(targetId);
    }

    if (['beranda-tab', 'promo-tab', 'keranjang-tab', 'akun-tab'].includes(targetId)) {
        document.querySelectorAll('.nav-btn').forEach(btn => {
            if (btn.dataset.target === targetId) {
                btn.classList.add('active', 'text-primary');
                btn.classList.remove('text-gray-400');
                btn.querySelector('.nav-icon').classList.replace('text-gray-400', 'text-primary');
                btn.querySelector('.nav-text').classList.replace('text-gray-400', 'text-primary');
            } else {
                btn.classList.remove('active', 'text-primary');
                btn.classList.add('text-gray-400');
                btn.querySelector('.nav-icon').classList.replace('text-primary', 'text-gray-400');
                btn.querySelector('.nav-text').classList.replace('text-primary', 'text-gray-400');
            }
        });
        viewHistory = [targetId]; // Reset history jika ke menu utama
    }

    if (targetId === 'keranjang-tab') renderCart();
};

window.navToBack = () => {
    if (viewHistory.length > 1) {
        viewHistory.pop();
        const prev = viewHistory.pop();
        navTo(prev);
    } else {
        navTo('beranda-tab');
    }
}


// --- 3. RENDERING ENGINE ---

const getProductImage = (product) => {
    if (product.image_url) return product.image_url;
    const bgColor = product.category === 'Sayur' ? '27AE60' : 'F39C12';
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(product.name)}&background=${bgColor}&color=fff&size=400&font-size=0.3`;
};

const renderProductCard = (product) => {
    const isPromo = product.is_promo;
    const currentPrice = isPromo ? getDiscountedPrice(product.price, product.discount_percentage) : product.price;
    const badge = isPromo ? `<div class="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-sm">${product.discount_percentage}% OFF</div>` : '';

    const priceHtml = isPromo
        ? `<div class="text-[10px] text-gray-400 line-through">${formatRupiah(product.price)}</div>
           <div class="font-bold text-primary text-sm">${formatRupiah(currentPrice)}</div>`
        : `<div class="font-bold text-primary text-sm">${formatRupiah(product.price)}</div>`;

    return `
        <div onclick="showProductDetail('${product.id}')" class="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 relative flex flex-col h-full cursor-pointer hover:shadow-md transition">
            ${badge}
            <img src="${getProductImage(product)}" class="w-full h-24 object-cover rounded-xl mb-3" alt="${product.name}">
            <div class="text-[10px] text-gray-400 uppercase tracking-wider mb-1">${product.category} &bull; ${product.unit}</div>
            <h4 class="font-poppins font-semibold text-dark text-sm leading-tight mb-2 flex-1">${product.name}</h4>
            <div class="mb-3">${priceHtml}</div>
            <button onclick="event.stopPropagation(); addToCart('${product.id}')" class="w-full bg-green-50 text-primary border border-green-200 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1 hover:bg-primary hover:text-white transition">
                <i class="ph ph-plus"></i> Tambah
            </button>
        </div>
    `;
};

const renderBeranda = (searchQuery = '') => {
    let sayur = appData.products.filter(p => p.category === 'Sayur');
    let buah = appData.products.filter(p => p.category === 'Buah');
    let promo = appData.products.filter(p => p.is_promo);

    if (searchQuery) {
        const q = searchQuery.toLowerCase();
        sayur = sayur.filter(p => p.name.toLowerCase().includes(q));
        buah = buah.filter(p => p.name.toLowerCase().includes(q));
        promo = promo.filter(p => p.name.toLowerCase().includes(q));
    }

    document.getElementById('grid-sayur').innerHTML = sayur.length ? sayur.map(renderProductCard).join('') : '<p class="text-sm text-gray-400 col-span-2 text-center py-4">Tidak ada produk</p>';
    document.getElementById('grid-buah').innerHTML = buah.length ? buah.map(renderProductCard).join('') : '<p class="text-sm text-gray-400 col-span-2 text-center py-4">Tidak ada produk</p>';
    document.getElementById('grid-promo').innerHTML = promo.length ? promo.map(renderProductCard).join('') : '<p class="text-sm text-gray-400 col-span-2 text-center py-4">Tidak ada promo</p>';
};

document.getElementById('search-input').addEventListener('input', (e) => { renderBeranda(e.target.value); });


// --- 4. DETAIL PRODUK ---

window.showProductDetail = (id) => {
    const product = appData.products.find(p => p.id === id);
    if (!product) return;

    document.getElementById('detail-img').src = getProductImage(product);
    document.getElementById('detail-category').textContent = product.category;
    document.getElementById('detail-name').textContent = product.name;
    document.getElementById('detail-unit').textContent = "/ " + product.unit;
    document.getElementById('detail-store').textContent = product.store_name || "Penjual Sayur Premium";
    document.getElementById('detail-desc').textContent = product.description || "Sayur segar dari petani.";

    const isPromo = product.is_promo;
    const currentPrice = isPromo ? getDiscountedPrice(product.price, product.discount_percentage) : product.price;

    document.getElementById('detail-price').textContent = formatRupiah(currentPrice);

    if (isPromo) {
        document.getElementById('detail-price-promo').classList.remove('hidden');
        document.getElementById('detail-price-promo').textContent = formatRupiah(product.price);
    } else {
        document.getElementById('detail-price-promo').classList.add('hidden');
    }

    document.getElementById('detail-btn-add').onclick = () => { addToCart(product.id); alert('Berhasil ditambahkan ke keranjang!'); navToBack(); };

    navTo('detail-tab');
};


// --- 5. CART & CHECKOUT LOGIC ---

window.addToCart = (productId) => {
    const product = appData.products.find(p => p.id === productId);
    const existingItem = appData.cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.qty += 1;
    } else {
        const currentPrice = product.is_promo ? getDiscountedPrice(product.price, product.discount_percentage) : product.price;
        appData.cart.push({ ...product, qty: 1, currentPrice });
    }

    saveData();
    updateCartBadge();
};

window.updateCartQty = (productId, delta) => {
    const item = appData.cart.find(i => i.id === productId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
        appData.cart = appData.cart.filter(i => i.id !== productId);
    }
    saveData();
    renderCart();
    updateCartBadge();
};

const updateCartBadge = () => {
    const badge = document.getElementById('cart-badge-nav');
    const totalItems = appData.cart.reduce((sum, item) => sum + item.qty, 0);
    if (totalItems > 0) {
        badge.textContent = totalItems;
        badge.classList.remove('hidden');
    } else {
        badge.classList.add('hidden');
    }
};

const renderCart = () => {
    const container = document.getElementById('cart-list');
    const emptyMsg = document.getElementById('empty-cart-msg');
    const btnCheckout = document.getElementById('btn-checkout');

    Array.from(container.children).forEach(child => { if (child.id !== 'empty-cart-msg') child.remove(); });

    if (appData.cart.length === 0) {
        emptyMsg.classList.remove('hidden');
        document.getElementById('cart-total').textContent = 'Rp 0';
        btnCheckout.disabled = true;
        return;
    }

    emptyMsg.classList.add('hidden');
    btnCheckout.disabled = false;

    let total = 0;

    appData.cart.forEach(item => {
        const subtotal = item.currentPrice * item.qty;
        total += subtotal;

        const el = document.createElement('div');
        el.className = 'flex items-center gap-3 bg-white p-3 rounded-2xl border border-gray-100 shadow-sm mb-3';
        el.innerHTML = `
            <img src="${getProductImage(item)}" class="w-16 h-16 rounded-xl object-cover">
            <div class="flex-1">
                <h4 class="font-semibold text-sm text-dark line-clamp-1">${item.name}</h4>
                <p class="text-[10px] text-gray-400 mb-1">${item.unit}</p>
                <div class="text-primary font-bold text-sm">${formatRupiah(subtotal)}</div>
            </div>
            <div class="flex items-center gap-2 bg-gray-50 p-1 rounded-lg border border-gray-200">
                <button onclick="updateCartQty('${item.id}', -1)" class="w-6 h-6 flex items-center justify-center text-gray-500 font-bold bg-white rounded shadow-sm">-</button>
                <span class="text-xs font-bold w-4 text-center">${item.qty}</span>
                <button onclick="updateCartQty('${item.id}', 1)" class="w-6 h-6 flex items-center justify-center text-primary font-bold bg-white rounded shadow-sm">+</button>
            </div>
        `;
        container.appendChild(el);
    });

    document.getElementById('cart-total').textContent = formatRupiah(total);
};

// Checkout Simulation
document.getElementById('btn-checkout').addEventListener('click', () => {
    const overlay = document.getElementById('loading-overlay');
    const title = document.getElementById('loading-title');
    const text = document.getElementById('loading-text');

    overlay.style.display = 'flex';
    setTimeout(() => { overlay.style.opacity = '1'; overlay.style.pointerEvents = 'auto'; }, 10); // Fade in

    title.textContent = 'Meneruskan Pesanan...';
    text.textContent = 'Menghubungi petani';

    setTimeout(() => {
        title.textContent = 'Pesanan Diproses!';
        text.textContent = 'Penjual sedang menyiapkan pesanan Anda';

        // Simpan ke Transaksi
        const totalHarga = appData.cart.reduce((sum, item) => sum + (item.currentPrice * item.qty), 0);
        const transaksiBaru = {
            id: 'TRX-' + Date.now(),
            date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
            items: [...appData.cart],
            total: totalHarga,
            status: 'Diproses'
        };
        appData.transactions.unshift(transaksiBaru);

        // Kosongkan keranjang
        appData.cart = [];
        saveData();
        renderCart();
        updateCartBadge();

        setTimeout(() => {
            overlay.style.opacity = '0';
            setTimeout(() => { overlay.style.display = 'none'; }, 300); // Fade out

            alert("Checkout Berhasil! Pesanan Anda sedang diproses oleh petani. Anda dapat memantaunya di menu Riwayat Transaksi.");
        }, 1500);
    }, 2000);
});


// --- 6. AKUN & TRANSAKSI ---

const initAkun = () => {
    const user = appData.current_user;
    document.getElementById('profile-name').textContent = user.name;
    document.getElementById('profile-email').textContent = user.email;
    document.getElementById('profile-saldo').textContent = formatRupiah(user.saldo);
    document.getElementById('profile-avatar').textContent = user.name.charAt(0).toUpperCase();
};

window.renderTransaksi = () => {
    const container = document.getElementById('transaksi-list');
    container.innerHTML = '';

    if (appData.transactions.length === 0) {
        container.innerHTML = '<div class="text-center text-gray-400 mt-10"><p>Belum ada riwayat belanja.</p></div>';
    } else {
        appData.transactions.forEach(trx => {
            const itemPreview = trx.items.map(i => `${i.name} (${i.qty}x)`).join(', ');
            container.innerHTML += `
                <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-3">
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-xs text-gray-400">${trx.date}</span>
                        <span class="bg-orange-100 text-secondary text-[10px] font-bold px-2 py-1 rounded">${trx.status}</span>
                    </div>
                    <p class="text-sm text-dark font-medium mb-1 truncate">${itemPreview}</p>
                    <p class="text-xs text-gray-500 mb-2">ID Pesanan: ${trx.id}</p>
                    <div class="flex justify-between items-end border-t border-gray-50 pt-2 mt-2">
                        <span class="text-xs text-gray-500">Total Belanja</span>
                        <span class="font-bold text-primary">${formatRupiah(trx.total)}</span>
                    </div>
                </div>
            `;
        });
    }
    navTo('transaksi-tab');
}


// --- 7. TOKO SAYA LOGIC ---

document.getElementById('btn-toko-saya').addEventListener('click', () => {
    const store = appData.current_user.my_store;
    if (store.is_active) {
        renderToko();
        navTo('toko-tab');
    } else {
        navTo('buka-toko-tab');
    }
});

// Register Store
document.getElementById('form-buka-toko').addEventListener('submit', (e) => {
    e.preventDefault();
    const storeName = document.getElementById('reg-store-name').value;
    const sellerName = document.getElementById('reg-seller-name').value;
    const email = document.getElementById('reg-email').value;
    const phone = document.getElementById('reg-phone').value;
    const address = document.getElementById('reg-address').value;

    appData.current_user.my_store = {
        is_active: true,
        store_name: storeName,
        seller_name: sellerName,
        email: email,
        phone: phone,
        address: address
    };

    saveData();
    alert(`Selamat! Toko '${storeName}' berhasil dibuka.`);
    document.getElementById('form-buka-toko').reset();
    navTo('akun-tab'); // Kembali ke Akun
});

// Render Kelola Toko
window.renderToko = () => {
    const store = appData.current_user.my_store;
    document.getElementById('my-store-name').textContent = store.store_name;
    document.getElementById('my-store-address').textContent = store.address || "Belum ada alamat";

    const etalaseContainer = document.getElementById('my-etalase-list');
    const myProducts = appData.products.filter(p => p.store_name === store.store_name);

    if (myProducts.length === 0) {
        etalaseContainer.innerHTML = '<p class="text-sm text-gray-400 text-center py-4">Etalase masih kosong. Tambahkan produk pertama Anda!</p>';
    } else {
        etalaseContainer.innerHTML = myProducts.map(p => `
            <div class="flex gap-3 bg-white border border-gray-100 p-3 rounded-xl shadow-sm">
                <img src="${getProductImage(p)}" class="w-14 h-14 object-cover rounded-lg">
                <div class="flex-1">
                    <h4 class="font-medium text-sm text-dark">${p.name}</h4>
                    <p class="text-xs text-gray-500 mb-1">Stok: ${p.stock} &bull; ${p.unit}</p>
                    <p class="font-bold text-primary text-sm">${formatRupiah(p.price)}</p>
                </div>
            </div>
        `).join('');
    }
};

window.toggleFormTambah = () => {
    const section = document.getElementById('section-tambah-produk');
    if (section.classList.contains('hidden')) {
        section.classList.remove('hidden');
    } else {
        section.classList.add('hidden');
    }
};

// Tambah Produk
document.getElementById('form-tambah-produk').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('prod-name').value;
    const cat = document.getElementById('prod-cat').value;
    const unit = document.getElementById('prod-unit').value;
    const qty = parseInt(document.getElementById('prod-qty').value);
    const price = parseInt(document.getElementById('prod-price').value);
    const desc = document.getElementById('prod-desc').value;
    const storeName = appData.current_user.my_store.store_name;

    const newProduct = {
        id: 'PRD-' + Date.now(),
        name: name,
        category: cat,
        unit: unit,
        price: price,
        stock: qty,
        is_promo: false,
        discount_percentage: 0,
        store_name: storeName,
        description: desc
    };

    appData.products.unshift(newProduct);
    saveData();

    alert(`Produk ${name} berhasil ditambahkan ke etalase!`);
    document.getElementById('form-tambah-produk').reset();
    toggleFormTambah();
    renderToko(); // refresh etalase
    renderBeranda(); // refresh beranda
});


// --- CORE UTILS & INIT ---

const saveData = () => { localStorage.setItem('kebunku_app_data', JSON.stringify(appData)); };

const initApp = () => {
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.add('text-gray-400'));
    renderBeranda();
    initAkun();
    updateCartBadge();
    navTo('beranda-tab');
};

document.addEventListener('DOMContentLoaded', () => { checkAuth(); });
