expr=require("express")
app=expr()
addname=(req,res,next)=>{
    req.name="zooo"
    console.log("NAme Added")
    next()
}
addSubject=(req,res,next)=>{
    req.sub="DS"
    console.log("Subject Added")
    next()
}
addmarks=(req,res,next)=>{
    req.marks=20+5
    console.log("Marks updated")
    next()
}
// app.use('/data',addname,addSubject,addmarks)
app.get('/data/1',addname,addSubject,addmarks,(req,res)=>{
    res.send("Name of Student= "+req.name+"Subject= "+req.sub+" Final Marks = "+req.total)
})
app.get('/data/2',(req,res)=>{
    res.send("Name of Student= "+req.name)
})
app.listen(5000)