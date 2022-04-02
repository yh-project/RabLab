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

// 타 페이지에서 데이터 가져오기(sessionStorage 이용)
try {
    if (sessionStorage.getItem('cur_state') != null) {
        cur_state = sessionStorage.getItem('cur_state');
        back_change();
    }
} catch (error) {
    console.log(error);
}

//F5키 입력시 초기 화면으로 돌아가면서 sessionStorage 초기화
document.addEventListener('keyup', e => {
    if(!(e.key == "F5")) return;
    reset_storage();
    history.clear;
    window.location.href = 'index.html';
});

function reset_storage() {
    sessionStorage.removeItem('cur_state');
    sessionStorage.removeItem('name');
    for(let i = 1;i <= 7;i++) {
        sessionStorage.removeItem('page'+i);
        sessionStorage.removeItem('page'+i+'_2');
    }
}

function front_change() {
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
        sessionStorage.removeItem('cur_state');
        window.location.href = 'RabLab_3.html';
    }
}

function back_change() {
    console.log(cur_state);
    if(cur_state == 2) {
        st1.style.visibility = "hidden";
        st2.style.visibility = "hidden";
        txt3.style.visibility = "hidden";
        vid1.style.visibility = "hidden";
        vid2.style.visibility = "hidden";
        st3.style.visibility = "visible";
        txt4.style.visibility = "visible";
        vid3.style.visibility = "visible";
        cur_state--;
    }
    else if(cur_state == 1) {
        st1.style.visibility = "visible";
        st2.style.visibility = "visible";
        txt3.style.visibility = "visible";
        vid1.style.visibility = "visible";
        vid2.style.visibility = "visible";
        st3.style.visibility = "hidden";
        txt4.style.visibility = "hidden";
        vid3.style.visibility = "hidden";
        cur_state--;
    }
    else if(cur_state == 0) {
        sessionStorage.setItem('cur_state',2);
        history.back();
    }
}