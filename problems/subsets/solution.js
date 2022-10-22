const subsets = function(nums) {
    let len = nums.length, res = [[]]
    while(len){
        res.push(...combine(nums, len))
        len--
    }
    return res
}

const combine = function(arr, k) {
    let left, right, ans = []
    if(k > arr.length || k < 1) return []
    if(arr.length == k) return [arr] 
    if(k == 1) return arr.map((x) => [x])
    for(let i = 0; i < arr.length - k + 1; i++){
        left = arr.slice(i, i + 1)
        right = combine(arr.slice(i + 1), k - 1)        
        for(let j = 0; j < right.length; j++){
            ans.push([...left, ...right[j]])
        }
    }
    return ans
}