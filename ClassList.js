/*
    Page 클래스
    멤버 변수 :
    number - 페이지번호
        100의 자리 : viewType
        10,1의 자리 : pageNumber
        => 둘을 한번에 표현하게 사용하기 vs 따로따로 구분하기
        ==> js에서는 class의 생성자를 하나만 사용 가능하며 인자를 두개 받아오는 방식을 사용하여도 무관?
        ==> 둘을 한번에 표현하면 직관적으로 보기 편하겠지만, 한 번에 pageNumber를 관리하기에 힘들지않을까? => pageNumber의 List를 만들어 버리는 방법도 있긴한데..
    content - 내부의 글 내용, 컴포넌트 들을 저장하는 클래스 객체
    viewType - 어떤 형태의 페이지 인지 -> number의 10의 자리수
        0 : textview
        1 : textview + image
        2 : video
        3 : textview + checkList(radio type)
        4 : textview + inputBox
        5 : textview + btn + logo
        // 컴포넌트 종류 : https://kande.tistory.com/3
*/
export class Page {
    number;
    content;
    viewType;

    constructor(number) {
        this.number=number;
        this.viewType = viewTypeList[number];
        this.content = new Content();
    }
}
/*
    Content 클래스
    멤버 변수 :
    title : 글 내용?
    img : 이미지
    video : 비디오
    btn : 버튼
*/
export class Content {
    title;
    img = {};
    video = {};
    btn = {};
    constructor() {}
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

let viewTypeList = [
    0, // 1부터 시작
    0,0,1,1,0,0,5,0,4,3,3,3,3,3,3,1,0
]

let contentList = [];
for (var i = 0; i < 8; i++) {
    contentList[i] = new Content();
    contentList[i].title = titles[i];
    console.log(titles[i]);
}

var pageList = {
    '소개01': 1,
    '소개02': 2,
    '소개03': 3,
    '소개04': 4,
    '소개05': 5,
    '소개06': 6,
    '설문01': 7,
    '설문02': 8,
    '이름': 9,
    '장소': 10,
    '날씨': 11,
    '인물': 12,
    '행동': 13,
    '힘든 순간': 14,
    '현생만족도': 15,
    '프린트 문구': 16,
    '클로징': 17,
};

export var pageList2 = {
    '소개01': new Page(1),
    '소개02': new Page(2),
    '소개03': new Page(3),
    '소개04': new Page(4),
    '소개05': new Page(5),
    '소개06': new Page(6),
    '설문01': new Page(7),
    '설문02': new Page(8),
    '이름': new Page(9),
    '장소': new Page(10),
    '날씨': new Page(11),
    '인물': new Page(12),
    '행동': new Page(13),
    '힘든 순간': new Page(14),
    '현생만족도': new Page(15),
    '프린트 문구': new Page(16),
    '클로징': new Page(17),
}

for (var i=1;i=18;i++) {
    pageList2[i].content.title = txtList[i];
}

function txt_change() {
var pageNumber = 1;
    window.onload = function() {
        var bt = document.getElementById('text1');

        bt.addEventListener('click', function(ev){
            $(".text").text()
            pageNumber = pageNumber + 1;
        })
    }
}