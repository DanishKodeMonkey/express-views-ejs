const express = require('express');
const path = require('node:path');
const assetPath = path.join(__, 'public');

const app = express();

app.use(express.static(assetPath));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const links = [
    {
        href: '/',
        text: 'Home',
    },
    {
        href: 'about',
        text: 'About',
    },
];
app.get('/', (req, res) => {
    res.render('index', { links: links });
});

app.get('/about', (req, res) => {
    res.render('about', { about: about });
});

const PORT = 3000;
app.listen(PORT, () => console.log('Express app now listening on port', PORT));
