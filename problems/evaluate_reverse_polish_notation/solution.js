const evalRPN = (tokens) => {
    let i = 0, stack = []
    while(i < tokens.length){
        if(!isNaN(tokens[i])){
            tokens[i] = Number(tokens[i])
            stack.push(tokens[i])
        }else{
            let b = stack.pop(), a = stack.pop()
            switch(tokens[i]){
                case '+':
                    stack.push(a + b)
                break
                case '-':
                    stack.push(a - b)
                break
                case '/':
                    stack.push(~~(a / b))
                break
                case '*':
                    stack.push(a * b)
                break        
            }    
        }
        i++
    }
    return stack[0]
}

