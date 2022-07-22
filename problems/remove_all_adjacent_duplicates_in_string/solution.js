/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicates = function(s) {
    let stack = []
    for(i = 0; i < s.length; i++){
        if(s[i] == stack[stack.length - 1]){
            stack.pop()
        }else{
            stack.push(s[i])
        } 
        
    }
    return stack.join('')
};