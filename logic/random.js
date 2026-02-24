// 음식 메뉴 목록
const menus = [
    "비빔밥", "김치찌개", "된장찌개", "칼국수", "수제비", "라면", "돈까스", "초밥", "파스타", "피자", "햄버거", "샌드위치",
    "타코", "쌀국수", "마라탕", "떡볶이", "순대", "튀김", "김밥", "제육덮밥", "오징어덮밥", "카레", "짜장면", "짬뽕"
];

// 페이지 로드 시, 또는 다시하기 시에 랜덤 메뉴를 설정하는 함수
function setRandomMenu() {
    // 결과를 표시할 요소를 가져옵니다.
    const resultElement = document.getElementById('result-text');

    // 메뉴 목록에서 랜덤 인덱스를 선택합니다.
    const randomIndex = Math.floor(Math.random() * menus.length);

    // 선택된 메뉴를 결과 요소에 표시합니다.
    if(resultElement) {
        resultElement.innerText = menus[randomIndex];

        // 텍스트에 약간의 애니메이션 효과를 줍니다.
        resultElement.classList.remove('scale-100');
        resultElement.classList.add('scale-110');
        setTimeout(() => {
            resultElement.classList.remove('scale-110');
            resultElement.classList.add('scale-100');
        }, 200);
    }
}

// "다시하기" 버튼을 눌렀을 때의 동작을 정의하는 함수
function resetGame() {
    // 메인 페이지(index.html)로 이동합니다.
    window.location.href = '../index.html';
}

// 페이지가 로드될 때 랜덤 메뉴를 설정합니다.
window.onload = setRandomMenu;
