const isStrobogrammatic = function(num) {
    if(num.length == 1){
        if(num != '0' && num != '1' && num != '8') return false
        return true
    }
    if(num.length % 2 != 0){
        let mid = num[Math.floor(num.length / 2)] 
        if(mid != '0' && mid != '1' && mid != '8') return false
    } 
    let i = 0
    while(i < Math.floor(num.length / 2)){
        let j = num.length - 1 - i
        if(!checkValid(num[i],num[j])) return false
        i++
    }
    return true
}

const checkValid = (x,y) => {
        if(x == '6' && y == '9' || x == '9' && y == '6'|| x == '0' && y == '0' || x == '1' && y == '1' || x == '8' && y == '8') return true
        return false
}