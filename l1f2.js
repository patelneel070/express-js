var erp = require("express")
var app = erp()
app.get('/',(req,res)=>{
    res.set('content-type','text/html') //only needed if we use write instead of send
    res.write("<h1>Hello</h1>")
    // res.send("How Are You Zoo??")
    res.send()
})
app.get("/about",(req,res)=>{
    res.send("About Page")
})
app.listen(5008,()=>{
    console.log("Daaaaaaan")
})