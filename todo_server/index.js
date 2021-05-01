const express=require ("express")
const service=require('./service')
const cors=require("cors");
const app=express();
app.use(express.json());

app.use(cors({origin:"http://localhost:3000"}))

app.get("/",(req,res)=>{
    service.getTodo().then((data)=>{
        res.json(data)
    })
})


app.post("/post",(req,res)=>{
    service.getPost(req).then(data =>{
        res.json(data)
    })

})

app.delete("/delete/:id",(req,res)=>{
    service.getDelete(req.params.id).then(data =>{
        res.json(data)
    })

})
app.put("/put/:id",(req,res)=>{
    service.getPut(req.params.id,req).then(data =>{
        res.json(data)
    })
})


app.listen(3500,()=>{
    console.log("port 3500 listening");
})