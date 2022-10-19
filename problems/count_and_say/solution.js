const countAndSay = function(n) {
    let str = '1'
    while(n - 1 > 0){
        str = rec(str)
        n--
    }
    return str
}

const rec = (str) => {
    let res = '', i = 0
    while(i < str.length){
        let j = i + 1
        while(str[i] == str[j]){
            j++
        }
        res += String(j - i) + str[i]
        i = j
    }
    return res
}