// Eanbling Navbar Toggle to open and close 

const overlay = document.querySelector(".overlay");
const navOpenBtn = document.querySelector(".nav-open-btn");
const navbar = document.querySelector(".navbar");
const navCloseBtn = document.querySelector(".nav-close-btn");


const navElems = [overlay, navOpenBtn, navCloseBtn];

for(i=0; i < navElems.length; i++){
    navElems[i].addEventListener("click", function(){
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");

    })
}

    
// disabling navbar sliding styles and overlay by clicking navbarLinks 

const navbarLink1 = document.querySelector(".nav-link1");
const navbarLink2 = document.querySelector(".nav-link2");
const navbarLink3 = document.querySelector(".nav-link3");
const navbarLink4 = document.querySelector(".nav-link4");
const navbarLink5 = document.querySelector(".nav-link5");
const navbarLink6 = document.querySelector(".nav-link6");

const navbarLinks = [navbar, navbarLink1, navbarLink2, navbarLink3, navbarLink4, navbarLink5, navbarLink6];

for(let i=0; i<navbarLinks.length; i++){
       navbarLinks[i].addEventListener("click", function(){
        navbarLinks[i].classList.remove("active");
        overlay.classList.remove("active");
        
        })
}




//enabling navbar and go-top-btn when its >= 80 window height

const header = document.querySelector(".header");
const goTopBtn = document.querySelector(".go-top-btn");

window.addEventListener("scroll", function(){
    if(window.scrollY >= 80){
        header.classList.add("active");
        goTopBtn.classList.add("active");
    } else{
        header.classList.remove("active");
        goTopBtn.classList.remove("active");
    }
})







