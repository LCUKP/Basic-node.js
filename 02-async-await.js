let url1 = "async-await1.js"
let url2 = "async-await2.js"
let url3 = "async-await3.js"
let url4 = "async-await4.js"
let url5 = "async-await5.js"

let bool = true

function downloading(url){
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

async function start(){
    console.log("เริ่มดาวโหลด")
    console.log(await downloading(url1))
    console.log(await downloading(url2))
    console.log(await downloading(url3))
    console.log(await downloading(url4))
    console.log(await downloading(url5))
    console.log("สำเร็จ")
}

start()