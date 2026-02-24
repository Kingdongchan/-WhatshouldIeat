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
                const bookCover = document.querySelector('#bookCover');
                const whiteOverlay = document.querySelector('#whiteOverlay');

                if (mainBook && bookCover && whiteOverlay) {
                    bookCover.classList.add('book-open'); // Open the book cover

                    // Generate and animate multiple pages
                    const numPages = 25; // 20-30 pages
                    const pagesContainer = document.createElement('div');
                    pagesContainer.style.position = 'absolute';
                    pagesContainer.style.inset = '0';
                    pagesContainer.style.perspective = '1000px';
                    pagesContainer.style.transformStyle = 'preserve-3d';
                    pagesContainer.style.pointerEvents = 'none';
                    mainBook.appendChild(pagesContainer);

                    for (let i = 0; i < numPages; i++) {
                        const page = document.createElement('div');
                        page.classList.add('dynamic-page');
                        const randomRotateZ = Math.random() * 360 - 180; // -180 to 180 degrees
                        const randomTranslateX = (Math.random() * 400 - 200); // -200 to 200px
                        const randomTranslateY = (Math.random() * 400 - 200); // -200 to 200px
                        const animationDelay = Math.random() * 0.8; // Staggered start
                        const animationDuration = 1.5 + Math.random(); // Vary duration

                        page.style.setProperty('--random-rotateZ', `${randomRotateZ}deg`);
                        page.style.setProperty('--random-translateX', `${randomTranslateX}px`);
                        page.style.setProperty('--random-translateY', `${randomTranslateY}px`);
                        page.style.setProperty('--animation-delay', `${animationDelay}s`);
                        page.style.setProperty('--animation-duration', `${animationDuration}s`);

                        // Use a custom property for animation delay to ensure it's applied before adding the class
                        page.style.animationDelay = `${animationDelay}s`;
                        page.style.animationDuration = `${animationDuration}s`;

                        pagesContainer.appendChild(page);
                        // Trigger animation after a small delay to ensure CSS variables are applied
                        setTimeout(() => {
                            page.classList.add('spread-animation');
                        }, 50); 
                    }

                    // Coordinate timings
                    const pageAnimationDuration = 1.5 + 0.8; // Max duration + max delay from CSS
                    const whiteExpandDelay = pageAnimationDuration + 0.5; // After pages have spread a bit
                    const navigationDelay = whiteExpandDelay + 0.7; // After white expand animation

                    setTimeout(() => {
                        whiteOverlay.classList.add('white-expand-animation');
                    }, whiteExpandDelay * 1000);

                    setTimeout(() => {
                        window.location.href = 'page/result.html';
                    }, navigationDelay * 1000);

                } else {
                    window.location.href = 'page/result.html'; // Fallback if elements not found
                }
            }
        });
    }
});
