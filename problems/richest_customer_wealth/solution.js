const maximumWealth = function(accounts) {
    let max = 0
    for(const account of accounts){
        max = Math.max(account.reduce((a,b) => a + b), max)
    }
    return max
}