console.log("javascript running");
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
document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        // Fade-in effect
        heroContent.style.opacity = '0';
        setTimeout(() => {
            heroContent.style.transition = 'opacity 1s ease-in-out';
            heroContent.style.opacity = '1';
        }, 0); // ✅ Added 0 delay to ensure fade-in runs correctly
    }

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

    // Handle Call buttons
    callButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const card = event.target.closest('.card');
            const serviceName = card.querySelector('.card-name').textContent;
            const number = card.querySelector('.number').textContent;

            addHistoryItem(serviceName, number);
        });
    });

    // Handle Copy buttons
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

    // Handle Clear History button
    if (clearHistoryBtn) {
        clearHistoryBtn.addEventListener('click', () => {
            historyList.innerHTML = '';
        });
    }

    // Handle Like icons
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
    const heartIcon = document.querySelector('.heart-icon');

    if (heartIcon) {
        heartIcon.addEventListener('click', () => {
            heartIcon.classList.toggle('liked');
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {

    const cardSection = document.querySelector('.card-section');
    const historyList = document.querySelector('.history-list');
    const clearBtn = document.querySelector('.clear-btn');
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
document.addEventListener('DOMContentLoaded', () => {

    const addCallToHistory = (name, number) => {
        const historyList = document.querySelector('.call-history-list');
        const now = new Date();
        const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

        const historyItem = document.createElement('div');
        historyItem.classList.add('history-item');
        historyItem.innerHTML = `
            <span class="history-name">${name}</span>
            <span class="history-number">${number}</span>
            <span class="history-time">${time}</span>
        `;
        historyList.prepend(historyItem);
    };

    document.querySelectorAll('.copy-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const numberToCopy = event.currentTarget.dataset.number;
            navigator.clipboard.writeText(numberToCopy).then(() => {

                const originalText = button.innerHTML;
                button.innerHTML = '<i class="fas fa-check"></i> Copied!';
                setTimeout(() => {
                    button.innerHTML = originalText;
                }, 1500);
            }).catch(err => {
                console.error('Failed to copy: ', err);
                alert('Failed to copy number. Please try again or copy manually.');
            });
        });
    });
    document.querySelectorAll('.call-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const numberToCall = event.currentTarget.dataset.number;
            const cardTitle = event.currentTarget.closest('.card').querySelector('.card-title').textContent;


            addCallToHistory(cardTitle, numberToCall);


            window.location.href = `tel:${numberToCall}`;


        });
    });


    document.querySelectorAll('.favorite-icon').forEach(iconContainer => {
        iconContainer.addEventListener('click', (event) => {
            const icon = event.currentTarget.querySelector('i');
            event.currentTarget.classList.toggle('favorited'); // 

            if (event.currentTarget.classList.contains('favorited')) {
                icon.classList.remove('far', 'fa-heart');
                icon.classList.add('fas', 'fa-heart');
            } else {
                icon.classList.remove('fas', 'fa-heart');
                icon.classList.add('far', 'fa-heart');
            }
        });
    });


    document.querySelector('.clear-history-btn').addEventListener('click', () => {
        const historyList = document.querySelector('.call-history-list');
        if (confirm('Are you sure you want to clear all call history?')) {
            historyList.innerHTML = '';
        }
    });


});