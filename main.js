
 var slideIndex = 0;
 var slides = document.querySelectorAll('.imgs li');
      
function showSlide() {
for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
     }
    slides[slideIndex].style.display = 'block';
    slideIndex++;
    if (slideIndex >= slides.length) {
    slideIndex = 0;
    }
    setTimeout(showSlide, 3000);
}
showSlide();


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

