var erp = require("express")
var app = erp()
app.get('/:id',(req,res)=>{
    res.send(req.params)
})
app.listen(1234,()=>{
    console.log("he ke ni")
})