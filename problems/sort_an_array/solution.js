const sortArray = (nums) => {
    if(nums.length < 2) return nums
    let mid = Math.floor(nums.length / 2)
    let left = nums.slice(0,mid), right = nums.slice(mid)
    return merge(sortArray(left),sortArray(right))
}

const merge = (left, right) => {
    let arr = [], l = 0, r = 0
    while(l < left.length && r < right.length){
        if(left[l] < right[r]){
            arr.push(left[l])
            l++
        }else{
            arr.push(right[r])
            r++
        }
    }
    return arr.concat(left.slice(l).concat(right.slice(r)))
}