var cur_state = 0;
var st1 = document.getElementById("step1");
var st2 = document.getElementById("step2");
var txt3 = document.getElementById("text3");
var st3 = document.getElementById("step3");
var txt4 = document.getElementById("text4");
var vid1 = document.getElementById("vid_1");
var vid2 = document.getElementById("vid_2");
var vid3 = document.getElementById("vid_3");

st3.style.visibility = "hidden";
txt4.style.visibility = "hidden";
vid3.style.visibility = "hidden";

function txt_change() {
    if(cur_state == 0) {
        st1.style.visibility = "hidden";
        st2.style.visibility = "hidden";
        txt3.style.visibility = "hidden";
        vid1.style.visibility = "hidden";
        vid2.style.visibility = "hidden";
        st3.style.visibility = "visible";
        txt4.style.visibility = "visible";
        vid3.style.visibility = "visible";
        cur_state++;
    }
    else if(cur_state == 1) {
        window.location.href = 'RabLab_3.html';
    }
}