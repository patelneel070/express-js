var erp = require("express")
var app = erp()
app.use(erp.urlencoded({extended:true}))
app.use(erp.static('../public',{index:'t2.html'}))
app.post('/process-post',(req,res)=>{
    name1=req.body.firstname
    pass=req.body.password
    gender=req.body.r1

    res.send(`<h1 style="color:red">${name1}</h1><br><h1 style="color:green">${pass}</h1><br><h1 style="color:black">${gender}</h1><br>`)
})
app.listen(1230,()=>{
    console.log("Daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaan")
})