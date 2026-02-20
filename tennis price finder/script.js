// Sample discounted products data
// Sample discounted products data
const products = [
    {
        name: "Pro Staff 97 Classic",
        brand: "wilson",
        category: "racket",
        originalPrice: 249.99,
        discountPrice: 199.99,
        discount: 20,
        url: "https://www.wilson.com/en-us/product/pro-staff-97-classic-wr20130",
        image: "https://www.midwestracquetsports.com/images/xxl/WR201311U.jpg"
    },
    {
        name: "Pure Drive",
        brand: "babolat",
        category: "racket",
        originalPrice: 229.99,
        discountPrice: 179.99,
        discount: 22,
        url: "https://www.babolat.com/us/tennis/collections/pure-drive.html?srsltid=AfmBOoqFCRnYPL7oM-tvwdqZEP0dLrr9rGY2hUsjIDySjNHUBIx0AzSj",
        image: "https://cdn.shoplightspeed.com/shops/627677/files/52868994/babolat-babolat-pure-drive-98.jpg"
    },
    {
        name: "Extreme Pro",
        brand: "head",
        category: "racket",
        originalPrice: 299.99,
        discountPrice: 269.99,
        discount: 21,
        url: "https://www.tennis-warehouse.com/learning_center/racquet_reviews/HREP24review.html?srsltid=AfmBOoo89qp7",
        image: "https://www.mistertennis.com/images/2022-media-6/head-extreme-pro-2022-racchetta-da-tennis-235302_C.jpg"
    },
    {
        name: "Men's GP Challenge",
        brand: "nike",
        category: "shoes",
        originalPrice: 124.99,
        discountPrice: 119.99,
        discount: 29,
        url: "https://www.dickssportinggoods.com/p/nike-mens-gp-challenge-pro-hard-court-tennis-shoes-24nikmgpchllngprhsoma/24nikmgpchllngprhsoma?color=Orang",
        image: "https://allabouttennis.com/cdn/shop/files/FQ7728-001F24-2_1200x1200.jpg?v=1724184101"
    },
    {
        name: "Adizero Ubersonic 4",
        brand: "adidas",
        category: "shoes",
        originalPrice: 149.99,
        discountPrice: 109.99,
        discount: 27,
        url: "https://www.adidas.com/us/adizero-ubersonic-4-tennis-shoes",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop"
    },
    {
        name: "Jet All Court",
        brand: "babolat",
        category: "shoes",
        originalPrice: 129.99,
        discountPrice: 94.99,
        discount: 27,
        url: "https://www.babolat.com/en/shoes/jet-all-court",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop"
    },
    {
        name: "Super Tour Pro Backpack",
        brand: "wilson",
        category: "bag",
        originalPrice: 89.99,
        discountPrice: 69.99,
        discount: 22,
        url: "https://www.wilson.com/en-us/product/super-tour-pro-backpack",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop"
    },
    {
        name: "Pure Strike 12 Pack",
        brand: "babolat",
        category: "bag",
        originalPrice: 119.99,
        discountPrice: 89.99,
        discount: 25,
        url: "https://www.babolat.com/en/bags/pure-strike-12-pack",
        image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=400&h=400&fit=crop"
    },
    {
        name: "Tour Team Backpack",
        brand: "head",
        category: "bag",
        originalPrice: 79.99,
        discountPrice: 59.99,
        discount: 25,
        url: "https://www.head.com/en-US/tennis/bags/tour-team-backpack.html",
        image: "https://images.unsplash.com/photo-1577733966973-d680bffd2e80?w=400&h=400&fit=crop"
    },
    {
        name: "Court Tennis Backpack",
        brand: "nike",
        category: "bag",
        originalPrice: 74.99,
        discountPrice: 54.99,
        discount: 27,
        url: "https://www.nike.com/t/court-tennis-backpack",
        image: "https://images.unsplash.com/photo-1585916420730-d7f95e942d43?w=400&h=400&fit=crop"
    },
    {
        name: "Vapor Court Shoes",
        brand: "nike",
        category: "shoes",
        originalPrice: 119.99,
        discountPrice: 84.99,
        discount: 29,
        url: "https://www.nike.com/t/vapor-court-tennis-shoes",
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop"
    },
    {
        name: "Barricade 13",
        brand: "adidas",
        category: "shoes",
        originalPrice: 159.99,
        discountPrice: 119.99,
        discount: 25,
        url: "https://www.adidas.com/us/barricade-13-tennis-shoes",
        image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400&h=400&fit=crop"
    }
];

