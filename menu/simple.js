let character = document.getElementById('character');
let obstacle = document.getElementById('obstacle');
let counter = document.getElementById('counter');

let characterPosition = document.getElementById('charPosition');
let obstaclePosition = document.getElementById('obstPosition');
let points = 0;
let status = true;

let song = new Audio();
song.src = "assets/tibia_song.mp3";

// Random obstacle
let obstacles = new Array(3);
obstacles[0] = '<img src="assets/dragon.gif">'
obstacles[1] = '<img src="assets/vandura.gif">'
obstacles[2] = '<img src="assets/Minotaur.gif">'


/////// PRZYŚPIESZANIE //////// WYBÓR POSTACI ////// MUZYKA PRZY DEADZIE
let startStatus = false;
let onKeyPressStart = function (event) {
    if(startStatus == false) {
        let keyCode = event.keyCode;
        if(keyCode==119) {
            startStatus = true;
            game();
            song.play();
        }
    }
    else {
        return;
    }
};
document.addEventListener('keypress', onKeyPressStart);

let onKeyPressRestart = function (event) {
    let keyCode = event.keyCode;
    if(keyCode==114) {
        location.reload();r
    }
};
document.addEventListener('keypress', onKeyPressRestart);

function game() {

    // Started settings
    obstacle.classList.add("obstacleAnimation");
    character.style.opacity = 1.0;
    obstacle.style.opacity = 1.0;
    counter.style.opacity = 1.0;

    setInterval(function() {
        let num = Math.floor(Math.random()*3);
        obstacle.innerHTML = obstacles[num];
    }, 1500);

        function jump() {
            if(status == true) {
                if(character.classList != "jumpAnimation"){
                    character.classList.add("jumpAnimation");
                }
                setTimeout(function(){
                    character.classList.remove("jumpAnimation");
                }, 700);
            }
            else {
                return;
            }
        }

        let onKeyPress = function (event) {
            let keyCode = event.keyCode;
            if(keyCode==119) {
                jump();
            }
        };
        
        document.addEventListener('keypress', onKeyPress)
        


        // let characterRight = window.getComputedStyle(character).getPropertyValue("right");
        // let characterLeft = window.getComputedStyle(character).getPropertyValue("left");
        function checkDead() {
            let obstLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
            let charTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
            if(status == true) {
                if(obstLeft>228 && obstLeft<308 && charTop>=250) {

                    obstacle.style.animation = "none";
                    obstacle.style.display = "none";

                    character.innerHTML = '<img src="assets/DeadBody.png">'

                    counter.innerHTML = "Congratulations! <br> You got " + points + " points"
                    counter.style.textAlign = "center";
                    counter.classList.add("endCounter");

                    status = false;

                }
                else {
                    counter.innerHTML = "Points: " + points++;
                }
            }
            else {
                return;
            }
        }

    //     function positionDisplay() {
    //         let characterRight = window.getComputedStyle(character).getPropertyValue("right");
    //         let characterLeft = window.getComputedStyle(character).getPropertyValue("left");
    //         let characterTop = window.getComputedStyle(character).getPropertyValue("top");
    //         let characterBottom = window.getComputedStyle(character).getPropertyValue("bottom");
    //         characterPosition.innerHTML =   '<div class="title"> CHARACTER </div>' +
    //                                         "Right: " + characterRight + "<br>" + 
    //                                         "Left: " + characterLeft + "<br>" + 
    //                                         "Top: " + characterTop + "<br>" +
    //                                         "Bottom: " + characterBottom + "<br>";  

    //         let obstacleRight = window.getComputedStyle(obstacle).getPropertyValue("right");
    //         let obstacleLeft = window.getComputedStyle(obstacle).getPropertyValue("left");
    //         let obstacleTop = window.getComputedStyle(obstacle).getPropertyValue("top");
    //         let obstacleBottom = window.getComputedStyle(obstacle).getPropertyValue("bottom");
    //         obstaclePosition.innerHTML =   '<div class="title"> OBSTACLE </div>' +
    //                                         "Right: " + obstacleRight + "<br>" + 
    //                                         "Left: " + obstacleLeft + "<br>" + 
    //                                         "Top: " + obstacleTop + "<br>" +
    //                                         "Bottom: " + obstacleBottom + "<br>";                                               
    //     }

    // setInterval(positionDisplay, 10);
    setInterval(checkDead, 10);

}


function start() {
    gameStatus = true;
}

