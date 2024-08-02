const express = require('express');
const path = require('node:path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { message: 'Oh my! Amazing! ' });
});

const PORT = 3000;
app.listen(PORT, () => console.log('Express app now listening on port', PORT));
