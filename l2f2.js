expr=require("express")
app=expr()
app.use(expr.urlencoded())
app.get('/',(req,res)=>{
    res.send(`<form action="/data" method="get"> unmae:<input type="text" name="uname" placeholder="name bolo beta">age:<input type="text" name="age" placeholder="Umaar bol beta"> <button type="submit">Submit</button></form>`)
})
app.get('/data',(req,res)=>{
    name=req.query.uname
    age=req.query.age
    res.send("Welcome "+name+" with "+age)
})
app.listen(5677,()=>{
    console.log("Daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaan")
})