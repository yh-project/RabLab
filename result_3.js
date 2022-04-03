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

function back_change() {
    history.back();
}

function front_change() {
    sessionStorage.removeItem('cur_state');
}