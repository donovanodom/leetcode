const validMountainArray = function(arr) {
    if(arr.length < 3) return false
    let i = 1, j = arr.length - 2
    while(arr[i] > arr[i-1]){
        i++
    }
    while(arr[j] > arr[j+1]){
        j--
    }
    if(i - 1 == j + 1 && arr[i-1] > arr[i-2] && arr[j+1] > arr[j+2]){
        return true
    }else{
        return false
    }
}