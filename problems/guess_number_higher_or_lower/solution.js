const guessNumber = function(n) {
    let l = 1, r = n, m = Math.floor((l+r) / 2)
    while(l <= r){
        if(guess(m) == 0){
            return m
        }else if(guess(m) > 0){
            l = m
            m = Math.ceil((l+r) / 2)
        }else{
            r = m
            m = Math.floor((l+r) / 2)
        }
    }
}