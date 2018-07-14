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


//foto 5
jQuery('#mouse5').hover(function() {

jQuery('.background5').addClass('show');
})

.mouseleave(function() {
jQuery('.background5').removeClass('show');
});


//foto 6
jQuery('#mouse6').hover(function() {

jQuery('.background6').addClass('show');
})

.mouseleave(function() {
jQuery('.background6').removeClass('show');
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