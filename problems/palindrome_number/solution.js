/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const arr = Array.from(String(x), num => Number(num))
    if(x > -1 && arr.join() == [...arr].reverse().join()){
        return true
    }else{
        return false
    }
};