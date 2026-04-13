expr=require("express")
app=expr()
app.get('/user/:uid',(req,res)=>{
    uid=req.params.uid
    name=req.query.name
    age=req.query.age
    // res.json({uid,name,age})
    res.json({'message':'Data Received','Params':{uid} ,'query':{name,age}})
})
app.listen(5678,()=>{console.log("HE KE NI")})
