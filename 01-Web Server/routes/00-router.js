const express = require('express')
const router = express.Router()
const path = require('path')

const index = path.join(__dirname,'../00-webpage/index.html')
const persernal = path.join(__dirname,'../00-webpage/persernal.html')

router.get('/',(req,res)=>{
    res.status(200)
    res.type("text/html")
    res.sendFile(index)
})

router.get('/home/persernal/:id',(req,res)=>{
    let param = req.params.id

    // res.send("Your query string is "+param)
    
    if(param == '1'){
        res.status(200)
        res.type("text/html")
        res.sendFile(persernal)
    }else{
        res.status(404)
        res.send('<h1>404 File '+param+' not found</h1>')
        
    }
    
})

module.exports = router
