const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.color = '#000'; // Change link color on hover
  });

  link.addEventListener('mouseout', () => {
    link.style.color = '#fff'; // Change link color back to white
  });
});


// Smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const addToCartButtons = document.querySelectorAll(".product button");

function updateCartDisplay(productTitle) {
  alert(`"${productTitle}" has been added to your cart!`);
}

addToCartButtons.forEach(button => {
  button.addEventListener("click", function() {
    const productTitle = this.parentElement.querySelector("h3").textContent;
    let cart = JSON.parse(localStorage.getItem("cartItems")) || []; // Get existing cart or create empty array
    cart.push(productTitle);
    localStorage.setItem("cartItems", JSON.stringify(cart)); // Store cart in local storage
    updateCartDisplay(productTitle);
  });
});
