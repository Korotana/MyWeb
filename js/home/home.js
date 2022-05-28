{ /* <script> */ }
var slideIndex = 0;
var timer;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  if (slideIndex < 2 && n === -1) {
    slideIndex = 4;
  }  else {
    slideIndex += n - 1;}
    clearTimeout(timer);
    showSlides(slideIndex);
}

// Thumbnail image controls
function currentSlide(n) {
    slideIndex = n - 1;
    clearTimeout(timer);
    showSlides(slideIndex);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    timer = setTimeout(showSlides, 5000);
}

function clear(timer) {
    clearTimeout(timer);
}

