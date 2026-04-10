var erp = require("express")
var app = erp()
var obj = [{
    "name":"Jatin","age":20
},{
    "name":"srks","age":24
},{
    "name":"dear_maithil","age":33
}]
var obj1 =obj.sort((x,y)=>
    y.age-x.age
)
app.get("/",(req,res)=>{
    res.send(obj)
})
app.get("/sorted",(req,res)=>{
    res.send(obj1)
})
app.listen(3001,()=>{
    console.log("Daaaaaaaaaan")
})