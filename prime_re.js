var slideIndex = 0;
var slides = document.querySelectorAll('.imgs li');

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
    loop: true,
    navigation: {
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



  
     function initMap() {
        var container = document.getElementById('map');
        var options = {
            center: new kakao.maps.LatLng(36.63067935715188, 127.42763680580379), // 지도의 중심 좌표
            level: 3 // 지도의 확대 레벨
        };

        var map = new kakao.maps.Map(container, options);

        // 특정 위치의 좌표
        var markerPosition = new kakao.maps.LatLng(36.63067935715188,127.42763680580379);

        // 해당 위치에 마커 생성
        var marker = new kakao.maps.Marker({
            position: markerPosition,
            map: map
        });
    }

    // DOM이 로드된 후 initMap 함수 실행
    document.addEventListener('DOMContentLoaded', initMap);
