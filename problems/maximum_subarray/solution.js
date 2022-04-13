/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  let maxSub = nums[0];
  let currentSub = 0;

  for (let i = 0; i < nums.length; i++) {
    if (currentSub < 0) {
      currentSub = 0;
    }
    currentSub += nums[i];
    maxSub = Math.max(maxSub, currentSub);
  }

  return maxSub;
};