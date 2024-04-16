const express = require('express')
const router = express.Router()
// const path = require('path')

router.get('/',(req,res)=>{
    let name = 'Luck'
    let fname = 'Puwanas'
    let warning = '<h2>Luck Not Lucky</h2>'
    let foods = ["ข้าวหมูกรอบ","ข้าวขาหมู","กระเพราหมูกรอบ"]

    let products = [
        {name:"ข้าวหมูกรอบ",price:60,img:"images/00.jpg"},
        {name:"ข้าวขาหมู",price:55,img:"images/01.jpg"},
        {name:"ข้าวกระเพราหมูกรอบ",price:40,img:"images/02.jpg"}
    ]

    res.render('00-index.ejs',{
        name:name,
        fname:fname,
        warning:warning,
        foods:foods,
        products:products
    })
})

router.get('/addmenu',(req,res)=>{
    res.render('01-addmenu.ejs')
})

router.get('/manage',(req,res)=>{
    res.render('02-manage.ejs')
})

router.post('/insert',(req,res)=>{
    console.table(req.body)
    res.render('01-addmenu.ejs')
})

module.exports = router

// Older version
// const index = path.join(__dirname,'../00-webpage/index.html')
// const persernal = path.join(__dirname,'../00-webpage/persernal.html')

// router.get('/',(req,res)=>{
//     res.status(200)
//     res.type("text/html")
//     res.sendFile(index)
// })

// router.get('/home/persernal/:id',(req,res)=>{
//     let param = req.params.id

//     // res.send("Your query string is "+param)
    
//     if(param == '1'){
//         res.status(200)
//         res.type("text/html")
//         res.sendFile(persernal)
//     }else{
//         res.status(404)
//         res.send('<h1>404 File '+param+' not found</h1>')
        
//     }
    
// })


