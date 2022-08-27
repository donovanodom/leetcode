const arraysIntersection = function(arr1, arr2, arr3) {
    const set2 = new Set([...arr2]), set3 = new Set([...arr3]), ans = []
    for(const num of arr1){
        if(!set2.has(num) || !set3.has(num)) continue
        ans.push(num)
    }
    return ans
}