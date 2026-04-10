var exp =require("express")
var app = exp()
app.get('/',(req,res)=>{
    res.set("Content-type","text/html")
    res.send("<h1>Hello</h1>")
    // res.write() cant be be written after res.send it stops the server
})
app.listen(5006,()=>{
    console.log("Server Connected")
})