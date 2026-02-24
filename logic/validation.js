document.addEventListener('DOMContentLoaded', function() {
    const pageInput = document.querySelector('input[placeholder="페이지 입력하세요"]');
    const openButton = document.querySelector('button.group'); // Assuming this is the "펼치기" button

    if (pageInput) {
        pageInput.addEventListener('input', function(e) {
            // 입력 값에서 숫자가 아닌 모든 문자를 제거합니다.
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
        });
    }

    if (openButton) {
        openButton.addEventListener('click', function(e) {
            if (!pageInput || pageInput.value.trim() === '') {
                alert('메뉴 페이지를 입력해주세요!');
                e.preventDefault(); // Prevent default button action if validation fails
            } else {
                const mainBook = document.querySelector('#mainBook');
                if (mainBook) {
                    mainBook.classList.add('book-open'); // Trigger book cover and page animation
                    mainBook.classList.add('sparkle-effect'); // Trigger sparkling effect

                    // Delay navigation until all animations are likely complete
                    setTimeout(() => {
                        window.location.href = 'page/result.html';
                    }, 2700); // Increased duration to accommodate all animations
                } else {
                    window.location.href = 'page/result.html'; // Fallback if mainBook not found
                }
            }
        });
    }
});
