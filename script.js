let clock = document.querySelector('.clock');
let papiez = new Audio();
papiez.src = "assets/papiez.mp3";

counting = () => {

    let date = new Date();

    let hour = date.getHours(); if(hour<10) hour = "0" + hour;
    let minute = date.getMinutes(); if(minute<10) minute = "0" + minute;
    let second = date.getSeconds(); if(second<10) second = "0" + second;

    // Strong IF //
    if(hour == 21 && minute == 37) {
        papiez.play();
    }

    clock.innerHTML = hour + ":" + minute + ":" + second;

    setInterval(counting,1000);

}

// CONTENT //
let starter = $('.article');
let gallery = $('.gallery');
let source = $('.source');
source.css('display', 'none');
let news = $('.news');
let gallery1 = $('.gallery1');
let gallery2 = $('.gallery2');

// BUTTONS //
let sButtons = $('.starterOption');
let gButtons = $('.galleryOption');

const changingToStarter = () => {

    gallery.css('display', 'none');
    starter.css('display', 'block');
    source.css('display', 'none');
    sButtons.css('display', 'grid');
    gButtons.css('display', 'none');

}

const changingToArticle = () => {

    news.css('display','none');
    starter.css('display','block');

}

const changingToNews = () => {

    news.css('display', 'block');
    starter.css('display','none');

}


const changingToGallery = () => {

    gallery.css('display', 'flex');
    starter.css('display', 'none');
    news.css('display', 'none');
    source.css('display', 'block');
    sButtons.css('display', 'none');
    gButtons.css('display', 'grid');

}

const changingToGallery1 = () => {

    gallery1.css('display','flex');
    gallery2.css('display','none');    

}

const changingToGallery2 = () => {

    gallery1.css('display','none');
    gallery2.css('display','flex');   

}

// STARTER / GALLERY
let starterButton = document.querySelector('.starterButton');
starterButton.addEventListener("click",changingToStarter);
let galleryButton = document.querySelector('.galleryButton')
galleryButton.addEventListener("click",changingToGallery);

// INNER STARTER => ARTICLE / NEWS
let articleButton = document.querySelector('.articleButton');
articleButton.addEventListener("click", changingToArticle);
let newsButton = document.querySelector('.newsButton');
newsButton.addEventListener("click", changingToNews);

// INNER GALLERY => OTHER GALLERIES
let beerButton = document.querySelector('.beerButton');
beerButton.addEventListener("click", changingToGallery1);
let helltakerButton = document.querySelector('.helltakerButton');
helltakerButton.addEventListener("click", changingToGallery2);

window.addEventListener("load",counting);