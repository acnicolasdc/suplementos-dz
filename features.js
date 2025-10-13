// Cart functionality
let cart = [];

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
        updateCartTotal();
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateCartTotal();
}

// Update cart count
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Format price
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Update cart total
function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('cartTotal').textContent = `$${formatPrice(total)}`;
}

// Show product details
async function showProductDetails(productId) {
    const allProducts = await loadAllProducts();
    const product = allProducts.find(p => p.id === productId);
    
    if (product) {
        // Update modal content
        document.getElementById('modalImage').src = product.image;
        document.getElementById('modalImage').alt = product.name;
        document.getElementById('modalTitle').textContent = product.name;
        document.getElementById('modalPrice').textContent = `$${formatPrice(product.price)}`;
        document.getElementById('modalDescription').textContent = product.description || '';
        
        // Update benefits
        const benefitsList = document.getElementById('modalBenefits');
        benefitsList.innerHTML = product.benefits.map(benefit => 
            `<li><i class="fas fa-check"></i>${benefit}</li>`
        ).join('');
        
        // Update nutrition info if available
        const nutritionInfo = document.getElementById('modalNutrition');
        const nutritionSection = nutritionInfo.closest('.nutrition-section');
        if (product.nutrition) {
            nutritionInfo.innerHTML = Object.entries(product.nutrition).map(([key, value]) => 
                `<div>
                    <span>${key}</span>
                    <span>${value}</span>
                </div>`
            ).join('');
            nutritionSection.style.display = 'block';
        } else {
            nutritionSection.style.display = 'none';
        }
        
        // Update dosage if available
        const dosageText = document.getElementById('modalDosage');
        const dosageSection = dosageText.closest('.dosage-section');
        if (product.dosage) {
            dosageText.textContent = product.dosage;
            dosageSection.style.display = 'block';
        } else {
            dosageSection.style.display = 'none';
        }
        
        // Setup add to cart button
        const addToCartBtn = document.getElementById('modalAddToCart');
        addToCartBtn.onclick = () => {
            addToCart(productId);
            document.getElementById('productModal').classList.remove('active');
            document.body.style.overflow = '';
        };
        
        // Show modal
        const modal = document.getElementById('productModal');
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Add to cart
async function addToCart(productId) {
    try {
        const allProducts = await loadAllProducts();
        const product = allProducts.find(p => p.id === productId);
        
        if (product) {
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: 1
                });
            }
            
            saveCart();
            renderCart();
            
            // Show cart after adding item
            const cartSidebar = document.getElementById('cartSidebar');
            const overlay = document.querySelector('.cart-overlay');
            if (cartSidebar && overlay) {
                cartSidebar.classList.add('active');
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        }
    } catch (error) {
        console.error('Error al agregar al carrito:', error);
    }
}

// Update item quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            renderCart();
        }
    }
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCart();
}

// Clear cart
function clearCart() {
    cart = [];
    saveCart();
    renderCart();
}

// Render cart items
function renderCart() {
    const cartItems = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Tu carrito está vacío</p>';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item" data-id="${item.id}">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${formatPrice(item.price)}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn minus" onclick="updateQuantity('${item.id}', -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn plus" onclick="updateQuantity('${item.id}', 1)">+</button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `).join('');
}

