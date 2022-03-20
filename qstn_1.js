/*var cur_state = 0;
var q1 = document.getElementById("qstn1");
var q2 = document.getElementById("qstn2");
var q3 = document.getElementById("qstn3");
var q4 = document.getElementById("qstn4");
var q5 = document.getElementById("qstn5");
var q6 = document.getElementById("qstn6");
var q7 = document.getElementById("qstn7");

var input_arr = [q1, q2, q3, q4, q5, q6, q7];
for(var i = 1; i<input_arr.length; i++) {
    input_arr[i].style.visibility = "hidden";
}

var names = document.getElementById("names");

function input_items() {
        switch(cur_state) {
            case 0:
                change_visibility(cur_state);
                names.style.visibility = "hidden";
                cur_state++;
                break;
            case 1:
                change_visibility(cur_state);
                cur_state++;
                break;
            case 2:
                change_visibility(cur_state);
                cur_state++;
                break;
            case 3:
                change_visibility(cur_state);
                cur_state++;
                break;
            case 4:
                change_visibility(cur_state);
                cur_state++;
                break;
            case 5:
                change_visibility(cur_state);
                cur_state++;
                break;
            case 6:
                change_visibility(cur_state);
                break;
        }
}

function change_visibility(idx) {
    for(var i = 0; i<input_arr.length; i++) {
        if(i == (idx+1)) input_arr[i].style.visibility = "visible";
        else input_arr[i].style.visibility = "hidden";
    }
}*/