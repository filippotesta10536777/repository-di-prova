jQuery('#mouse').hover(function() {

jQuery('.background').addClass('show');
})

.mouseleave(function() {
jQuery('.background').removeClass('show');
});

//foto 2
jQuery('#mouse2').hover(function() {

jQuery('.background2').addClass('show');
})

.mouseleave(function() {
jQuery('.background2').removeClass('show');
});

//foto 3
jQuery('#mouse3').hover(function() {

jQuery('.background3').addClass('show');
})

.mouseleave(function() {
jQuery('.background3').removeClass('show');
});

//foto 4
jQuery('#mouse4').hover(function() {

jQuery('.background4').addClass('show');
})

.mouseleave(function() {
jQuery('.background4').removeClass('show');
});



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}