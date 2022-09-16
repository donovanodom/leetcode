const minimumAbsDifference = function(arr) {
    arr.sort((a,b) => a - b)
    let dif = Infinity, obj = {}
    for(i = 1; i < arr.length; i++){
        let sub = arr[i] - arr[i - 1]
        if(!obj[sub]) obj[sub] = []
        obj[sub].push([arr[i - 1],arr[i]])
        dif = Math.min(sub, dif)
    }
    return obj[dif]
}