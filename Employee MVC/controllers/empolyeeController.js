const path = require('path');
const fs = require('fs');

const dataFilePath = path.join(__dirname, '../data/empolyee.json');

// Helper to read file
function readempolyeeData() {
    if (!fs.existsSync(dataFilePath)) {
        fs.writeFileSync(dataFilePath, JSON.stringify([]));
    }
    const data = fs.readFileSync(dataFilePath);
    return JSON.parse(data);
}

// Controller functions
exports.getAllempolyee = (req, res) => {
    const empolyee = readempolyeeData();
    res.render('index', { empolyee });
};

exports.submitempolyee = (req, res) => {
    const { name, age, designation, id, salary, experience } = req.body;

    const newempolyee = {
        id: id,
        name,
        age,
        designation,
        salary,
        experience
    };

    const empolyee = readempolyeeData();
    const existing = empolyee.find(s => s.id == id);

    if (existing) {
        return res.status(400).send('id already exists');
    }

    empolyee.push(newempolyee);
    fs.writeFileSync(dataFilePath, JSON.stringify(empolyee, null, 2));

    res.redirect('/');
};

exports.deleteempolyee = (req, res) => {
    const id = req.params.id;
    let empolyee = readempolyeeData();

    empolyee = empolyee.filter(empolyee => empolyee.id != id);

    fs.writeFileSync(dataFilePath, JSON.stringify(empolyee, null, 2));

    res.redirect('/');
};

exports.searchempolyee = (req, res) => {
    const id = req.query.id;
    const empolye = readempolyeeData();
    const empolyee = empolye.find(empolyee => empolyee.id == id);

    if (empolyee) {
        res.render('empolyee-found', { empolyee });
    } else {
        res.status(404).send('Empolyee Not Found');
    }
};
