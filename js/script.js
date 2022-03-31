/**
 * getting Dom Elements
 */

var bgsound = document.getElementById('gamebgmusic');
var popsound = document.getElementById('audio');
var ballonBrust = document.getElementById('ballonBrust');
var playingbutton = document.getElementById('playingbutton');
var bigp1 = document.getElementById('p1');
var bigp2 = document.getElementById('p2');
var playbtn = document.getElementById('playbtn');
var gear = document.getElementById('gear');
var gearsound = document.getElementById('gearSound');
var bgspans = document.querySelectorAll('#background span');
var userbox = document.getElementById('userbox');
var options = document.getElementById('options');
var kata = document.getElementById('kata');
var score = document.querySelector('.score');
var scoreCounter = document.querySelector('.score .counter');
var ballons = document.getElementsByClassName('ballons');
var filler = document.getElementById('filler');
var basket = document.getElementById('basket');
var meter = document.getElementById('meter');
var meterfiller = document.getElementById('meterfiller');
var finalscore = document.getElementById('score');
/*
Setting Sound property
*/
popsound.volume = 0.5;
popsound.playbackRate = 0.9;
gearsound.volume = 0.5;
gearsound.playbackRate = 1;
bgsound.volume = 1;

///variables
const ballonColor = [
    "./Images/redBallon.png",
    "./Images/orangeBallon.png",
    "./Images/purpleBallon.png",
    "./Images/skyBallon.png",
    "./Images/yellowballon.png"
]

var addBallons;
var deletestaggedBallons;
var ballonAnimationDuration = 5;
var fillerwidth = 0;
var meterfillerwidth = 0;

function deletestaggedBallons() {

    var Loons = document.querySelectorAll('.packedBallon');
    for (var i = 0; i < Loons.length; i++) {
        if (Loons[i].style.width == 0)
            Loons[i].remove();
    }
}
//animate added Ballon

//add bannon in the screen randomly
function addBallons() {
    var ballon = document.createElement('span');
    ballon.classList.add("ballons");

    ballon.addEventListener('click', function(e) {
        var Sound = ballonBrust.cloneNode(true);
        Sound.play();
        var TOP = window.innerHeight - this.offsetTop - 130 - 45;
        if (TOP < 0) {
            TOP = 0;

        }
        this.style.animationPlayState = "paused";

        this.style.transform = "translateY(" + TOP + "px)";
        this.style.left = "90%";
        this.firstChild.width = "0px"
        this.classList.add('packedBallon');
        scoreCounter.innerHTML++;


        if (fillerwidth < 100) {
            fillerwidth += 5;
            filler.style.width = fillerwidth + '%';
        }

        if ((meterfillerwidth - 5) >= 0) {
            meterfillerwidth -= 5;
            meterfiller.style.width = meterfillerwidth + '%';
        } else {
            meterfiller.style.width = 0 + '%';
        }

        if (ballonAnimationDuration >= 1.8)
            ballonAnimationDuration -= 0.05;
    })



    document.getElementById('gamedisplaywrapper').appendChild(ballon);
    var img = document.createElement('img');
    var randomBallon = Math.floor(Math.random() * ballonColor.length);
    img.src = ballonColor[randomBallon];
    img.width = '80'
    ballon.appendChild(img);
    ballon.style.left = Math.random() * 80 + '%';
    ballon.style.animationDuration = ballonAnimationDuration + "s";



    ballon.addEventListener("animationend", function(e) {
        if (this.firstChild.width != 80) {
            return;
        }

        this.style.pointerEvents = "none";
        console.log(this.offsetTop);
        e.target.remove();
        if ((meterfillerwidth + 10) < 100) {
            meterfillerwidth += 10;
            meterfiller.style.width = meterfillerwidth + '%';
        } else {
            meterfiller.style.width = 100 + '%';
            gameOver();
        }
        popsound.play();
    })
}


//starting play
function playStart() {
    bgsound.play();
    popsound.play();
    userbox.style.top = '-50%';
    options.style.top = '-50%';
    kata.style.bottom = '-10px';
    meter.style.left = '50%';
    basket.style.right = '40px';
    score.style.right = '30px';
    bigp1.style.transform = 'translateX(-1000px) translateY(-1000px)';
    bigp2.style.transform = 'rotate(-90deg) translateX(1000px) translateY(1000px)';
    playbtn.style.display = "none";
    playingbutton.style.zIndex = "-100";


    for (var i = 0; i < bgspans.length; i++) {
        bgspans[i].style.top = "102%";
    }


    addBallons = setInterval(addBallons, 400);
    deletestaggedBallons = setInterval(deletestaggedBallons, 50000);
}

basket.addEventListener('click', function(e) {
    if (fillerwidth >= 100) {
        fillerwidth = 0;
        filler.style.width = fillerwidth + '%';

        if (meterfillerwidth >= 50) {
            meterfillerwidth -= 50;
            meterfiller.style.width = meterfillerwidth + '%';

        } else {
            meterfillerwidth = 0;
            meterfiller.style.width = 0 + '%';
        }

    }
})


function playgearsound() {
    gearsound.play();
    gear.style.transform += 'rotate(360deg)';
}

function soundToggle(event) {
    if (event.checked) {
        gearsound.volume = 0.5;
        popsound.volume = 1;
        bgsound.volume = 0.25;
    }
    if (!event.checked) {
        gearsound.volume = 0;
        popsound.volume = 0;
        bgsound.volume = 0;
    }
}

function gameOver() {
    finalscore.innerHTML = scoreCounter.innerHTML;
    clearInterval(deletestaggedBallons);
    clearInterval(addBallons);

    var onairloons = document.querySelectorAll('.ballons');

    for (var i = 0; i < onairloons.length; i++) {
        onairloons[i].style.animationPlayState = 'paused';
    }
    document.getElementById('gameOver').style.display = "block";
    bgsound.pause();
}