let currentBrand = 'all';

// Display products
function displayProducts(brand = 'all') {
    const grid = document.getElementById('products-grid');
    const filtered = brand === 'all' ? products : products.filter(p => p.brand === brand);
    
    grid.innerHTML = filtered.map(product => `
        <div class="product-card" onclick="window.open('${product.url}', '_blank')">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: contain;">
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-brand">${product.brand.toUpperCase()}</div>
                <div class="price-container">
                    <span class="original-price">$${product.originalPrice}</span>
                    <span class="discount-price">$${product.discountPrice}</span>
                    <span class="discount-badge">${product.discount}% OFF</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Brand filter buttons
document.querySelectorAll('.brand-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.brand-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentBrand = this.dataset.brand;
        displayProducts(currentBrand);
    });
});

// Find pro shops near user
document.getElementById('find-shops-btn').addEventListener('click', function() {
    const btn = this;
    const shopsList = document.getElementById('shops-list');
    
    if (!navigator.geolocation) {
        shopsList.innerHTML = '<div class="status">Geolocation is not supported by your browser</div>';
        return;
    }

    btn.disabled = true;
    btn.textContent = '📍 Getting your location...';
    shopsList.innerHTML = '<div class="status">Locating you...</div>';

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            
            shopsList.innerHTML = '<div class="status">Searching for tennis pro shops nearby...</div>';

            // Use Google Places API to find tennis shops
            const service = new google.maps.places.PlacesService(document.createElement('div'));
            const request = {
                location: new google.maps.LatLng(lat, lng),
                radius: 10000, // 10km radius
                keyword: 'tennis pro shop',
                type: 'store'
            };

            service.nearbySearch(request, (results, status) => {
                btn.disabled = false;
                btn.textContent = '📍 Find Shops Near Me';

                if (status === google.maps.places.PlacesServiceStatus.OK && results.length > 0) {
                    shopsList.innerHTML = results.slice(0, 10).map((shop, index) => {
                        const distance = calculateDistance(lat, lng, shop.geometry.location.lat(), shop.geometry.location.lng());
                        return `
                            <div class="shop-card">
                                <div class="shop-name">${index + 1}. ${shop.name}</div>
                                <div class="shop-address">${shop.vicinity}</div>
                                <div class="shop-distance">📍 ${distance.toFixed(1)} miles away</div>
                                ${shop.rating ? `<div class="shop-distance">⭐ ${shop.rating}/5</div>` : ''}
                            </div>
                        `;
                    }).join('');
                } else {
                    shopsList.innerHTML = '<div class="status">No tennis pro shops found nearby. Try expanding your search radius or check a different location.</div>';
                }
            });
        },
        (error) => {
            btn.disabled = false;
            btn.textContent = '📍 Find Shops Near Me';
            let errorMsg = 'Unable to get your location. ';
            
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    errorMsg += 'Please allow location access to find shops near you.';
                    break;
                case error.POSITION_UNAVAILABLE:
                    errorMsg += 'Location information is unavailable.';
                    break;
                case error.TIMEOUT:
                    errorMsg += 'Location request timed out.';
                    break;
                default:
                    errorMsg += 'An unknown error occurred.';
            }
            
            shopsList.innerHTML = `<div class="status">${errorMsg}</div>`;
        }
    );
});

// Calculate distance between two coordinates (Haversine formula)
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 3959; // Earth's radius in miles
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
             Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
             Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

// Initial display
displayProducts();