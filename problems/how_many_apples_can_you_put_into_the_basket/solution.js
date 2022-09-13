const maxNumberOfApples = function(weight) {
    weight.sort((a,b) => a - b)
    let sum = 0, count = 0
    for(const w of weight){
        if(sum + w <= 5000){
            sum += w
            count++
        }else{
            return count
        }
    }
    return count
}