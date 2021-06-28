let clock = document.querySelector('.clock');
let papiez = new Audio();
papiez.src = "assets/papiez.mp3";

function counting() {

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

window.addEventListener("load",counting);