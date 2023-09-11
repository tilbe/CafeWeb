let menu=document.querySelector('#menu-btn');
let navbar=document.querySelector('.header .flex .navbar');
let flex=document.querySelector(' .flex ');
let header=document.querySelector(' .header');

menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active')
    flex.classList.toggle('active')
   header.classList.toggle('active')
}