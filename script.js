// 🛒 Cart data
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// 🔢 Cart count update
function updateCount() {
    let count = document.getElementById("count");
    if (count) {
        count.innerText = cart.length;
    }
}
updateCount();

// 🔄 Go to cart page
function goToCart() {
    window.location.href = "cart.html";
}

// 🛍️ Create 20 products dynamically
let container = document.getElementById("products");

if (container) {
    for (let i = 1; i <= 20; i++) {
        container.innerHTML += `
        <div class="card">
            <img src="images/${i}.jpeg">
            <h3>Product ${i}</h3>
            <p>₹${i * 100}</p>
            <button onclick="addToCart('Product ${i}', ${i * 100})">
                Add to Cart
            </button>
        </div>
        `;
    }
}

// ➕ Add to cart
function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));

    updateCount();

    // 🔔 Popup show
    let popup = document.getElementById("popup");
    if (popup) {
        popup.style.display = "block";

        setTimeout(() => {
            popup.style.display = "none";
        }, 2000);
    }
}

// 🛒 Show cart items
let cartDiv = document.getElementById("cartItems");

if (cartDiv) {
    cartDiv.innerHTML = "";
    cart.forEach(item => {
        cartDiv.innerHTML += `
            <p>${item.name} - ₹${item.price}</p>
        `;
    });
}

// 📦 Order page
let orderDiv = document.getElementById("orderItems");

if (orderDiv) {
    let total = 0;
    orderDiv.innerHTML = "";

    cart.forEach(item => {
        orderDiv.innerHTML += `
            <p>${item.name} - ₹${item.price}</p>
        `;
        total += item.price;
    });

    let totalText = document.getElementById("total");
    if (totalText) {
        totalText.innerText = "Total ₹" + total;
    }
}

// ✅ Place order
function placeOrder() {
    alert("Order Placed Successfully 🎉");

    localStorage.removeItem("cart");

    window.location.href = "index.html";
}