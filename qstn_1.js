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

//txt list
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

document.getElementById("names").focus();
document.getElementById('names').value = sessionStorage.getItem('name');
try {
    if (sessionStorage.getItem('cur_state') != null) {
        cur_state = sessionStorage.getItem('cur_state');
        back_change();
    }
} catch (error) {
    console.log(error);
}

//키보드 입력 확인
document.addEventListener('keyup', e => {
    if(e.key == "F5") {
        reset_storage();
        history.clear;
        window.location.href = 'index.html';
    }

    if(cur_state != 0) return;
    if(!(e.key == "Enter")) return;
    
    user_name = document.getElementById("names").value;
    if(name_box.value.trim() == "") {   //이름 입력 안될 시(공백포함) alert 소환
        alert("이름을 입력해주세요");
        name_box.value = "";
        document.getElementById("names").focus();
        return;
    }
    user_name = name_box.value;
    front_change();
});

function back_change() {
    if(cur_state == 7) {
        cur_state--;
        document.getElementById('qstn'+cur_state).style.visibility="visible";
        document.getElementById('qstn'+1).style.visibility='hidden';
        name_box.style.visibility='hidden';
        document.getElementById('pick_css').href=items_css[cur_state-1];
        for(let i=1;i<=items_cnt[cur_state-1];i++) {
            document.getElementById('p'+i).textContent = pick_txt[cur_state-1][i-1];
            document.getElementById('p'+i).style.visibility="visible";
        }
        for(let i = items_cnt[cur_state-1]+1;i<=9;i++) {
            document.getElementById('p'+i).style.visibility="hidden";
        }
        reset_pick_css();
        pick_list.forEach(pick => {
            if (sessionStorage.getItem('page'+cur_state) == pick.attributes[0].value || sessionStorage.getItem('page'+cur_state+"_2") == pick.attributes[0].value)
                pick.style.border = 'solid 3px #333333';
        });

        return;
    }
    if(cur_state == 0) {
        if(confirm("앞으로 돌아갈 시 입력하신 데이터가 초기화됩니다.\n돌아가시겠습니까?")) {
            sessionStorage.setItem('cur_state',3);
            reset_storage();
            history.back();
        }
        return;
    }
    if(cur_state == 1) {
        document.getElementById('names').style.visibility='visible';
        name_box.value = sessionStorage.getItem('name');
        for(let i = 1;i<=9;i++) {
            document.getElementById('p'+i).style.visibility="hidden";
        }
    }
    cur_state--;
    //질문 변경
    document.getElementById("qstn"+(cur_state+1)).style.visibility="visible";
    document.getElementById("qstn"+(cur_state+2)).style.visibility="hidden";
    
    //선택지 변경
    if(cur_state>0) {
        document.getElementById('pick_css').href=items_css[cur_state-1];
    }
    for(let i=1;i<=items_cnt[cur_state-1];i++) {
        document.getElementById('p'+i).textContent = pick_txt[cur_state-1][i-1];
        document.getElementById('p'+i).style.visibility="visible";
    }
    for(let i = items_cnt[cur_state-1]+1;i<=9;i++) {
        document.getElementById('p'+i).style.visibility="hidden";
    }
    //버튼 뷰 초기화
    reset_pick_css();
    //입력값이 있을 때 border 처리
    pick_list.forEach(pick => {
        if (sessionStorage.getItem('page'+cur_state) == pick.attributes[0].value || sessionStorage.getItem('page'+cur_state+"_2") == pick.attributes[0].value)
            pick.style.border = 'solid 3px #333333';
    });

}

function front_change() {

    if(cur_state == 0) {
        if(name_box.value.trim() == "") {   //이름 입력 안될 시(공백포함) alert 소환
            alert("이름을 입력해주세요");
            name_box.value = "";
            document.getElementById("names").focus();
            return;
        }
        user_name = name_box.value;
        sessionStorage.setItem('name',user_name);
    }
    else if(sessionStorage.getItem('page'+cur_state) == null) return;

    cur_state++;

    //names는 첫페이지 이니까 항상 숨기게
    document.getElementById('names').style.visibility='hidden';

    //선택지 변경
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

    //질문 변경
    document.getElementById("qstn"+cur_state).style.visibility="hidden";
    //마지막 페이지 처리
    if(cur_state == 7) {
        window.location.href = 'result_1.html';
        return;
    }
    document.getElementById("qstn"+(cur_state+1)).style.visibility="visible";

    //버튼 클릭뷰 초기화
    reset_pick_css();

    //입력값이 있을 때 border 처리
    pick_list.forEach(pick => {
        if (sessionStorage.getItem('page'+cur_state) == pick.attributes[0].value || sessionStorage.getItem('page'+cur_state+'_2') == pick.attributes[0].value)
            pick.style.border = 'solid 3px #333333';
    });

}

