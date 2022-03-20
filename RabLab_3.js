var cur_state = 0;
var txt5 = document.getElementById("text5");
var txt6 = document.getElementById("text6");
var txt7 = document.getElementById("text7");
var start_box = document.getElementById("start-box");
var vid = document.getElementById("vid");
txt6.style.visibility = "hidden";
txt7.style.visibility = "hidden";
start_box.style.visibility =  "hidden";
vid.style.visibility = "hidden";

function txt_change() {
    if(cur_state == 0) {
        txt5.style.visibility = "hidden";
        txt6.style.visibility = "visible";
        cur_state++;
    }
    else if(cur_state == 1) {
        txt6.style.visibility = "hidden";
        txt7.style.visibility = "visible";
        start_box.style.visibility = "visible";
        vid.style.visibility = "visible";
        cur_state++;
    }
}

function start() {
    window.location.href = 'RabLab_4.html';
}

function start_survey() {
    
}