// const http = require('http')
// const fs = require('fs')
// const url = require('url')
const express = require('express')
const app = express()
const router = require('./routes/00-router')
const path = require('path')

port = 3000

// app.use(router)

app.set('views',path.join(__dirname,'views'))           //
app.set('view engine','ejs')                            // Use view engine => ejs
app.use(express.urlencoded({extended:false}))           //ทำให้สามารถอ่านข้อมูลแบบ Post ได้
app.use(router)
app.use(express.static(path.join(__dirname,'public')))  //เข้าถึงข้อมูลประเภท static file

app.listen(port,()=>{
    console.log('Start server at port '+port)
})


//วิธีเขียนแบบดั้งเดิม
//อ่านไฟล์เพื่อเรียกเข้ามาทำงาน
// const index = fs.readFileSync(__dirname+'/00-webpage/index.html','utf-8')
// const persernal = fs.readFileSync(__dirname+'/00-webpage/persernal.html','utf-8')

// const server = http.createServer(function(req,res){

//     //ดึงข้อมูลของ query string 
//     const {pathname,query} = url.parse(req.url,true)

//     if(pathname == '/home' || pathname == "/"){
//         res.write(index)
//     }
//     else if(pathname == '/home/persernal'){
//         console.log(query.id)
//         if(query.id == '1'){
//             res.write(persernal)
//         }else{
//             res.writeHead(404)
//             res.write("<h1>Not found</h1>")
//         }
//     }
//     else{
//         res.writeHead(404)
//         res.write("<h1>Not found</h1>")
//     }
    
//     res.end()
// }).listen(3000,()=>{
//     console.log('start server at port 3000 ')
// })

//(run server) => npx nodemon 00-index.js 
//or => npm start (Edit in json file)