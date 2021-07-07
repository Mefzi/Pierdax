let character = document.getElementById('character');
let obstacle = document.getElementById('obstacle');
let counter = document.getElementById('counter');

let characterPosition = document.getElementById('charPosition');
let obstaclePosition = document.getElementById('obstPosition');
let gameStyle = document.getElementById('game');
let stage = document.getElementById('stage');
let points = 0;
let status = true;

let song = new Audio();
song.src = "assets/tibia_song.mp3";
song.volume = 0.3;


/////// PRZYŚPIESZANIE //////// WYBÓR POSTACI ////// MUZYKA PRZY DEADZIE ///// ŚCISZANIE MUZYKI LUB WYCISZANIE
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
    gameStyle.style.backgroundImage = 'url("assets/tibja.jpg")';
    character.style.opacity = 1.0;
    obstacle.style.opacity = 1.0;
    counter.style.opacity = 1.0;
    stage.style.opacity = 1.0;

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
        

        // setInterval(function() {
        //     let num = Math.floor(Math.random()*3);
        //     obstacle.innerHTML = obstacles[num];
        // }, 1500);

        let level = 1;
        function checkDead() {
            let obstLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
            let charTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
            if(status == true) {

                if(obstLeft>228 && obstLeft<308 && charTop>=250) {


                    obstacle.style.animation = "none";
                    obstacle.style.display = "none";

                    character.innerHTML = '<img src="assets/DeadBody.png">';

                    counter.innerHTML = "Congratulations! <br> You got " + points + " points";
                    counter.style.textAlign = "center";
                    counter.classList.add("endCounter");

                    status = false;

                }
                else {
                    counter.innerHTML = "Points: " + points++;

                    if(points >= 2060 && points <= 2100) {
                        obstacle.classList.remove("obstacleAnimation");
                        obstacle.style.opacity = 0.0;
                        stage.innerHTML = "STAGE II";
                    }
                    if (points >= 2100) {
                        obstacle.style.opacity = 1.0;
                        obstacle.classList.add("obstacleAnimation2");
                    }
                    if(points >= 4940 && points <= 4990) {
                        obstacle.classList.remove("obstacleAnimation2");
                        obstacle.style.opacity = 0.0;
                        stage.innerHTML = "STAGE III";
                    }
                    if (points >= 4990) {
                        obstacle.style.opacity = 1.0;
                        obstacle.classList.add("obstacleAnimation3");
                        obstacle.innerHTML = '<img src="assets/dragon_lord.gif">';
                    }
                    if(points >= 10000 && points <= 10050) {
                        obstacle.classList.remove("obstacleAnimation3");
                        obstacle.style.opacity = 0.0;
                        stage.innerHTML = "STAGE IV";
                    }
                    if (points >= 10050) {
                        obstacle.style.opacity = 1.0;
                        obstacle.classList.add("obstacleAnimation4");
                    }
                }
            }
            else {
                return;
            }
        }

    setInterval(checkDead, 10);

}


function start() {
    gameStatus = true;
}

