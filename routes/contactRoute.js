const express = require('express')
const app = express()
const router = express.Router()


router.use((req, res)=>{

    const {name, email, message} = req.body
    res.send(`<center>${name} ${email} ${message}</center>`)
})

module.exports = router