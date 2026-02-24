 document.addEventListener('DOMContentLoaded', function() {
    const openButton = document.querySelector('button.group');

    if (openButton) {
        openButton.addEventListener('click', function() {
            window.location.href = 'page/result.html';
        });
    }
}); 
