const express = require('express')
const router = express()
const {create} = require('./controler')

router.get('/categories', (req, res) => {
     const data = [
        { 
           id: 1,
           name : "seminar" 
        },
        {
            id : 2,
            name : "bootcamp"
        }
    ]
    res.status(200).json({
       data
    })
})

router.post('/categories', create)

module.exports = router