const sortArray = function(nums, left = 0, right = nums.length - 1) {
    if(left < right){
        let pivot = partition(nums,left,right)
        sortArray(nums,left,pivot - 1)
        sortArray(nums,pivot + 1,right)
    }
    return nums
}

const partition = (arr, left, right) => {
  const pivot = right--
  while (left <= right) {
    while (arr[left] < arr[pivot]) {
      left++
    }
    while (arr[right] > arr[pivot]) {
      right--
    }
    if (left <= right) {
      swap(arr, left, right)
      left++
      right--
    }
  }
  swap(arr, left, pivot)
  return left
}

const swap = (arr,a,b) => {
    [arr[a],arr[b]] = [arr[b],arr[a]]
}

// const sortArray = function(nums) {
//     if(nums.length < 2) return nums
//     let mid = Math.floor(nums.length / 2)
//     let left = nums.slice(0,mid), right = nums.slice(mid)
//     return merge(sortArray(left),sortArray(right))
// }

// const merge = (left,right) => {
//     let result = [], l = 0, r = 0
//     while(l < left.length && r < right.length){
//         if(left[l] < right[r]){
//             result.push(left[l])
//             l++
//         }else{
//             result.push(right[r])
//             r++
//         }
//     }
//     return result.concat(left.slice(l).concat(right.slice(r)))
// }

