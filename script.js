function play(){
    var audio = document.getElementById("audio");
    audio.play();
}

var btn = document.querySelector(".folder1");
var samebtn = document.getElementById("main3");

var modal = document.querySelector(".modal1");
var closebtn = document.querySelector(".close");

btn.onclick = function(){
    modal.style.display = "block";
    play();
}

samebtn.onclick = function(){
    modal.style.display = "block";
    play();
}


closebtn.onclick = function(){
    modal.style.display = "none";
}


var btn2 = document.querySelector(".folder2");
var modal2 = document.querySelector(".modal2");
var closebtn2 = document.querySelector(".close2");

btn2.onclick = function(){
    modal2.style.display = "block";
    play();
}

closebtn2.onclick = function(){
    modal2.style.display = "none";
}


var btn3 = document.querySelector(".folder3");
var modal3 = document.querySelector(".modal3");
var closebtn3 = document.querySelector(".close3");

btn3.onclick = function(){
    modal3.style.display = "block";
    play();
}

closebtn3.onclick = function(){
    modal3.style.display = "none";
}

