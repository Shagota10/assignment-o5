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
        }
        document.addEventListener('DOMContentLoaded', () => {
            const historyList = document.getElementById('history-list');
            const callButtons = document.querySelectorAll('.call-btn');
            const copyButtons = document.querySelectorAll('.copy-btn');
            const clearHistoryBtn = document.querySelector('.btn-clear-history');
            const likeIcons = document.querySelectorAll('.like-icon');

            const addHistoryItem = (serviceName, number) => {
                const now = new Date();
                const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

                const historyItem = document.createElement('div');
                historyItem.classList.add('history-item');
                historyItem.innerHTML = `
            <div class="history-item-details">
                <span class="history-item-name">${serviceName}</span>
                <span class="history-item-time">${time}</span>
            </div>
            <p>${number}</p>
        `;
                historyList.prepend(historyItem);
            };

            callButtons.forEach(button => {
                button.addEventListener('click', (event) => {
                    const card = event.target.closest('.card');
                    const serviceName = card.querySelector('.card-name').textContent;
                    const number = card.querySelector('.number').textContent;

                    addHistoryItem(serviceName, number);
                });
            });

            copyButtons.forEach(button => {
                button.addEventListener('click', (event) => {
                    const numberToCopy = event.target.dataset.number || event.target.closest('button').dataset.number;
                    navigator.clipboard.writeText(numberToCopy)
                        .then(() => {
                            alert(`Copied: ${numberToCopy}`);
                        })
                        .catch(err => {
                            console.error('Failed to copy text: ', err);
                        });
                });
            });

            clearHistoryBtn.addEventListener('click', () => {
                historyList.innerHTML = '';
            });

            likeIcons.forEach(icon => {
                icon.addEventListener('click', () => {
                    icon.classList.toggle('liked');
                });
            });
        });