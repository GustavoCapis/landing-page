const menuButton = document.querySelector("#menu-toggle");
const sidebar = document.querySelector("#sidebar");
const menu = document.querySelector("#menu");
const navLinks = document.querySelector("#nav-links");



// show/hide menu on click
menuButton.onclick = function(){
    sidebar.classList.toggle("open");
    navLinks.classList.toggle("show");
    console.log("clicou");
};


