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

let article = $('.article');
let gallery = $('.gallery');
// let starterStatus = "USED";
// let galleryStatus = "UNUSED";
let used = true;

const changingToArticle = () => {

    used = true;
    if(used == true) {
        gallery.css('display', 'none');
        article.css('display', 'block');
    }

}

const changingToGallery = () => {

    used = false;
    if(used == false) {
        article.css('display', 'none');
        gallery.css('display', 'flex');
    }
}


let starterButton = document.querySelector('.starterButton');
starterButton.addEventListener("click",changingToArticle);
let galleryButton = document.querySelector('.galleryButton')
galleryButton.addEventListener("click",changingToGallery);


window.addEventListener("load",counting);