document.addEventListener('DOMContentLoaded', () => {
    const categories = ['Electronics', 'Clothing', 'Accessories'];
    const products = [
        { id: 1, name: 'Laptop', price: 80000, category: 'Electronics' },
        { id: 2, name: 'Headphones', price: 5000, category: 'Electronics' },
        { id: 3, name: 'T-shirt', price: 500, category: 'Clothing' },
        { id: 4, name: 'Watch', price: 2000, category: 'Accessories' },
    ];

    if (document.getElementById('categories')) {
        const categoryContainer = document.getElementById('categories');
        categories.forEach(category => {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'category';
            categoryDiv.innerHTML = `<h2>${category}</h2>`;
            categoryDiv.addEventListener('click', () => {
                window.location.href = `category.html?category=${category}`;
            });
            categoryContainer.appendChild(categoryDiv);
        });
    }

    if (document.getElementById('product-list')) {
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category');
        const productList = document.getElementById('product-list');
        const filteredProducts = products.filter(product => product.category === category);

        filteredProducts.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <img src="placeholder.png" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
            `;
            productList.appendChild(productDiv);
        });

        const priceRange = document.getElementById('priceRange');
        const priceValue = document.getElementById('priceValue');
        priceRange.addEventListener('input', () => {
            priceValue.textContent = `₹${priceRange.value}`;
            const filteredProductsByPrice = filteredProducts.filter(product => product.price <= priceRange.value);
            productList.innerHTML = '';
            filteredProductsByPrice.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = 'product';
                productDiv.innerHTML = `
                    <img src="download.jpeg" alt="₹{Rog laptop}">
                    <h3>₹{Rog Gaming Laptop}</h3>
                    <p>₹{80000}
                    <img src="JBL-Headphones.webp" alt="₹{Headphones}">
                    <h3>₹{JBL Headphones}</h3>
                    <p>₹{5000}
                    <img src="philips Headset.jpeg" alt="₹{Headphones}">
                    <h3>₹{philips wireless Headphones}</h3>
                    <p>₹{5500}
                    <img src="Gaming Headphones.webp" alt="₹{Headphones}">
                    <h3>₹{Gaming Headphones}</h3>
                    <p>₹{10000}
                    <img src="shirt.jpeg" alt="₹{Formal-shirt}">
                    <h3>₹{Formal-shirt}</h3>
                    <p>₹{500}
                    <img src="blazer.jpeg" alt="₹{blazer}">
                    <h3>₹{blazer}</h3>
                    <p>₹{700}
                    <img src="Black Trousers.jpeg" alt="₹{Black Trousers}">
                    <h3>₹{Black Trouser}</h3>
                    <p>₹{850}
                    <img src="OIP.jpeg" alt="₹{Watch}">
                    <h3>₹{Watch}</h3>
                    <p>₹{2000}
                    <img src="casio.jpeg" alt="₹{watch}">
                    <h3>₹{watch}</h3>
                    <p>₹{3000}
                    <img src="pen.jpg" alt="₹{pen}">
                    <h3>₹{Fulgor Nocturnus pen}</h3>
                    <p>₹{200000}
                    </p>
                `;
                productList.appendChild(productDiv);
            });
        });
    }
});
