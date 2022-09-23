const modifyString = function(s) {
    let pool = Array(26).fill(0).map((x,i) => x = String.fromCharCode(i + 97)).join(''), i = 0
    pool = pool + pool + pool + pool
    while(i < s.length){
        if(s[i] != '?'){
            i++
        }else{
            let j = i + 1, shift = 0
            while(s[j] == '?') j++     
            while(pool.slice(shift, shift + j - i)[0] == s[i - 1] || pool.slice(shift, shift + j - i)[j - i - 1] == s[j]){
                shift++
            }
            s = s.slice(0,i) + pool.slice(shift, shift + j - i) + s.slice(i + j - i)
        } 
    }
    return s
}