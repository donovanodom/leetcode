const reformat = function(s) {
    let c = [], d = [], ans = ''
    for(const char of s){
        if(/\d/.test(char)){
            d.push(char)
        }else{
            c.push(char)
        }
    }
    if(Math.abs(c.length - d.length) > 1) return ''
    while(c.length || d.length){
        if(c.length > d.length){
            ans += c.shift()
        }else if(d.length > c.length){
            ans += d.shift()
        }else if(!ans.length){
            ans += c.shift()
        }else if(/\d/.test(ans[ans.length - 1])){
            ans += c.shift()
        }else{
            ans += d.shift()
        }
    }
    return ans
}