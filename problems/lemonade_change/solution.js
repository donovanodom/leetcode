const lemonadeChange = function(bills) {
    const bank = {'5':0,'10':0,'20':0}
    for(const bill of bills){
        let cur = bill
        if(bill == 5){
            bank[bill]++
        }else if(bill == 10){
            bank[bill]++
            while(cur > 5){
                if(!bank['5']) return false
                bank['5']--
                cur -= 5
            }
        }else{
            bank[bill]++
            while(cur > 5){
                if(cur > 15 && bank['10']){
                    bank['10']--
                    cur -= 10
                }else if(bank['5']){
                    bank['5']--
                    cur -= 5
                }else{
                    return false
                }       
            }
        }
    }
    return true
}