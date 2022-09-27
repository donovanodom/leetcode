const interpret = function(command) {
    let ans = '', i = 0
    while(i < command.length){
        if(command[i] == 'G'){
            ans += 'G'
            i++
        }else if(command[i] == '(' && command[i + 1] == ')'){
            ans += 'o'
            i += 2
        }else{
            ans += 'al'
            i += 4
        }
    }
    return ans
}