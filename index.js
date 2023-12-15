const express = require('express')
const app = express()

app.set("view engine", "ejs")


app.use(express.static('./public'))

                //middleware
/*
app.use(function(req, res, next) {
    console.log("may i come in")
    next()
})

app.use(function(req, res, next) {
    console.log("may i again come in")
    next()
})
*/



app.get('/', function (req, res) {
  res.render("index", {age: 12})
})

app.get('/about', function(req, res) {
    res.send('this is about page')
})

app.get('/profile/:username', function(req, res) {
    res.send(`hi from ${req.params.username}`)
})

app.listen(3000)