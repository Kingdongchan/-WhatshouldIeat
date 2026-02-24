document.addEventListener('DOMContentLoaded', function() {
    const pageInput = document.querySelector('input[placeholder="페이지 입력하세요"]');

    if (pageInput) {
        pageInput.addEventListener('input', function(e) {
            // 입력 값에서 숫자가 아닌 모든 문자를 제거합니다.
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
        });
    }
});
