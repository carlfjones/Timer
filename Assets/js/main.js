let timer;
let sec = 0;
let min = 0;
let hour = 0;
let sec_real;
let min_real;
let hour_real;

let start_btn = document.getElementById("start");
let pause_btn = document.getElementById("stop");
let reset_btn = document.getElementById("reset");
let timer_element = document.getElementById("timer");

start_btn.addEventListener("click", function(){
    timer = setInterval(TimerHandler, 1000);
    reset_btn.disabled = false;
})

pause_btn.addEventListener("click", function(){
    timer = clearInterval(timer);
    reset_btn.disabled = false;
})

reset_btn.addEventListener("click", function(){
    timer = clearInterval(timer);
    reset_btn.disabled = true;
    sec = 0;
    min = 0;
    hour = 0;
    timer_element.innerHTML = "00:00:00"
})

function TimerHandler() {
    sec++;
    if (sec == 60) {
        sec = 00;
        min++;
    }
    if (min == 60) {
        min = 0;
        hour++;
    }

    DisplayTime();
}

function DisplayTime () {

    if (sec < 10) {
        sec_real = "0"+sec;
    }else{
        sec_real = sec;
    }
    if (min < 10) {
        min_real = "0"+min;
    }else{
        min_real = min;
    }
    if (hour < 10) {
        hour_real = "0"+hour;
    }else{
        hour_real = hour;
    }
    
    timer_element.innerHTML = hour_real + ":" + min_real + ":" + sec_real;
}