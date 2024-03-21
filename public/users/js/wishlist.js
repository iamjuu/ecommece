const { response } = require("express");


async function togglewishlist(event) {
    event.preventDefault();
    const heart = event.currentTarget.querySelector('.fa-heart');
    const productId = event.currentTarget.getAttribute('data-product-id');
    const isredcolor = heart.classList.contains('redcolor');
    console.log(isredcolor);
   
    if (productId) {
        const response = await fetch("/addwishlisttogglePost/" + productId, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ isredcolor: isredcolor.toString() })
        });

        if (response.status === 200) {
           
            // Toggle the "redcolor" class based on the response
            heart.classList.toggle("redcolor", !isredcolor);
            if(heart.classList.contains('redcolor')){
                heart.classList.remove('fa-regular')
                heart.classList.add('fa-solid')
            } else {
                heart.classList.remove('fa-solid')
                heart.classList.add('fa-regular')
            }
        } else {
            console.log('error in toggle');
        }
    }
}




document.addEventListener('DOMContentLoaded', function () {
    const wishlist = document.querySelectorAll('.wishlist-btn');

    wishlist.forEach(button => {
        button.addEventListener('click', toggleWishlist);
    });

    function toggleWishlist(event) {
        const button = event.currentTarget;
        const productId = button.closest('.product').getAttribute('data-product-id');
        const action = button.getAttribute('data-action');

        if (productId && action) {
            // Send an AJAX request to your server to handle the wishlist toggle
            // Example: fetch(`/addwishlisttogglePost/${productId}?action=${action}`, { method: 'POST' })
            console.log(`Product ID: ${productId}, Action: ${action}`);
            
            // For the example, just remove the product from the UI
            button.closest('.product').remove();
        }
    }
    
});