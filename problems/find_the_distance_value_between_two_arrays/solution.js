const findTheDistanceValue = function(arr1, arr2, d) {
    let valid = new Set(), invalid = new Set(), count = 0
    for(i = 0; i < arr1.length; i++){
        if(invalid.has(arr1[i])) continue
        let dv = Infinity
        for(j = 0; j < arr2.length; j++){
            dv = Math.min(Math.abs(arr1[i] - arr2[j]), dv)
            if(dv <= d){
                invalid.add(arr1[i])
                break
            }
        }
        if(dv > d) count++
    }
    return count
}