const removeVowels = function(s) {
    let vow = ['a','e','i','o','u'], i = 0
    while(i < s.length){
        if(vow.includes(s[i])){
            s = s.slice(0,i) + s.slice(i+1)
        }else{
            i++
        }
    }
    return s
}