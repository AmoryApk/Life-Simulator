window.jQuery || document.write('<script src="../../assets/js/vendor/jquery-slim.min.js"><\/script>')

window.jQuery || document.write('<script src="../../assets/js/vendor/jquery-slim.min.js"><\/script>')

$(document).ready(function(){
    $("#mainMenu").show();
    $("#game").hide();
});

$("#play").click(function(event){
    event.preventDefault();
    var avatar = $("#avatar").val();
    var name = $("#name").val();
    if (avatar == "") {
        alert("Please choose your avatar!");
    } else if (name == "") {
        alert("Please enter your name!");
    } else {
        $("#mainMenu").hide();
        $("#game").show();
        $("#progressUtensiils").css("width", "50%");
        $("#progressBed").css("width", "50%");
        $("#progressGamepad").css("width", "50%");
        $("#progressBook").css("width", "0%");
        $("#semester").text("Semester 1");
        // tampilkan greeting (morning, afternoon, evening, night) dan nama
        var greeting = "";
        var a_p = "";
        var today = new Date();
        var curr_hour = today.getHours();
        var curr_minute = today.getMinutes();
        if (curr_hour < 12) {
            a_p = "AM";
        } else {
            a_p = "PM";
        }
        if (curr_hour == 0) {
            curr_hour = 12;
        }
        if (curr_hour > 12) {
            curr_hour = curr_hour - 12;
        }
        if (curr_hour < 10) {
            curr_hour = "0" + curr_hour;
        }
        if (curr_minute < 10) {
            curr_minute = "0" + curr_minute;
        }
        var hour = today.getHours();
        if (hour >= 5 && hour < 12) {
            greeting = "Good Morning, ";
            $("#background").css("background-image", "url('images/morning.jpg')");
        } else if (hour >= 12 && hour < 15) {
            greeting = "Good Afternoon, ";
            $("#background").css("background-image", "url('images/afternoon.jpg')");
        } else if (hour >= 15 && hour < 18) {
            greeting = "Good Evening, ";
            $("#background").css("background-image", "url('images/evening.jpg')");
        } else {
            greeting = "Good Night, ";
            $("#background").css("background-image", "url('images/night.jpg')");
        }
        $("#greeting").text(greeting + name);
        $("#character").html("<img src='img/" + avatar + ".png' class='img-fluid' alt='Responsive image'>");
    }
});

window.onbeforeunload = function() {
    return "Are you sure you want to leave?";
};

window.onunload = function() {
    alert("You have left the game!");
};

function showTime() {
    var a_p = "";
    var today = new Date();
    var curr_hour = today.getHours();
    var curr_minute = today.getMinutes();
    var curr_second = today.getSeconds();
    if (curr_hour < 12) {
        a_p = "AM";
    } else {
        a_p = "PM";
    }
    if (curr_hour == 0) {
        curr_hour = 12;
    }
    if (curr_hour > 12) {
        curr_hour = curr_hour - 12;
    }
    curr_hour = checkTime(curr_hour);
    curr_minute = checkTime(curr_minute);
    curr_second = checkTime(curr_second);
    document.getElementById('clock').innerHTML=curr_hour + ":" + curr_minute + " " + a_p;
    setTimeout(showTime, 500);  
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
showTime();

var food = document.getElementById("foodbar").value;
var sleep = document.getElementById("sleepbar").value;
var play = document.getElementById("playbar").value;
var study = document.getElementById("studybar").value;


function eat() {
    if (food <= 90) {
        food += 10;
        
        document.getElementById("foodbar").value = food;
    } else if (food > 0 && food < 10) {
        food == 0;
        document.getElementById("foodbar").value == food;
    } else {
        alert("You reached the maximum length of the progressbar!")
    }
}
function belajar() {
    if (study <= 90) {
        study += 10;               
        document.getElementById("studybar").value = study;
    }else if (study > 0 && study < 10) {
        study == 0;
        document.getElementById("studybar").value == study;
    }  if (food > 0) {
        food -= 2.5;
        document.getElementById("foodbar").value = food;
    } else if (food > 0 && food < 10) {
        food == 0;
        document.getElementById("foodbar").value == food;
    }  if (play > 0) {
        play -= 5;
        document.getElementById("playbar").value = play;
    } else if (play > 0 && play < 10) {
        play == 0;
        document.getElementById("playbar").value == play;
    } if (sleep > 0){
        sleep -= 5;
        document.getElementById("sleepbar").value = sleep;
    } else if (sleep > 0 && sleep < 10){
        sleep == 0;
        document.getElementById("sleepbar").value = sleep;
    }
  }


function tidur() {
    if (sleep <= 90) {
        sleep += 10;
        document.getElementById("sleepbar").value = sleep;
    }else if (sleep > 0 && sleep < 10) {
        sleep == 0;
        document.getElementById("sleepbar").value == sleep;
    }   if (food > 0) {
        food -= 5;
        document.getElementById("foodbar").value = food;
    }else if (food > 0 && food < 10){
        food == 0;
        document.getElementById("foodbar").value == food;
    }   if (play > 0){
        play -= 5;
        document.getElementById("playbar").value = play;
    } else if (play > 0 && play < 10){
        play == 0;
        document.getElementById("playbar").value == play;
    } if(study <= 90) {
        study -= 5;
        document.getElementById("studybar").value = study;
    } else if (study > 0 && study < 10){
        study == 0;
        document.getElementById("studybar").value == study;
    }
}


function main() {
    if (play <= 90) {
        play += 10;               
        document.getElementById("playbar").value = play;
    }else if (play > 0 && play < 10) {
        play == 0;
        document.getElementById("playbar").value == play;
    }  if (food > 0) {
        food -= 5;
        document.getElementById("foodbar").value = food;
    } else if (food > 0 && food < 10) {
        food == 0;
        document.getElementById("foodbar").value == food;
    }  if (study > 0) {
        study -= 5;
        document.getElementById("studybar").value = study;
    } else if (study > 0 && study < 10) {
        study == 0;
        document.getElementById("studybar").value == study;
    } if (sleep > 0){
        sleep -= 5;
        document.getElementById("sleepbar").value = sleep;
    } else if (sleep > 0 && sleep < 10){
        sleep == 0;
        document.getElementById("sleepbar").value = sleep;
    }
}

let timer, currSeconds = 0;

function resetTimer() {
    clearInterval(timer);

    /* Reset the seconds of the timer */
    currSeconds = 0;

    /* Set a new interval */
    timer = 
        setInterval(startIdleTimer, 1000);
}
window.onload = resetTimer;
window.onmousemove = resetTimer;
window.onmousedown = resetTimer;
window.ontouchstart = resetTimer;
window.onclick = resetTimer;
window.onkeypress = resetTimer;

function startIdleTimer() {
    
    /* Increment the
        timer seconds */
    currSeconds++;
    if (currSeconds % 10 == 0){
        play -= 2;               
        document.getElementById("playbar").value = play;
    } else if (play < 10) {
        play == 0;
        document.getElementById("playbar").value == play;
    }
    /* Set the timer text
        to the new value */
    document.querySelector(".secs")
        .textContent = currSeconds;

    /* Display the timer text */
    document.querySelector(".timertext")
        .style.display = 'block';
}
