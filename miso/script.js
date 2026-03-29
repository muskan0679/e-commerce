setTimeout(function() {
    document.getElementById("splash").style.display = "none";
    document.getElementById("main-content").style.display = "block";
}, 5000); // 5 seconds


let cart = [];

function addToCart(name, price) {
    console.log("Clicked", name, price);  // 👈 add this
    cart.push({ name, price });
    displayCart();
}

function displayCart() {
    let cartDiv = document.getElementById("cart-items");
    let totalDiv = document.getElementById("total");

    cartDiv.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        cartDiv.innerHTML += `
            <p>
                ${item.name} - $${item.price}
                <button onclick="removeItem(${index})">Remove</button>
            </p>
        `;
    });

    totalDiv.innerText = "Total: $" + total;
}

function removeItem(index) {
    cart.splice(index, 1);
    displayCart();
}

function placeOrder() {
    if (cart.length === 0) {
        alert("Cart is empty!");
        return;
    }
    document.getElementById("order-form").style.display = "block";
}

function submitOrder() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let pincode = document.getElementById("pincode").value;

    if (name === "" || phone === "" || address === "" || pincode === "") {
        alert("Please fill all details!");
        return;
    }

    document.getElementById("message").innerText =
        "🎉 Order Successful! Thank you " + name;

    cart = [];
    displayCart();

    document.getElementById("order-form").style.display = "none";
}
