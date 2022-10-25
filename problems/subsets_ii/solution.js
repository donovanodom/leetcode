const subsetsWithDup = function(nums) {
    let len = nums.length, res = [[]], seen = new Set()
    while(len){
        res.push(...combine(nums, len))
        len--
    }
    let i = 0
    while(i < res.length){
        let str = ''
        res[i].sort((a,b) => a - b)
        for(const n of res[i]){
            if(n < 0){
                str += `:-${n}`
            }else{
                str += `:${n}`
            }
        }
        if(seen.has(str)){
            res.splice(i,1)
        }else{
            seen.add(str)
            i++
        } 
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