const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/captcha-error', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'captchamethods', 'captcha.html'));
});

app.get('/bookmarklets-method', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'bookmarklets', 'method.html'));
});

app.listen(PORT, () => {
    console.log(`Server live on ${PORT}`);
});
