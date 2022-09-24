const maxDepth = function(s) {
    let max = 0, stack = []
    for(const char of s){
        if(char == '('){
            stack.push(char)
        }else if(char == ')'){
            stack.pop()
        }
        max = Math.max(max, stack.length)
    }
    return max
}