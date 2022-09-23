const sumOddLengthSubarrays = function(arr) {
    let i = 0, sum = 0
    while(i < arr.length){
        let j = i + 1
        while(j <= arr.length){
            sum += arr.slice(i,j).reduce((a,b) => a + b)
            j += 2
        }
        i++
    }
    return sum
}