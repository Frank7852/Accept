const buttonNo = document.getElementById('no');
const buttonYes = document.getElementById('yes');
const message = document.getElementById('message');
let moveCount = 0;

buttonNo.addEventListener('mousemove', moveButton);
buttonYes.addEventListener('click', displayMessage);

function moveButton(event) {
    const rect = buttonNo.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;

    if (Math.abs(offsetX) < 50 && Math.abs(offsetY) < 50 && moveCount < 9) {
        const maxX = window.innerWidth - rect.width - 50;
        const maxY = window.innerHeight - rect.height - 50;
        const x = Math.max(0, Math.min(maxX, Math.random() * window.innerWidth));
        const y = Math.max(0, Math.min(maxY, Math.random() * window.innerHeight));

        buttonNo.style.position = 'absolute';
        buttonNo.style.left = `${x}px`;
        buttonNo.style.top = `${y}px`;
        moveCount++;
    } else if (moveCount >= 9) {
        buttonNo.removeEventListener('mousemove', moveButton);
        buttonNo.classList.add('disappearing');
        setTimeout(() => {
            buttonNo.remove();
        }, 1000);
    }
}

function displayMessage() {
    message.textContent = 'I love you, snack later?';
    buttonYes.remove();
}
