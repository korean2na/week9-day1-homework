const express = require('express')

const app = express()
const port = 1337

app.set('view engine', 'ejs')
app.set('views', './templates/views')

app.get('/', (req, res) => {
    res.render('home')
})
app.get('/login', (req, res) => {
    res.render('login')
})
app.get('/profile', (req, res) => {
    res.render('profile')
})
app.get('/register', (req, res) => {
    res.render('register')
})
app.get('/user', (req, res) => {
    res.render('user')
})

app.listen(port, () => {
    console.log(`Express server listening on port ${port}.`)
})