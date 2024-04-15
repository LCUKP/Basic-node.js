//non-blocking
const fs = require('fs')

//อ่านไฟล์ที่สร้างเอง
fs.readFile('fs-module-example/06-input.txt','utf-8',(err,data)=>{
    if(err) return console.log('เกิดข้อผิดพลาด',err)
    console.log(data)

    //เมื่ออ่านและไม่มีข้อผิดพลาดให้สร้างไฟล์
    let text = 'Write by fs Async\n'+data+'\nเขียนเมื่อ '+new Date()
    fs.writeFile('fs-module-example/06-writeFile.txt', text,err=>{
        if(err) return console.log('เกิดข้อผิดพลาด',err)
        console.log('success')
        
        //เมื่อสร้างไฟล์และไม่มีข้อผิดพลาดให้อ่านไฟล์
        fs.readFile('fs-module-example/06-writeFile.txt','utf-8',(err,data)=>{
            if(err) return console.log('เกิดข้อผิดพลาด',err)
            console.log(data)
        })
    })
})

console.log('สำเร็จ')