function check_pick(btn_obj) {
    btn_id = btn_obj.attributes[0].value;

    if(btn_id == sessionStorage.getItem('page'+cur_state)) {
        btn_obj.style.border = 'solid 0px #333333';
        sessionStorage.removeItem('page'+cur_state);
        storage_arrange();
        return;
    }

    if(cur_state != 3) {
        pick_list.forEach(pick => {
            if (pick == btn_obj)
                pick.style.border = 'solid 3px #333333';
            else
                pick.style.border = 'solid 0px #333333';
        });
        sessionStorage.setItem('page'+cur_state,btn_id);
    }
    else {
        //case 0 : no selected
        if(sessionStorage.getItem('page'+cur_state) == null) {
            pick_list.forEach(pick => {
                if (pick == btn_obj)
                    pick.style.border = 'solid 3px #333333';
                else
                    pick.style.border = 'solid 0px #333333';
            });
            sessionStorage.setItem('page'+cur_state,btn_id);
            return;
        }
        //case 1 : 1 selected
        if(sessionStorage.getItem('page'+cur_state+'_2') == null) {
            //case 1-1 : 모르는 사람인데? selected in first or second
            if(sessionStorage.getItem('page'+cur_state) == 'p6' || btn_id == 'p6') {
                if(!confirm("이 항목은 복수 선택이 불가능한 항목입니다.\n선택을 초기화 하시겠습니까?")) {
                    return;
                }
                // case 1-2-1 : 모르는 사람인데? ReSelect -> 위에서 처리됨
                // case 1-2-2 : 일반 선택지 selected -> confirm 해서 초기화
                reset_pick_css();
                sessionStorage.removeItem('page'+cur_state);
                return;                
            }
            //case 1-2 : 일반 선택지 2개 선택됨
            else {
                pick_list.forEach(pick => {
                    if ((pick == btn_obj) || (sessionStorage.getItem('page'+cur_state) == pick.attributes[0].value))
                        pick.style.border = 'solid 3px #333333';
                    else
                        pick.style.border = 'solid 0px #333333';
                });
                sessionStorage.setItem('page'+cur_state+"_2",btn_id);
                return;
            }
        }
        //case 2 : 2 selected
        //case 2-1 : second pick reSelected
        if(btn_id == sessionStorage.getItem('page'+cur_state+"_2")) {
            btn_obj.style.border = 'solid 0px #333333';
            sessionStorage.removeItem('page'+cur_state+"_2");
            return;
        }
        //case 2-2 : 특수 버튼 selected
        if(btn_id == 'p6') {
            if(!confirm("이 항목은 복수 선택이 불가능한 항목입니다.\n선택을 초기화 하시겠습니까?")) {
                return;
            }
            reset_pick_css();
            sessionStorage.removeItem('page'+cur_state);
            sessionStorage.removeItem('page'+cur_state+"_2");
            return;                
        }
        //case 2-3 : another pick selected
        pick_list.forEach(pick => {
            if (sessionStorage.getItem('page'+cur_state) == pick.attributes[0].value)
                pick.style.border = 'solid 0px #333333';
        });
        sessionStorage.removeItem('page'+cur_state);
        storage_arrange();
        btn_obj.style.border = 'solid 3px #333333';
        sessionStorage.setItem('page'+cur_state+"_2",btn_id);
    }
}

function reset_pick_css() {
    pick_list.forEach(pick => {
        pick.style.border = 'solid 0px #333333';
    });
}

function storage_arrange() {
    var first = 'page'+cur_state;
    var second = 'page'+cur_state+"_2";
    //second만 있을때
    if(sessionStorage.getItem(first) == null && sessionStorage.getItem(second) != null) {
        sessionStorage.setItem(first,sessionStorage.getItem(second));
        sessionStorage.removeItem(second);
    }
}

function reset_storage() {
    sessionStorage.removeItem('cur_state');
    sessionStorage.removeItem('name');
    for(let i = 1;i <= 7;i++) {
        sessionStorage.removeItem('page'+i);
        sessionStorage.removeItem('page'+i+'_2');
    }
}