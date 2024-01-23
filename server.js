const express = require ('express');
const bodyparser = require('body-parser');
const dotenv = require('dotenv');
const connection = require('./config/db')
dotenv.config();


const app = express();

app.use(express.static('public'));

app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", (req,res)=>{
    res.redirect('index.html');
});

app.post('/submit-form', (req, res) => {
    const { name, email, phoneno, age } = req.body;

    // Insert data into the registerForm table
    connection.query('INSERT INTO registerForm (name, email, phoneno, age) VALUES (?, ?, ?, ?)', [name, email, phoneno, age], (err, results) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).send('Internal Server Error');
        } else {
            console.log('Data inserted successfully');
            res.redirect('success.html');
        }
    });
});

app.listen(process.env.Port, ()=>{
    console.log(`Server is running on http://localhost:${process.env.Port}`)
})