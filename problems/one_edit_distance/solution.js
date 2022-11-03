const isOneEditDistance = function(s, t) {
    if(Math.abs(s.length - t.length) > 1) return false
    let dif = 0
    if(s.length > t.length) dif = differences(s, t)  
    if(s.length < t.length) dif = differences(t, s)
    if(s.length == t.length){
        let i = 0
        while(i < s.length){
            if(s[i] != t[i]) dif++
            i++
        }
    }
    if(dif > 1) return false
    if(remChar(t, addChar(s)) == 1 && dif < 2) return true
    return dif == 1
}

const differences = (s1, s2) => {
    let i = 0, j = 0, dif = 0
    while(i < s1.length && j < s2.length){
        if(s1[i] != s2[j]){
            i++
            dif++
        }else{
            i++
            j++
        }    
    }
    if((j < s2.length && s2[j] != s1[j]) || (i < s1.length && s1[i] != s2[i])) dif++
    return dif
}

const addChar = (str) => {
    let arr = Array(74).fill(0)
    for(const char of str){
        let code = char.charCodeAt(0) - 48
        arr[code]++
    }
    return arr
}
const remChar = (str, arr) => {
    for(const char of str){
        let code = char.charCodeAt(0) - 48
        arr[code]--
    }
    let dif = 0
    for(const num of arr){
        if(num != 0) dif += Math.abs(num)
    }
    return dif
}