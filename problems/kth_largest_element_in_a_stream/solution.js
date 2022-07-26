const KthLargest = function(k, nums, count) {
    this.k = k
    this.nums = nums
}


KthLargest.prototype.add = function(val) {    
    this.nums.push(val)
    this.nums.sort((a,b) => b - a)
    return this.nums[this.k - 1]
}

