const expr = require("express")
const app = expr()

app.use(expr.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send(`
        <form action="/login" method="post">
            uname: <input type="text" name="uname"><br>
            pass: <input type="password" name="pass"><br>
            message: <textarea name="message"></textarea><br>
            <button type="submit">Submit</button>
        </form>
    `)
})

const printdata = (req, res, next) => {
    req.name = req.body.uname
    req.pass = req.body.pass
    req.message = req.body.message
    next()
}

const countvowels = (req, res, next) => {
    let count = 0

    for (let char of req.message.toLowerCase()) {
        if (['a','e','i','o','u'].includes(char)) {
            count++
        }
    }

    req.vowelcount = count
    next()
}

app.post("/login", printdata, countvowels, (req, res) => {
    res.send(`
        Name: ${req.name}<br>
        Pass: ${req.pass}<br>
        Message: ${req.message}<br>
        Vowels: ${req.vowelcount}
    `)
})

app.listen(1501, () => {
    console.log("Server running on port 1501")
})