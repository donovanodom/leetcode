const countPrimeSetBits = function(left, right) {
    let ans = 0
    while(left<=right){
        let bin = left.toString(2), ones = 0
        for(const char of bin){
            if(char == '1') ones++
        }
        if(ones == 1){
            left++
            continue
        }else{
            for(i = 2; i ** 2 <= ones; i++){
                if(ones % i == 0){
                    ans--
                    break
                }
            }
        }
        ans++
        left++
    }
    return ans
}