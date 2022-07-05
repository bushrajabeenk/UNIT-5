const express = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
const { validate, ValidationError, Joi } = require('express-validation');

const postValidation = {
    body: Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required()
    })
  }

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());



app.get("/",(req,res)=>{
    res.send("Hello World!")
})

app.post("/user/create",(req,res)=>{
    const id = uuidv4();
    req.body = {...req.body,id}
    fs.readFile("./db.json","utf-8",(err,data)=>{
        const parsed = JSON.parse(data);
        parsed.users = [...parsed.users,req.body];

        fs.writeFile("./db.json",JSON.stringify(parsed),{encoding:"utf-8"},()=>{
            res.status(201).send({status:"User Created",id:id});
        })
    })
})


app.post("/user/login",validate(postValidation, {}, {}),(req,res)=>{
    console.log(req.body.username,req.body.password)
    const token = uuidv4();
    fs.readFile("./db.json","utf-8",(err,data)=>{
        const parsed = JSON.parse(data);
        parsed.users.map((el)=>{
            if(el.username==req.body.username && el.password==req.body.password){
                el.token=token;
            }
        })
        parsed.users = [...parsed.users];

        fs.writeFile("./db.json",JSON.stringify(parsed),{encoding:"utf-8"},()=>{
            res.status(201).send("Login successfull");
        })
    })
})

app.use(function(err, req, res, next) {
    if (err instanceof ValidationError) {
      return res.status(400).send("please provide  username and password")
    }
    return res.status(500).json(err)
  })


  app.post("/user/logout",(req,res)=>{
    fs.readFile("./db.json","utf-8",(err,data)=>{
        const parsed = JSON.parse(data);
        parsed.users.map((el)=>{
            if(el.username==req.body.username && el.password==req.body.password){
                el.token="";
            }
        })
        parsed.users = [...parsed.users];

        fs.writeFile("./db.json",JSON.stringify(parsed),{encoding:"utf-8"},()=>{
            res.status(200).send("User logged out successfully");
        })
    })
}) 

app.get("/votes/voters",(req,res)=>{
    fs.readFile("./db.json","utf-8",(err,data)=>{
        const parsed = JSON.parse(data);
        const voters = parsed.users.filter(el => el.role=="voter")
        res.send(voters);
    })
})

app.get("/votes/party/:party",(req,res)=>{
    const {party} = req.params;
    fs.readFile("./db.json","utf-8",(err,data)=>{
        const parsed = JSON.parse(data);
        const parties = parsed.users.filter(el => el.party==party)
        res.send(parties);
    })
})

app.post("/votes/vote/:name",(req,res)=>{
    const {name} = req.params; 
    let flag = false;
    fs.readFile("./db.json","utf-8",(err,data)=>{
        const parsed = JSON.parse(data);
        parsed.users.map((el)=>{
            if(el.name==name){
                flag = true;
                el.votes = Number(el.votes)+1;
            }
        })
        if(!flag) res.send("User not found");
        else{
            parsed.users = [...parsed.users];

            fs.writeFile("./db.json",JSON.stringify(parsed),{encoding:"utf-8"},()=>{
                res.status(200).send({status:"Voted successfully",name:name});
            })
        }
       
    })
})


var PORT=PORT || 8080 ;

app.listen(PORT,()=>{
    console.log("Server is started on http://localhost:8080")
})