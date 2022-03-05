var cur_state = 0;
var txt1 = document.getElementById("text1");
var txt2 = document.getElementById("text2");
txt2.style.visibility = "hidden";

function txt_change() {
    if(cur_state == 0) {
        txt1.style.visibility = "hidden";
        txt2.style.visibility = "visible";
        cur_state++;
    }
    else if(cur_state == 1) {
        window.location.href = 'RabLab_2.html';
        cur_state++;
    }
}