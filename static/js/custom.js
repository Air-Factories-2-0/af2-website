var slideIndex = 0;

// Open the Modal
function openModal(id, slideId, demoId, n) {
  document.getElementById(id).style.display = "block";
  slideIndex=n
  showSlides(slideId, demoId, slideIndex);

}

// Close the Modal
function closeModal(id) {
  document.getElementById(id).style.display = "none";
  slideIndex = 0
}


// Next/previous controls
function plusSlides(slideId,demoId,n) {
  slideIndex += n
  showSlides(slideId,demoId,slideIndex);
}

// Thumbnail image controls
function currentSlide(slideId,demoId,n) {
  slideIndex = n
  showSlides(slideId,demoId,n);
}

function showSlides(slideId,demoId,n) {
  var i;
  var slides = document.getElementsByClassName(slideId);
  var dots = document.getElementsByClassName(demoId);
  var captionText = document.getElementById("caption"+slideId);

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
  captionText.innerHTML = dots[slideIndex-1].alt;
}
