const rulesButton = document.getElementById('rules-button');
const rulesPopup = document.getElementById('rules-popup');
const closeButton = document.querySelector('.close-button');

rulesButton.addEventListener('click', () => {
    rulesPopup.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    rulesPopup.style.display = 'none';
});
function gamepage() {
    window.location.href='index.html';
}
