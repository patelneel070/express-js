const expr = require("express")
const app = expr()

app.use(expr.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send(`
        <form action="/data" method="post">
            uname: <input type="text" name="uname">
            pass: <input type="password" name="pass">
            <button type="submit">Submit</button>
        </form>
    `)
})

const checkadmin = (req, res, next) => {
    let name = req.body.uname

    if (name === "admin") {
        next()
    } else {
        res.send('<h1 style="color:red">Its Last Warning</h1>')
    }
}

app.post('/data', checkadmin, (req, res) => {
    console.log("done")
    res.send("<h1>Welcome Admin</h1>")
})

app.listen(5000, () => {
    console.log("Server running")
})