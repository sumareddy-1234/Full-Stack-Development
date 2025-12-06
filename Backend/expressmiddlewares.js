import express from 'express';
import bodyParser from 'body-parser';
const app=express();
app.use(express.json());
app.use(bodyParser.json());
app.get('/get-user',(req,res)=>{
    console.log("It is working");
    res.send("api success");
})
app.put('/edit-user',(req,res)=>{
    let mydata=req.body;
    console.log(mydata);
    //logic
    res.end("data edited");
})
app.post('/add-user',(req,res)=>{
    let data=req.body;
    console.log(data);
    //logic to add data into your database
    res.send("data added");
})
app.listen(7007,()=>{
    console.log("server running at port 7007")
});
