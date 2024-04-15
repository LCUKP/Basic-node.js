// const http = require('http')
// const fs = require('fs')
// const url = require('url')
const express = require('express')
const app = express()
const router = require('./routes/00-router')

app.use(router)

app.listen(3000,()=>{
    console.log('Start server at port 3000')
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