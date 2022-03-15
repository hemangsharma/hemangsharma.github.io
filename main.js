const menuIcon = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");


menuIcon.addEventListener("click",() => {
	
	navbar.classList.toggle("change");

});


document.getElementById("year").innerHTML = new Date().getFullYear();
document.getElementById("age").innerHTML = new Date().getFullYear() - 2000;

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("logoimg");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}


var images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

//-- usage --//
preload(
    "http://testing.sharmahemang.com/logo.png",
    "http://testing.sharmahemang.com/hemang.jpg",
    "http://testing.sharmahemang.com/Wehear.png",
    "http://testing.sharmahemang.com/Verzeo.jpg",
    "http://testing.sharmahemang.com/bal.png",
    "http://testing.sharmahemang.com/do.svg",
    "http://testing.sharmahemang.com/CVC.png",
    "http://testing.sharmahemang.com/ucd.png",
    "http://testing.sharmahemang.com/srm.jpg",
    "http://testing.sharmahemang.com/mhac.png",
    "http://testing.sharmahemang.com/cert/HTML5.webp",
    "http://testing.sharmahemang.com/cert/PHP.png",
    "http://testing.sharmahemang.com/cert/BrandAmbassadorverzeo.webp",
    "http://testing.sharmahemang.com/cert/Strategic Thinking2.webp",
    "http://testing.sharmahemang.com/cert/SIH.webp",
    "http://testing.sharmahemang.com/cert/figma.png",
    "http://testing.sharmahemang.com/cert/dsa.png",
    "http://testing.sharmahemang.com/cert/PHP.png",
    "http://testing.sharmahemang.com/cert/PHP.png",
)