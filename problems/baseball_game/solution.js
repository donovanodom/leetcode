const calPoints = function(ops) {
    let stack = []
    for(const op of ops){
        if(op == "+"){
            stack.push(Number(stack[stack.length-1]) + Number(stack[stack.length-2]))
        }else if(op == "D"){
            stack.push(stack[stack.length-1] * 2)
        }else if(op == "C"){
            stack.pop()
        }else{
            stack.push(op)
        }
    }
    return stack.length ? stack.reduce((a,b) => Number(a) + Number(b)) : 0
}