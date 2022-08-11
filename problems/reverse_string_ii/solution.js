const reverseStr = function(s, k) {
    let j = 2 * k, i = 0, ans = []
    s = s.split('')
    while(i < s.length){
        if(s.length - i > k && s.length - i < j){
            ans.push(...s.slice(i,i+k).reverse())
            ans.push(...s.slice(i+k))
        }else{
            ans.push(...s.slice(i,i+k).reverse())
            ans.push(...s.slice(i+k,i+j))
        }
        i += j
    }
    return ans.join('')
}