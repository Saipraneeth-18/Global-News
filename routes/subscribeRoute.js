const express = require('express')
const app = express()
const router = express.Router()


router.use((req, res)=>{

    const {email} = req.body
    res.render('subscribe', {email})
})

module.exports = router