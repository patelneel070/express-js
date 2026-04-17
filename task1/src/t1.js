expr=require("express")
app=expr()
app.use(expr.static('../public',{index:'t1.html'}))
app.use(expr.urlencoded({extended:true}))
app.post('/calc',(req,res)=>{
    n1=parseInt(req.body.n1)
    n2=parseInt(req.body.n2)

    if(req.body.formula==='addition')
    {
        ans=n1+n2
        res.write("Addition = "+ans)
        
    }
    if(req.body.formula==='subtraction')
    {
        ans=n1-n2
        res.write("Subtraction = "+ans)
        
    }
    if(req.body.formula==='multi')
    {
        ans=n1*n2
        res.write("multiplied = "+ans)
        
    }
    if(req.body.formula==='div')
    {
        ans=n1/n2
        res.write("Division = "+ans)
        
    }
    res.send()
})
app.listen(1209,()=>{
    console.log("Done")
})
