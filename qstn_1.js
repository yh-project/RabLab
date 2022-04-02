var cur_state = 0;

var pick_txt = [
    [
    '내 방 침대',
    '자주가던 카페',
    '산 꼭대기',
    '과거 어느 순간',
    '한적한 바다',
    '넓은 들판',
    '우주 어느 행성',
    '여기가 어디일까요..'
    ],
    [
    '화창한 봄 날씨',
    '선선한 가을 날씨',
    '안개 낀 새벽 날씨',
    '비가 내리는 날씨',
    '흠.. 잘 모르겠어요',
    '푸른 여름 날씨',
    '포근한 겨울 날씨',
    '평소의 맑은 날씨',
    '여기가 어디일까요..',
    ],
    [
    '가족',
    '친구',
    '애인',
    '반려동물',
    '좋아하는 연예인',
    '모르는 사람인데?',
    ],
    [
    '취미 생활',
    '게임',
    '휴식',
    '맛있는 거 먹기',
    '잠',
    '대화',
    '술',
    '잘 모르겠어요'
    ],
    [
    '돈',
    '누군가의 죽음',
    '외로움',
    '선택의 실수',
    '인간관계',
    '직장',
    '건강'
    ],
    [
    '행복 그 자체였어요',
    '나름 만족해요',
    '나쁘지 않았어요',
    '아쉬움이 많이 남아요',
    '너무 지치고 힘들었어요',
    '아무 생각이 안들어요'
    ]
]
for (let i =1;i<=6;i++) {
    pick_txt.push('pick_txt'+i);
}

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
const items_css = [];
items_css.push('./pick8_2.css');
items_css.push('./pick9_3.css')
items_css.push('./pick6_4.css')
items_css.push('./pick8_5.css')
items_css.push('./pick7_6.css')
items_css.push('./pick6_7.css')

var user_name;

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

    cur_state++;

    document.getElementById('names').style.visibility='hidden';
    if(cur_state>1) {
        document.getElementById('pick_css').href=items_css[cur_state-1];
    }
    
    for(let i=1;i<=items_cnt[cur_state-1];i++) {
        document.getElementById('p'+i).textContent = pick_txt[cur_state-1][i-1];
        document.getElementById('p'+i).style.visibility="visible";
    }
    for(let i = items_cnt[cur_state-1]+1;i<=9;i++) {
        document.getElementById('p'+i).style.visibility="hidden";
     }
    
    document.getElementById("qstn"+cur_state).style.visibility="hidden";
    document.getElementById("qstn"+(cur_state+1)).style.visibility="visible";

}



//sessionStorge : 리스트형식? -> 중복선택이 있음ㅋㅋㅋㅋㅋㅋㅋ => 중복선택을 2자리 숫자로 표시?
//선택된 애만 테두리 보이도록하기