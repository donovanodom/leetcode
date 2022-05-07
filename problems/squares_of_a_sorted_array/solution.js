const sortedSquares = (nums) => {
    nums = nums.map((num) =>  num ** 2).sort(function(a,b){return a - b}) 
    return nums
}