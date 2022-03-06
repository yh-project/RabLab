//페이지간 데이터 전송 -> LocalStorge 사용하기


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

var txtList = [
    '라브 연구소에 오신 것을 환영합니다.',
    `본 설문은 당신의 죽음 이후, 원하는 사후세계에 도착하실 수 있게
당신의 무지개 다리를 디자인해드리는 프로젝트 입니다.`,
    '본 프로젝트는 고객들의 설문내용을 도출하여 디자인되는 \
    1:1 고객 맞춤 서비스 입니다.',
    '디자인이 완료되면, 그 정보값이 든 나노칩을 연구원이 제작해 드립니다.\
    칩을 몸에 부착하시면 준비가 완료됩니다.',
    '많은 이들이 본 프로젝트를 통해 행복한 죽음을 맞이 했습니다.',
    '살아 있음이 곧 불안이라는 감각은 이제 잊어버리시고\
    가볍고 쉽게 새로운 평온과 자유를 가지세요.',
    '누구나 쉽게 행복한 죽음을 맞이해보세요.',
    '고객님의 무지개 다리를 설계합니다.\
\
7개의 문항에 답해주세요.'
]


