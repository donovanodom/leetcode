const totalMoney = function(n) {
    let bank = 0, cur = 1, day = 1
    while(n > 0){
        bank += cur
        if(day % 7 == 0){
            cur -= 5
        }else{
            cur++
        }
        
        day++
        n--
    }
    return bank
};