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



var swiper1 = new Swiper(".mySwiper1", {
    spaceBetween: 30,
    effect: "fade",
    loop:true
    ,navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



  function confirmReservation() {
    const confirmationMessage = "예약 확인후 연락드리겠습니다";
    alert(confirmationMessage);
}



function openPopup() {
  var popup = document.getElementById('floating-popup');
  popup.style.display = 'block';
}


function closePopup() {
  var popup = document.getElementById('floating-popup');
  popup.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', openPopup);