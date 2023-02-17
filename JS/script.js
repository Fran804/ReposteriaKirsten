const bgResponsive = document.getElementById('ul-bg');
const barsClick = document.getElementById('menu-click');
const buttonBars = document.getElementById('button-bars');
const homeClick = document.getElementById('home-clicks');
const menuClick = document.getElementById('menu-clicks');
const aboutClick = document.getElementById('about-clicks');
const contactClick = document.getElementById('contact-clicks');

var ispressed = false;

barsClick.addEventListener("click", function(env) {
    if(ispressed === false) {
        buttonBars.className = "fas fa-times";
        bgResponsive.style.left = '0%';
        ispressed = true;
        return;
    }

    buttonBars.className = "fas fa-bars";
	bgResponsive.style.left = '-100%';
    ispressed = false
    
});

homeClick.addEventListener("click", function(evento){
    buttonBars.className = "fas fa-bars";
	bgResponsive.style.left = '-100%';
    ispressed = false
});

menuClick.addEventListener("click", function(evento){
    buttonBars.className = "fas fa-bars";
	bgResponsive.style.left = '-100%';
    ispressed = false
});

aboutClick.addEventListener("click", function(evento){
    buttonBars.className = "fas fa-bars";
	bgResponsive.style.left = '-100%';
    ispressed = false
});

contactClick.addEventListener("click", function(evento){
    buttonBars.className = "fas fa-bars";
	bgResponsive.style.left = '-100%';
    ispressed = false
});