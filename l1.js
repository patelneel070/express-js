var exp =require("express")
var app = exp()
data = {name :'xyz',age:24}
app.get('/',(req,res)=>{
    // res.write(JSON.stringify(data))
    // res.send(data) // must be empty as the write tag contains something ,when written data it sets the mime type to json
    // res.json(data)     it works 
    res.write(data.age+"")
    res.send()
})
app.listen(5006,()=>{
    console.log("Ramiloo")
})