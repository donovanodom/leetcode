const canThreePartsEqualSum = function(arr) {
    let sum = arr.reduce((a,b) => a + b)
    if(sum % 3 != 0) return false
    let cur = 0, count = 0
    for(i = 0; i < arr.length; i++){
        cur += arr[i]
        if(cur == sum / 3){
            cur = 0
            count++
        }
    }
    return count >= 3
}