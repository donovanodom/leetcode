const isPerfectSquare = function(num) {
     return getNum(num, 1)
}
const getNum = (num1,num2) => {
        if(num1 - num2 < 0)
            return false
        else if(num1 - num2 == 0)
            return true
        else
            return getNum(num1 - num2, num2+2)
}