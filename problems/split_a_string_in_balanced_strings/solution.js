const balancedStringSplit = function(s) {
    let max = 0, i = 0, stack = []
    while(i < s.length){
        if(!stack.length){
            stack.push(s[i])
        }else if(stack[0] != s[i]){
            stack.pop()
        }else{
            stack.push(s[i])
        }
        if(!stack.length) max++
        i++
    }
    return max
}