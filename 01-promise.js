//ทดสอบโปรแกรมตัวที่ 1
let connect = true
console.log("ทดสอบโปรแกรมตัวที่ 1")
const downloading = new Promise(function(resolve,reject){
    console.log("เริ่ม")
    setTimeout(()=>{
        if(connect){
            resolve("สำเร็จ")
        }
        else
        {
            reject("เกิดข้อผิดพลาด")
        }
    },3000)
})

// ถ้า resolved
downloading.then(result=>{
    console.log(result)
})

// ถ้า rejected
downloading.catch(result=>{
    console.log(result)
})

//ทดสอบโปรแกรทตัวที่ 2 
setTimeout(()=>{
    console.log("ทดสอบโปรแกรมตัวที่ 2")
    let bool = true
    let url = "luck/promise.js"
    function downloaded(url){
        return new Promise(function(resolve,reject){
            console.log("เริ่มดาวโหลด "+url)
            setTimeout(()=>{
                if(bool){
                    resolve("ดาวโหลดสำเร็จ")
                }
                else
                {
                    reject("ดาวโหลดไม่สำเร็จ")
                }
            },3000)
        })
    }

    //ลดรูป
    downloaded(url).then(result=>{
    console.log(result)
    }).catch(err=>{
        console.log(err)
    }).finally(()=>{
        console.log("คำสั่ง finaly ไม่ว่าจะ resolve หรือ reject finaly ก็จะยังทำงานเหมือนเดิม")
    })
},6000)

//โปรแกรมตัวที่ 3
setTimeout(()=>{
    console.log("ทดสอบโปรแกรมตัวที่ 3")
    let url1 = "promise1.js"
    let url2 = "promise2.js"
    let url3 = "promise3.js"
    let url4 = "promise4.js"
    let url5 = "promise5.js"

    let bool = true

    function download(url){
        return new Promise(function(resolve,reject){
            setTimeout(()=>{
                if(bool){
                    resolve("ดาวโหลด "+url+" สำเร็จ")
                }
                else
                {
                    rejectresolve("ดาวโหลด "+url+" ไม่สำเร็จ")
                }
            },3000)
        })
    }

    //promise then
    download(url1).then(function(result){
        console.log(result)
        return download(url2)
    }).then(function(result){
        console.log(result)
        return download(url3)
    }).then(function(result){
        console.log(result)
        return download(url4)
    }).then(function(result){
        console.log(result)
        return download(url5)
    }).then(function(result){
        console.log(result)
    }).finally(()=>{
        console.log("จบการทำงาน")
    })

},12000)



