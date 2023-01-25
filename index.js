const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"Never$give$up999",
    database:"user_details"
})


db.connect((err) => {
    if (err) {
        console.log("Database Connection Failed !!!", err);
    }else{
        console.log("connected to Database");
    }
});
 
app.post("/register",(req,res)=>{

    const username = req.body.username;
    const password = req.body.password;


    db.query("INSERT INTO users (Username,Password) VALUES (?,?)",  [username, password],(err,result)=>{
        console.log(err);
    })
})

app.post("/login",(req,res)=>{

    const username = req.body.username;
    const password = req.body.password;
// console.log(username);

    db.query("SELECT * FROM users where Username = ? AND Password = ?",  [username, password],(err,result)=>{
        if(err){
            res.send({err: err})
        }
        if (result.length>0) {
            res.send(result)
        }else{
            res.send({message:"Wrong Combination"})
        }
    })
})
 


app.listen(3001, ()=>{
    console.log("running server");
})