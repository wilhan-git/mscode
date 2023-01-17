let menuMobile = document.querySelector('.mobile-menu');
let menuicon = document.querySelector('.mobile-menu-icon');

function menuShow(){
    menuMobile.classList.add('open');
    menuicon.style.display = 'none';
    
   
}

function menuClose(){
    menuMobile.classList.remove('open');
    menuicon.style.display = '';
}
