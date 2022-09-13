const removeOuterParentheses = function(s) {
    if(!s) return s
    let stack = [], res = ''
    for(const p of s){
        if(p == '('){
            if(stack.length){
                res += p
            }
            stack.push(p)
        }else{
            if(stack.length != 1){
                res += ')'
            }
            stack.pop()
        }
    }
    return res
}