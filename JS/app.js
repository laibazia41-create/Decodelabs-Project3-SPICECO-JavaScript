const cartCountElement =document.querySelector('.js-cart-count');
const addToCartButtons=document.querySelectorAll('.js-add-to-cart');
const modal= document.getElementById('productModal');
const closeModalButton=document.getElementById('closeModal');
const filterButtons=document.querySelectorAll('.js-filter');
const products=document.querySelectorAll('.fp1');

let cartItemCount = 0;

function handleButtonClick(){
    cartItemCount = cartItemCount + 1;

    cartCountElement.textContent = cartItemCount;
    console.log("Cart updated! Current items:" + cartItemCount);

}

addToCartButtons.forEach(function(button) {
    button.addEventListener('click',handleButtonClick);
});

addToCartButtons.forEach(function(button) {
    button.addEventListener('click',function(event){
        event.preventDefault();
        modal.style.display ='flex';
        const card = button.closest('.fp1');
        const productTitle = card.querySelector('.ff').textContent;
        document.getElementsByClassName('modalTitle').textContent = productTitle;

});
});

closeModalButton.addEventListener('click', function() {
    modal.style.display = 'none'; 
});

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-filter');
        
        products.forEach(product => {
            const productCategory = product.getAttribute('data-category');
            
            if (category === 'all' || category === productCategory) {
                product.style.display = 'block'; 
            } else {
                product.style.display = 'none';  
            }
        });
    });
});