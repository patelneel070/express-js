expr=require("express")
app=expr()
cb=(req,res,next)=>{
    console.log("i am cb")
    next()
}
cb1=(req,res,next)=>{
    console.log("i am cb1")
    res.write("<h1>Hii oo</h1>")
    next()
}
app.use('/ee',cb,cb1)
app.get("/ee",(req,res)=>{
    res.write('<h1>DO Not Copy Directly</h1>')
    res.send()
})
app.listen(5679)