
function getCurrentTime(){
    return new Date()
}

function sum(x,y){
    return x+y
}

function formatNumber(num){
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

exports.getCurrentTime = getCurrentTime
exports.sum = sum
module.exports.formatNumber = formatNumber