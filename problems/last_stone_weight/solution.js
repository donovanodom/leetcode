const lastStoneWeight = function(stones) {
    while(stones.length > 1){
        let x = stones.splice(stones.indexOf(Math.max(...stones)),1)
        let y = stones.splice(stones.indexOf(Math.max(...stones)),1)
        if(x - y != 0) stones.push(x-y)
    }
    return stones.length ? stones[0] : 0
};