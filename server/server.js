const express = require("express");
const cors = require("cors");
const app = express();
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
let db = new sqlite3.Database('data.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the database.');
});

app.use(express.static("public"));
app.get("/", (req, res) => {
    //res.render('main');
    res.sendFile(path.join(__dirname + '/public/index.html'));
});
app.get("/contact", (req, res) => {
    //res.render('main');
    res.sendFile(path.join(__dirname + '/public/contact.html'));
});
app.post("/contact", (req, res) => {
    // console.log(req.body);
    const contact = {
        lastName: req.body.lastName,
        firstName: req.body.firstName,
        email: req.body.email,
        phone: req.body.phone
    }
    let insert = "INSERT INTO contacts (last_name, first_name, email, phone) VALUES";
    let values = `('${contact.lastName}', '${contact.firstName}', '${contact.email}', '${contact.phone}')`;
    insert += values;
    db.exec(insert);
    res.send({message: "contact received: "});
});
app.get("/contacts", (req, res) => {
    db.all("SELECT * FROM contacts", (err, rows) => {
        res.send(rows)

    })
});
const PORT = 3001;
app.listen(PORT, () => {
    console.log('Server is running at port '+PORT);
});