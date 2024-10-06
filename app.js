const express = require('express')
const app = express()

const path = require('path')
const url = require('url')

app.set('view engine', 'pug')

//imports routers
const contactRoute = require('./routes/contactRoute')
const registerRoute = require('./routes/registerRoute')
const subscribeRoute = require('./routes/subscribeRoute')
const loginRoute = require('./routes/loginRoute')

// Serve static files (CSS, Images, JS)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}))

//route to home page
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'index.html')) ; 
})

//routes
app.post('/contact', contactRoute)
app.post('/register', registerRoute)
app.post('/subscribe', subscribeRoute)
app.post('/login', loginRoute)

app.use((req, res)=>{

    res.sendFile(path.join(__dirname, 'views', url.parse(req.url, true).pathname)) ;
})

app.listen(8000, ()=>{
    console.log('Server is running @ http://localhost:8000')
})