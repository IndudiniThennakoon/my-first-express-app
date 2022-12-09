const env = process.env;
const mysql = require("mysql");


const db = mysql.createConnection({
    host:env.db_host,
    user:env.db_user,
    password:env.db_password,
    database:env.db_database,
    port:env.db_port
});

db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("Connected to the database");
});

module.exports = db;