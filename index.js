document.addEventListener('DOMContentLoaded', () => {

    const likeButton = document.querySelector('.heart-button');
    const likeCountSpan = document.getElementById('like-count');
    const coinButton = document.querySelector('.coin-button');
    const coinCountSpan = document.getElementById('coin-count');


    let likeCount = parseInt(likeCountSpan.textContent, 10);
    let coinCount = parseInt(coinCountSpan.textContent, 10);


    likeButton.addEventListener('click', () => {
        likeCount++;
        likeCountSpan.textContent = likeCount;
    });

    coinButton.addEventListener('click', () => {

        console.log('Coin button clicked!');
    });
});
document.addEventListener('DOMContentLoaded', () => 
    

    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        setTimeout(() => {
            heroContent.style.transition = 'opacity 1s ease-in-out';
            heroContent.style.opacity = '1';
        }, 100);
    });