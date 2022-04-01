var pick_list = [];
var qstn_list = [];
var name_box = document.getElementById("names");
for(let i = 1; i <= 9; i++) {
    pick_list.push(document.getElementById("p"+i));
}
for(let i = 1; i <= 7; i++) {
    qstn_list.push(document.getElementById("qstn"+i))
}

qstn_list[0].style.visibility="visible"

for (let i = 1; i < 7; i++) {
    qstn_list[i].style.visibility="hidden";
}
document.getElementById("pick").style.visibility="hidden"

var cur_state = 0;
const items_cnt = [8,9,6,8,7,6];
// const items_css = {}
// items_css[6] = new sytle;
// items_css[7] = new sytle;
// items_css[8] = new sytle;
// items_css[9] = new style;

var user_name;

// var input_arr = [q1, q2, q3, q4, q5, q6, q7];
// for(var i = 1; i<input_arr.length; i++) {
//     input_arr[i].style.visibility = "hidden";
// }

var names = document.getElementById("names");

function input_items() {
    if (cur_state == 0) {
        user_name = document.getElementById("names").value;
        console.log(user_name);
        name_box.style.visibility="hidden";
    }
    if (cur_state != 6) {
        qstn_list[cur_state].style.visibility="hidden";

        // for(let i = 0; i < 9; i++) {
        //     selection_list[i].style.property = items_css[items_cnt[i]];
        // }

        qstn_list[++cur_state].style.visibility="visible";
    }
    else
        window.location.href = 'RabLab_2.html';
}

//키보드 입력 확인
document.addEventListener('keyup', e => {
    if(cur_state != 0) return;
    if(!(e.key == "Enter")) return;
   
   user_name = document.getElementById("names").value;
   input_items();
});

function back_change() {
    sessionStorage.setItem('cur_state',3);
    history.back();
}

function front_change() {
    sessionStorage.removeItem('cur_state');
    window.location.href = 'qstn_1.html';
}