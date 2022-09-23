const numWaterBottles = function(numBottles, numExchange) {
    let count = numBottles, empty = numBottles
    while(empty / numExchange >= 1){
        count += Math.floor(empty / numExchange)
        empty = Math.floor(empty / numExchange) + empty % numExchange
    }
    return count
}