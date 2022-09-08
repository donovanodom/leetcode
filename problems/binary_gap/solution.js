const binaryGap = function(n) {
    let str = n.toString(2), i = 0, max = 0
    while(i < str.length){
        let j = i + 1
        if(str[i] == '1'){
            while(str[j] != '1' && j < str.length){
                j++
            }
            if(str[j] == '1') max = Math.max(max, j - i)
        } 
        i = j
    }
    return max
}