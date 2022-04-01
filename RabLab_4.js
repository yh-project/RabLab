
function back_change() {
    sessionStorage.setItem('cur_state',3);
    history.back();
}


function front_change() {
    window.location.href = 'qstn_1.html';
}