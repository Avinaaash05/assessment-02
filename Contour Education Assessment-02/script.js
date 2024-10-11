const sideMenu= document.querySelector('#sideMenu');
const navbar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)';

}
function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)';

}

// ---typing animation----
var typed = new Typed("#locations",{
    strings:["","Glen Waverley","Melbourne","Box Hill","Springvale"],
    typeSpeed:100,
    BackSpeed:10,
    loop:true,
    showCursor: false
})