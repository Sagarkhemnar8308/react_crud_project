const express=require('express');
const cors = require('cors');
const app=express();
const db= require('./db/db');
app.use(cors());
const PORT=4300;
const userData= require('./router/user.routes');

app.use('/',userData);

app.get('/',(req,res)=>{
res.send("Hello world");
});

app.listen(PORT,()=>{
console.log("Server is started on ..................."+PORT);
});

