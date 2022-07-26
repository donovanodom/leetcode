const arrayRankTransform = function(arr) {
    const copy = [...new Set(arr)], obj = {}
    copy.sort((a,b)=>a-b)
    for(i = 0; i < copy.length; i++){
        if(!obj[copy[i]]) obj[copy[i]] = i + 1
    }
    for(i = 0; i < arr.length; i++){
        arr[i] = obj[arr[i]]
    }
    return arr
}