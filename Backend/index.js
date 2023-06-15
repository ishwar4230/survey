const express = require('express');
const cors = require("cors");

require("./db/config");
const testing = require("./db/testing");
const app = express();

// app.get("/",(req,resp)=>{
//     resp.send("app is kk...")
// });
// const data =  testing.find();
// console.warn(data);
app.use(express.json());
app.use(cors());
app.post("/register",async (req,resp)=>{
    let test=new testing(req.body);
    let result= await test.save();
    resp.send(result);
})  

app.listen(5000);