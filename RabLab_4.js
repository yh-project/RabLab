//F5키 입력시 초기 화면으로 돌아가면서 sessionStorage 초기화
document.addEventListener('keyup', e => {
    if(!(e.key == "F5")) return;
    event.returnValue = false;
    sessionStorage.removeItem('cur_state');
    history.clear;
    window.location.href = 'index.html';
});

function back_change() {
    sessionStorage.setItem('cur_state',3);
    history.back();
}


function front_change() {
    sessionStorage.removeItem('cur_state');
    window.location.href = 'qstn_1.html';
}