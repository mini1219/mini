var images = document.querySelectorAll('.slide li');
var index = 0;

setInterval(function () {
    images[index].querySelector('input[type="radio"]').checked = false;
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].querySelector('input[type="radio"]').checked = true;
    images[index].classList.add('active');
}, 2000);

var accordions = document.querySelectorAll('.things,.accordion');

accordions.forEach(function (accordion) {
    accordion.addEventListener('click', function () {
        accordion.classList.toggle('active');
    });
});
  