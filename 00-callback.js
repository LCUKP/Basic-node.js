
path = "../luck/callback.js"
path1 = "../luck/callback1.js"
path2 = "../luck/callback2.js"
path3 = "../luck/callback3.js"

function downloading(url,callback){
    console.log('กำลังโหลด '+url)
    setTimeout(()=>{
        callback(url)
    },3000)
}

function complete(result){
    console.log("ดาวโหลด "+result+" เสร็จสิ้น")
}

//รูปแบบที่ 1 
//downloading(path,complete)

//ลดรูป
downloading(path,function(result){
    console.log("ดาวโหลด "+result+" เสร็จสิ้น")
})

// callback hell คือ เรียก callback ซ้อนไปเรื่อย ๆ แก้ด้วยการใช้ Promise
// downloading(path1,function(result){
//     console.log("ดาวโหลด "+result+" เสร็จสิ้น")
//     downloading(path2,function(result){
//         console.log("ดาวโหลด "+result+" เสร็จสิ้น")
//         downloading(path3,function(result){
//             console.log("ดาวโหลด "+result+" เสร็จสิ้น")
//         })
//     })
// })