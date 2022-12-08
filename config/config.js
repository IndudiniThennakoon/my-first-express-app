const mysql = require("mysql");


const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"customer",
    port:"3306"
});

db.connect((err)=>{
    if(err){
        throw err;
    }

    console.log("Connected to the database");
});

module.exports = db;