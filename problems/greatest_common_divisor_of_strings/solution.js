const gcdOfStrings = function(str1, str2) {
    let i = 1
    while(i > 0){
        while(str1.slice(0,i) == str2.slice(0,i) && i <= Math.min(str1.length,str2.length)) i++
        while(str1.length % i != 0 && i > 0 || str2.length % i != 0 && i > 0) i--
        let s1 = str1.slice(0,i), s2 = str2.slice(0,i)
        while(s1.repeat(str1.length/s1.length) != str1 && i > 0 || s2.repeat(str2.length/s2.length) != str2 && i > 0){
            i--
            while(str1.length % i != 0 && i > 0 || str2.length % i != 0 && i > 0) i--
        }
        return str1.slice(0,i)
    }
}