const rotate = (nums, k) => {
    let chop = nums.splice(0, nums.length - k % nums.length)
    nums.push(...chop)
}