const containsDuplicate = (nums) => {
    let copy = [... new Set(nums)]
    return copy.length == nums.length ? false : true
};