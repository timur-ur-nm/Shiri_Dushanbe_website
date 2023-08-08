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



let offset2 = 0;
const newsSliderLine = document.getElementById('newsSliderLine');

const newsSliderNext = document.getElementById('newsSliderNext');
const newsSliderPrev = document.getElementById('newsSliderPrev');

newsSliderNext.addEventListener('click', function(){
    offset2 = offset2 + 368;
    if (offset2 > 1104) {
        offset2 = 0;
    }
    newsSliderLine.style.left = -offset2 + 'px';
});


newsSliderPrev.addEventListener('click', function () {
    offset2 = offset2 - 368;
    if (offset2 < 0) {
        offset2 = 1104;
    }
    newsSliderLine.style.left = -offset2 + 'px';
});



