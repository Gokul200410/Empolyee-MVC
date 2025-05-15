const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const empolyeeRoutes = require('./routes/empolyeeRoutes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // For static files
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', empolyeeRoutes);

const PORT = 4005;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
