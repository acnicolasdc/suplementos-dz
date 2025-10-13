// Función para cargar todos los productos
async function loadAllProducts() {
    try {
        const allProducts = [
            ...proteinProducts,
            ...creatinaProducts,
            ...aminoacidosProducts,
            ...preEntrenoProducts,
            ...vitaminasProducts,
            ...accesoriosProducts,
            ...hormonalesProducts
        ];
        return allProducts;
    } catch (error) {
        console.error('Error al cargar los productos:', error);
        return [];
    }
}

// Función para formatear precio
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Función para mostrar productos filtrados
async function displayProducts(category = 'todos') {
    const productGrid = document.getElementById('productGrid');
    if (!productGrid) return;

    const allProducts = await loadAllProducts();
    const filteredProducts = category === 'todos' 
        ? allProducts 
        : allProducts.filter(product => product.category === category);

    productGrid.innerHTML = filteredProducts.map(product => {
        const priceDisplay = product.priceRange 
            ? `<div class="price">$${formatPrice(product.priceRange.min)} - $${formatPrice(product.priceRange.max)}</div>`
            : `<div class="price">$${formatPrice(product.price)}</div>`;

        return `
            <div class="product-card" data-product-id="${product.id}" data-category="${product.category}">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <h3>${product.name}</h3>
                ${priceDisplay}
                <button class="add-to-cart" onclick="addToCart('${product.id}')">
                    AÑADIR A LA CESTA
                </button>
            </div>
        `;
    }).join('');

    // Aplicar animaciones a las nuevas cards
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
    });

    // Trigger animaciones
    setTimeout(() => {
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 100);
}

// Función para agregar al carrito
function addToCart(productId) {
    const allProducts = loadAllProducts();
    const product = allProducts.find(p => p.id === productId);
    if (product) {
        // Actualizar contador del carrito
        const cartCount = document.querySelector('.cart-count');
        const currentCount = parseInt(cartCount.textContent);
        cartCount.textContent = currentCount + 1;
        
        // Mostrar mensaje de éxito
        alert(`Producto agregado al carrito:\n${product.name}`);
    }
}

// Manejar filtros de categoría
document.addEventListener('DOMContentLoaded', () => {
    // Configurar el enlace de inicio y los enlaces de categoría
    const homeLink = document.querySelector('a[data-category="todos"]');
    if (homeLink) {
        homeLink.addEventListener('click', (e) => {
            e.preventDefault();
            displayProducts('todos');
            document.querySelector('.products-count').textContent = '¡Más de 130 productos disponibles!';
            
            // Actualizar estado activo
            document.querySelectorAll('[data-category]').forEach(btn => {
                btn.classList.remove('active');
            });
            homeLink.classList.add('active');
        });
    }

    // Configurar los enlaces de categoría
    const categoryLinks = document.querySelectorAll('[data-category]:not([data-category="todos"])');
    
    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.dataset.category;
            
            // Actualizar estado activo
            document.querySelectorAll('[data-category]').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelectorAll(`[data-category="${category}"]`).forEach(btn => {
                btn.classList.add('active');
            });

            displayProducts(category);
            
            // Actualizar texto
            document.querySelector('.products-count').textContent = 
                category === 'todos' 
                    ? '¡Más de 130 productos disponibles!' 
                    : `Mostrando productos de ${category}`;
        });
    });

    // Manejar búsqueda
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('input', async (e) => {
            const searchTerm = e.target.value.toLowerCase();
            if (searchTerm.length >= 3) {
                const allProducts = await loadAllProducts();
                const filteredProducts = allProducts.filter(product => 
                    product.name.toLowerCase().includes(searchTerm) ||
                    product.description?.toLowerCase().includes(searchTerm)
                );
                
                document.querySelector('.products-count').textContent = 
                    `${filteredProducts.length} productos encontrados`;
                
                const productGrid = document.getElementById('productGrid');
                if (productGrid) {
                    displayProducts('todos', filteredProducts);
                }
            } else if (searchTerm.length === 0) {
                document.querySelector('.products-count').textContent = 
                    '¡Más de 130 productos disponibles!';
                displayProducts('todos');
            }
        });
    }

    // Cargar productos inicialmente
    displayProducts('todos');
});