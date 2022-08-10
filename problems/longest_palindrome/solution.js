const longestPalindrome = function(s) {
    const chars = new Map()
    for(const char of s){
        let key = char.charCodeAt(0)
        if(!chars.has(key)) chars.set(key,0)
        chars.set(key,chars.get(key) + 1)
    }
    let odd = false, sum = 0
    for(const [key, val] of chars){
        if(val % 2 == 0){
            sum += val  
        }else{
            odd = true
            sum += val - 1
        }
    }  
    return odd ? sum + 1 : sum
}