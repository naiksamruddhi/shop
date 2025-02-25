// Add to Cart Animation
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.add('added');
        setTimeout(() => {
            this.classList.remove('added');
        }, 2000);
    });
});

// Cart Counter Animation
let cartCount = 0;
const cartCounter = document.createElement('div');
cartCounter.className = 'cart-counter';
document.body.appendChild(cartCounter);

function updateCartCounter() {
    cartCounter.textContent = cartCount;
    cartCounter.classList.add('show');
    setTimeout(() => {
        cartCounter.classList.remove('show');
    }, 500);
}

// Buying Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Payment Method Selection
    document.querySelectorAll('.payment-card').forEach(card => {
        card.addEventListener('click', function() {
            document.querySelectorAll('.payment-card').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Checkout Form Validation
    const checkoutForm = document.getElementById('checkoutForm');
    if(checkoutForm) {
        checkoutForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add actual validation logic here
            alert('Order placed successfully!');
        });
    }

    // Seller Form Handling
    const sellerForm = document.getElementById('sellerForm');
    if(sellerForm) {
        sellerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add image upload handling here
            alert('Product listed successfully!');
            this.reset();
        });
    }

    // Image Upload Preview
    document.querySelectorAll('.image-upload input').forEach(input => {
        input.addEventListener('change', function() {
            const files = this.files;
            // Add code to preview uploaded images
        });
    });
});

// Contact Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // File Upload Display
    const fileInput = document.getElementById('attachment');
    const fileName = document.querySelector('.file-name');
    
    if(fileInput) {
        fileInput.addEventListener('change', function() {
            fileName.textContent = this.files[0] ? this.files[0].name : 'No file selected';
        });
    }

    // Form Validation
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate email format
            const email = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!emailRegex.test(email.value)) {
                alert('Please enter a valid email address');
                return;
            }

            // Check required fields
            const requiredFields = this.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if(!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = 'var(--accent-color)';
                }
            });

            if(isValid) {
                // Add actual form submission code here
                alert('Message sent successfully!');
                this.reset();
                fileName.textContent = 'No file selected';
            } else {
                alert('Please fill all required fields');
            }
        });
    }

    // FAQ Accordion
    document.querySelectorAll('.faq-item h3').forEach(item => {
        item.addEventListener('click', function() {
            this.parentElement.classList.toggle('active');
        });
    });

    // Reset input borders on focus
    document.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('input', function() {
            this.style.borderColor = '#eee';
        });
    });
});