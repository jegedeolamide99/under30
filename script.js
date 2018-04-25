var accordion = document.getElementsByClassName("accordion__toggle");
var i;
for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener("click",function() {
    this.classList.toggle("active");
    var accordionPanel = this.nextElementSibling;
    if (accordionPanel.style.maxHeight) {
      accordionPanel.style.maxHeight = null;
    } else {
      accordionPanel.style.maxHeight = accordionPanel.scrollHeight + "px";
    }
  });
}
function classToggle() {
  const navs = document.querySelectorAll('.nav__links')

  navs.forEach(nav => nav.classList.toggle('nav__toggleShow'));
}
document.querySelector('.nav__toggler')
  .addEventListener('click', classToggle);
// SLIDESHOW
var slideIndex = 0;
showSlides();
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 7000); // Change image every 2 seconds
}

