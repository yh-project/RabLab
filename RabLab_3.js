var cur_state = 0;
var txt5 = document.getElementById("text5");
var txt6 = document.getElementById("text6");
var txt7 = document.getElementById("text7");
var start_box = document.getElementById("start-box");
var vid = document.getElementById("vid");
txt5.style.visibility="visible";
document.getElementById("back").style.visibility="visible";
document.getElementById("front").style.visibility="visible";
// txt6.style.visibility = "hidden";
// txt7.style.visibility = "hidden";
// start_box.style.visibility =  "hidden";
// vid.style.visibility = "hidden";

var page0 = [
    txt5
]
var page1 = [
    txt6
]
var page2 = [
    txt7,
    start_box,
    vid
]

// 타 페이지에서 데이터 가져오기(sessionStorage 이용)
try {
    if (sessionStorage.getItem('cur_state') != null) {
        cur_state = sessionStorage.getItem('cur_state');
        document.getElementById("back").style.visibility="visible";
        document.getElementById("front").style.visibility="visible";
        back_change();
    }
} catch (error) {
    console.log(error);
}

//F5키 입력시 초기 화면으로 돌아가면서 sessionStorage 초기화
document.addEventListener('keyup', e => {
    if(!(e.key == "F5")) return;
    event.returnValue = false;
    sessionStorage.removeItem('cur_state');
    history.clear;
    window.location.href = 'index.html';
});

function front_change() {
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
    else if(cur_state == 2) {
        start();
    }
}

function back_change() {
    if(cur_state == 3) {
        for(let i = 0; i < page0.length; i++) {
            page0[i].style.visibility = "hidden";
        }
        for(let i = 0; i < page2.length; i++) {
            page2[i].style.visibility = "visible";
        }
        cur_state--;
    }
    else if(cur_state == 2) {
        for(let i = 0; i < page1.length; i++) {
            page1[i].style.visibility = "visible";
        }
        for(let i = 0; i < page2.length; i++) {
            page2[i].style.visibility = "hidden";
        }
        
        cur_state--;
    }
    else if(cur_state == 1) {
        for(let i = 0; i < page0.length; i++) {
            page0[i].style.visibility = "visible";
        }
        for(let i = 0; i < page1.length; i++) {
            page1[i].style.visibility = "hidden";
        }
        cur_state--;
    }
    else if(cur_state == 0) {
        sessionStorage.setItem('cur_state',2);
        history.back();
    }
}

function start() {
    sessionStorage.removeItem('cur_state');
    window.location.href = 'RabLab_4.html';
}

function start_survey() {
    
}