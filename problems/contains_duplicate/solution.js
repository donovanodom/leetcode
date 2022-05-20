const containsDuplicate = (nums) => {
    let copy = [...new Set(nums)]
    return nums.length != copy.length
}