const groupStrings = function(strings) {
    let obj = {}
    for(const str of strings){
        let key = seq(str)
        if(!obj[key]) obj[key] = []
        obj[key].push(str)
    }
    return Object.keys(obj).map((key) => obj[key])
}

const seq = (str) => {
    let shift = '1'
    for(i = 1; i < str.length; i++){
        let sub = str.charCodeAt(i) - str.charCodeAt(i - 1)
        if(sub < 0) sub += 26
        shift += ',' + String(sub)
    }
    return shift
}