const findSpecialInteger = function(arr) {
    let max = arr.length / 4, i = 0
    while(i < arr.length){
        let j = i + 1
        while(arr[i] == arr[j]) j++
        if(j - i > max) return arr[i]
        i = j
    }
}