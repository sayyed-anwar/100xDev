import  express from "express" ;

const app = express();

app.get("/" , (req, res)=>{
res.send("working!!!") ;
})

app.listen(3002, ()=>{
console.log("server started")
})
