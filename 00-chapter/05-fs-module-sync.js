//import module
const fs = require('fs')

//อ่านไฟล์ fs-module-example/input.txt (run กับ code runner แล้ว error แต่ run ใน terminal ผ่าน)
let data = fs.readFileSync('fs-module-example/05-input.txt','utf-8')
console.log(data)

//เขียนไฟล์
let text = 'Write by module fs\n'+data+'\nเขียนเมื่อ '+new Date()
fs.writeFileSync('fs-module-example/05-writeFile.txt',text)
console.log('สำเร็จ\nอ่านไฟล์ที่สร้าง')

data = fs.readFileSync('fs-module-example/05-writeFile.txt','utf-8')
console.log(data)
