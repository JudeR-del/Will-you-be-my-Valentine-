const messages = [
    "Are you sure?",
    "Really sure??",
    "sure nana?",
    "Bilbilon :<<<",
    "yes or ako?",
    "If you say no, aw, anay..",
    "Mas chada daw e press ang 'yes'.",
    "chelsea ba..",
    "Ok fine, i'm sad na...",
    "chzzz, say yes please! (namugos najud) ❤️"
    "sure najud na?"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
