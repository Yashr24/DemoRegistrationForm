const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const connection = mysql.createConnection({
    host: process.env.Host,
    user: process.env.User,
    password: process.env.Password,
    database: process.env.Database,
})

connection.connect((error)=>{
    if(error) throw error


    console.log("DB connected Successful");
})


module.exports = connection;
