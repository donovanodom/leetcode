const missingNumber = function(arr) {
    let diff = (arr[arr.length - 1] - arr[0]) / arr.length
    for(i = 1; i < arr.length; i++){
        if(arr[i - 1] + diff != arr[i]) return arr[i - 1] + diff
    }
    return arr[0]
}