// Send order to WhatsApp
function sendWhatsAppOrder() {
    if (cart.length === 0) {
        alert('El carrito está vacío');
        return;
    }

    const phoneNumber = '312816901541';
    let message = '¡Hola! Me gustaría hacer el siguiente pedido:\n\n';
    
    cart.forEach(item => {
        message += `▪ ${item.quantity}x ${item.name} - $${formatPrice(item.price * item.quantity)}\n`;
    });
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `\nTotal: $${formatPrice(total)}`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Load all products
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

// Display products
async function displayProducts(category = 'todos') {
    const productGrid = document.getElementById('productGrid');
    if (!productGrid) return;

    const allProducts = await loadAllProducts();
    const filteredProducts = category === 'todos' 
        ? allProducts 
        : allProducts.filter(product => product.category === category);

    productGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-product-id="${product.id}" data-category="${product.category}">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <h3>${product.name}</h3>
            <div class="price">$${formatPrice(product.price)}</div>
            <button class="add-to-cart" data-product-id="${product.id}">
                AÑADIR A LA CESTA
            </button>
        </div>
    `).join('');

    // Agregar event listener para abrir el modal al hacer clic en la tarjeta
    productGrid.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', async (e) => {
            if (!e.target.classList.contains('add-to-cart')) {
                const productId = card.dataset.productId;
                await showProductDetails(productId);
            }
        });
    });

    // Agregar event listeners a los botones después de crear los elementos
    productGrid.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', async (e) => {
            const productId = e.target.dataset.productId;
            await addToCart(productId);
        });
    });
}

// Función de búsqueda de productos
async function searchProducts(searchTerm) {
    const allProducts = await loadAllProducts();
    searchTerm = searchTerm.toLowerCase().trim();
    
    if (searchTerm === '') {
        return allProducts;
    }

    return allProducts.filter(product => {
        const productName = product.name.toLowerCase();
        return productName.includes(searchTerm);
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Configurar búsqueda
    const searchInput = document.querySelector('.search-bar input');
    let searchTimeout;

    if (searchInput) {
        searchInput.addEventListener('input', async (e) => {
            const searchTerm = e.target.value;
            
            // Limpiar el timeout anterior
            clearTimeout(searchTimeout);
            
            // Esperar a que el usuario termine de escribir
            searchTimeout = setTimeout(async () => {
                if (searchTerm.length >= 2) {
                    const searchResults = await searchProducts(searchTerm);
                    
                    document.querySelector('.products-count').textContent = 
                        `${searchResults.length} productos encontrados`;
                    
                    const productGrid = document.getElementById('productGrid');
                    if (productGrid) {
                        productGrid.innerHTML = searchResults.map(product => `
                            <div class="product-card" data-product-id="${product.id}" data-category="${product.category}">
                                <img src="${product.image}" alt="${product.name}" loading="lazy">
                                <h3>${product.name}</h3>
                                <div class="price">$${formatPrice(product.price)}</div>
                                <button class="add-to-cart" data-product-id="${product.id}">
                                    AÑADIR A LA CESTA
                                </button>
                            </div>
                        `).join('');

                        // Agregar event listeners a las tarjetas
                        productGrid.querySelectorAll('.product-card').forEach(card => {
                            card.addEventListener('click', async (e) => {
                                if (!e.target.classList.contains('add-to-cart')) {
                                    const productId = card.dataset.productId;
                                    await showProductDetails(productId);
                                }
                            });
                        });

                        // Agregar event listeners a los botones
                        productGrid.querySelectorAll('.add-to-cart').forEach(button => {
                            button.addEventListener('click', async (e) => {
                                const productId = e.target.dataset.productId;
                                await addToCart(productId);
                            });
                        });
                    }
                } else if (searchTerm.length === 0) {
                    document.querySelector('.products-count').textContent = 
                        '¡Más de 130 productos disponibles!';
                    displayProducts('todos');
                }
            }, 300); // Esperar 300ms después de que el usuario deje de escribir
        });
    }
    // Cart functionality
    const cartButton = document.getElementById('cartButton');
    const cartSidebar = document.getElementById('cartSidebar');
    const closeCart = document.querySelector('.close-cart');
    const clearCartButton = document.getElementById('clearCart');
    const whatsappOrderButton = document.getElementById('whatsappOrder');
    const overlay = document.querySelector('.cart-overlay');

    if (cartButton && cartSidebar && closeCart && overlay) {
        cartButton.addEventListener('click', (e) => {
            e.preventDefault();
            cartSidebar.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        function closeCartSidebar() {
            cartSidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }

        closeCart.addEventListener('click', closeCartSidebar);
        overlay.addEventListener('click', closeCartSidebar);
    }

    if (clearCartButton) {
        clearCartButton.addEventListener('click', () => {
            if (confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
                clearCart();
            }
        });
    }

    if (whatsappOrderButton) {
        whatsappOrderButton.addEventListener('click', sendWhatsAppOrder);
    }

    // Setup modal functionality
    const modal = document.getElementById('productModal');
    const closeModal = document.querySelector('.close-modal');

    if (closeModal && modal) {
        closeModal.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });

        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Category filters
    const categoryLinks = document.querySelectorAll('[data-category]');
    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.dataset.category;
            
            document.querySelectorAll('[data-category]').forEach(btn => {
                btn.classList.remove('active');
            });
            link.classList.add('active');

            displayProducts(category);
            
            document.querySelector('.products-count').textContent = 
                category === 'todos' 
                    ? '¡Más de 130 productos disponibles!' 
                    : `Mostrando productos de ${category}`;
        });
    });

    // Load cart and display products
    loadCart();
    renderCart();
    displayProducts('todos');
});