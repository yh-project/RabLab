var aa;
function front_change() {
    document.getElementById('main').style.display='none';
    document.getElementById('plz').style.visibility="visible";
    document.getElementById('plz').play();
}
document.addEventListener('keydown', e => {
    if(e.key == "F5") {
        e.cancelBubble = true;
        e.returnValue = false;
        return;
    }
});
// document.addEventListener('keydown', e => {
//     console.log(e.key == "Escape");
//     if(e.key == "F5" || e.key == "Escape" || e.key == "F11") {
//         e.keyCode = 0;
//         e.cancelBubble = true;
//         e.returnValue = false;
//         return;
//     }
// });