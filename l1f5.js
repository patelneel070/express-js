var erp = require("express")
var app = erp()
app.get('/id/:id/name/:name',(req,res)=>{
    res.send(req.params.name)   
})
app.listen(1234,()=>{
    console.log("he ke ni")
})