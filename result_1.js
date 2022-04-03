//F5키 입력시 초기 화면으로 돌아가면서 sessionStorage 초기화
document.addEventListener('keyup', e => {
    if(e.key == "ArrowLeft") {
        back_change();
        return;
    }
    if(e.key == "ArrowRight") {
        front_change();
        return;
    }
    if(!(e.key == "F5")) return;
    if(!confirm("입력하신 모든 데이터가 초기화되고 처음으로 돌아갑니다.\n처음으로 돌아가시겠습니까?")) return;
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
    sessionStorage.setItem('cur_state',7);
    history.back();
}

function front_change() {
    sessionStorage.removeItem('cur_state');
    window.location.href = 'result_2.html';
}