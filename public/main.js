const textElement = document.getElementById('typing-text');
const message = "Stop Getting Hacked.";
let i = 0;

function typeWriter() {
    if (i < message.length) {
        textElement.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 120);
    }
}

textElement.addEventListener('mouseover', () => {
    textElement.style.textShadow = "2px 2px #ff0000, -2px -2px #0000ff";
});
textElement.addEventListener('mouseout', () => {
    textElement.style.textShadow = "0 0 10px var(--primary)";
});

window.onload = typeWriter;
