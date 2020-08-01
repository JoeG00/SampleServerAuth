
const express = require('express')
const app = express()
const passport= require('passport')
const bcrypt =require('bcrypt')

initialize= require('./passport-config.js')
initialize.initialize(passport)

const users =[]

app.set('view-engine', 'ejs');
//take forms and allows for request fields
app.use(express.urlencoded({extended: false }))

app.get('/', (req, res)=>{
    res.render('index.ejs')
})

app.get('/login', (req, res)=>{
    res.render('login.ejs')
})

app.post('/login', (req, res)=>{

})

app.get('/register', (req, res)=>{
    res.render('register.ejs')
})

app.post('/register', async (req,res)=>{
    try {
        const hasedPassword= await bcrypt.hash(req.body.password, 10)
        users.push({
            id:Date.now().toString(),
            name: req.body.email,
            password:hasedPassword
        })
        res.redirect('/login')
    } catch (error) {
        res.redirect('/register')
        
    }
    console.log(users)

})

app.listen(4000)