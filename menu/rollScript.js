let rickRoll = new Audio();
rickRoll.src = "assets/rr.mp3";

const rolling = () => {
    $('#roll').html('<img src="assets/rr.gif">');
    rickRoll.play();
}

// dziala jak w c++ 
function sleep(miliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < miliseconds)
}

let status = "started";

let seconds = 5;
const display = () => {
    if(status == "started") {
        document.getElementById("roll").innerHTML = seconds;
        seconds--;
        if(seconds < 0) {
            status = "stopped"
            setTimeout(function() { rolling() },1000);
        }
    }
    else {
        return;
    }
}

window.setInterval(display,1000);
window.addEventListener("load",display);