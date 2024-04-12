const myModule = require('./04_0-module.js')
const mytime = require('./04_0-module.js').getCurrentTime
const sum = require('./04_0-module.js').sum

//อ้างอิงผ่านชื่อ Module
console.log(myModule.getCurrentTime())
console.log(myModule.sum(34,35))
console.log(myModule.formatNumber(10015250005))

//อ้างอิงผ่านชื่อ function
console.log(mytime())
console.log(sum(34,35))