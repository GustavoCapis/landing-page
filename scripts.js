const menuButton = document.querySelector("#menu-toggle");
const sidebar = document.querySelector("#sidebar");
const menu = document.querySelector("#menu");



// show/hide menu on click
menuButton.onclick = function(){
    sidebar.classList.toggle("open");
    console.log("clicou")
};


