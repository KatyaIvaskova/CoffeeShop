let nav = document.querySelector('.nav');

document.querySelector('#menu-btn').onclick = () =>{
    nav.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    nav.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    nav.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    nav.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
} 

//Read more
onload = function ()
{
let btn = document.querySelectorAll ('input[type="button"][value="Read more"]');
for (let i = 0; i < btn.length; i++) btn [i].onclick = function()
   {
   let more = this.parentNode.querySelector ('#more');
   if (this.value == 'Read more') more.style.display = 'inline', this.value = 'Read less';
   else more.style.display = 'none', this.value = 'Read more';
   }
   
}


    

