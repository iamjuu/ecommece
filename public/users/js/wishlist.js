const { response } = require("express");

async function togglewishlist(event){
    event.preventDefault()
    const heart=event.currentTarget.querySelector('.fa-heart')
    console.log('heart:',heart);
    console.log('curreeeent',event.currentTarget);
    const productId = event.currentTarget.getAttribute('data-product-id')
    console.log('productId:',productId);
    const isredcolor=heart.classList.contains('redcolor')
    
    if(!isredcolor){
        //add to wishlist

    }

    console.log('isredcolor:',isredcolor);

    if(productId){

        const response=await fetch("/addwishlisttogglePost/" + productId ,{
            method :'POST',
             headers: { 
                'Content-Type':'application/json'
        },

        body:JSON.stringify( {isredcolor:isredcolor.toString()})
    })
    console.log(response);

        if(response.status===200){

            isredcolor

        }else{
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