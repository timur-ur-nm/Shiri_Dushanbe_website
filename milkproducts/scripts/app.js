let offset = 0;
const sliderLine = document.querySelector('.slider-line');

const nextButton = document.getElementById('sliderNext');
const prevButton = document.getElementById('sliderPrev');

nextButton.addEventListener('click', function(){
    offset = offset + 220;
    if (offset > 660) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});


prevButton.addEventListener('click', function () {
    offset = offset - 220;
    if (offset < 0) {
        offset = 660;
    }
    sliderLine.style.left = -offset + 'px';
});
