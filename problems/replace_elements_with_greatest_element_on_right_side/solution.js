const replaceElements = function(arr) {
    for(i = 0; i < arr.length; i++){
        arr[i] = Math.max(...arr.slice(i + 1)) 
    }
    arr[arr.length - 1] = -1
    return arr
}