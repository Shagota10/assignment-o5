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
        })
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
        })
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
document.addEventListener('DOMContentLoaded', () => {


    const favoritesCountSpan = document.getElementById('favorites-count');
    const heartIcons = document.querySelectorAll('.icon-heart');
    let favoriteCount = 0;

    heartIcons.forEach(icon => {
        icon.addEventListener('click', () => {

            icon.classList.toggle('active');


            if (icon.classList.contains('active')) {
                favoriteCount++;
            } else {
                favoriteCount--;
            }


            favoritesCountSpan.textContent = favoriteCount;
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {

    const cardSection = document.querySelector('.card-section');
    const historyList = document.querySelector('.history-list');
    const clearBtn = document.querySelector('.clear-btn'); '
    let coinBalance = 100;
    const callCost = 20;

    cardSection.addEventListener('click', (event) => {
        const card = event.target.closest('.card');
        if (!card) return;

        const name = card.querySelector('.card-name-en').textContent;
        const number = card.querySelector('.card-number').textContent;


        if (event.target.closest('.call-btn')) {

            if (coinBalance >= callCost) {

                coinBalance -= callCost;


                alert(`Calling ${name} at ${number}. Remaining coins: ${coinBalance}`);


                addHistoryItem(name, number);

            } else {

                alert(`You have insufficient coins to make this call. Current balance: ${coinBalance}`);
            }
        }
    });
    clearBtn.addEventListener('click', () => {
        historyList.innerHTML = '';
        alert("Call history cleared.");
    });

    /**
   * Adds a new item to the call history list.
   * @param {string} serviceName - The name of the service.
   * @param {string} serviceNumber - The number of the service.
   */
    function addHistoryItem(serviceName, serviceNumber) {
        const now = new Date();
        const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });


        const historyItem = document.createElement('div');
        historyItem.classList.add('history-item');
        historyItem.innerHTML = `
            <div class="history-info">
                <p>${serviceName}</p>
                <p class="history-number">${serviceNumber}</p>
            </div>
            <p class="history-time">${time}</p>
        `;


        historyList.prepend(historyItem);
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const cardSection = document.querySelector('.card-section');
    const historyList = document.querySelector('.history-list');
    const clearBtn = document.querySelector('.clear-btn');


    const copyCountSpan = document.getElementById('copy-count');
    let copyCount = 0;
    let coinBalance = 100;
    const callCost = 20;

    cardSection.addEventListener('click', (event) => {
        const card = event.target.closest('.card');
        if (!card) return;

        const name = card.querySelector('.card-name-en').textContent;
        const number = card.querySelector('.card-number').textContent;

        if (event.target.closest('.copy-btn')) {

            navigator.clipboard.writeText(number).then(() => {

                alert(`Copied: ${number}`);
                copyCount++;
                copyCountSpan.textContent = copyCount;
            }).catch(err => {

                console.error('Could not copy text: ', err);
                alert('Failed to copy. Please try again.');
            });
        }

        if (event.target.closest('.call-btn')) {
            if (coinBalance >= callCost) {
                coinBalance -= callCost;
                alert(`Calling ${name} at ${number}. Remaining coins: ${coinBalance}`);
                addHistoryItem(name, number);
            } else {
                alert(`You have insufficient coins to make this call. Current balance: ${coinBalance}`);
            }
        }
    });

    clearBtn.addEventListener('click', () => {
        historyList.innerHTML = '';
        alert("Call history cleared.");
    });

    function addHistoryItem(serviceName, serviceNumber) {
        const now = new Date();
        const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        const historyItem = document.createElement('div');
        historyItem.classList.add('history-item');
        historyItem.innerHTML = `
            <div class="history-info">
                <p>${serviceName}</p>
                <p class="history-number">${serviceNumber}</p>
            </div>
            <p class="history-time">${time}</p>
        `;

        historyList.prepend(historyItem);
    }
});