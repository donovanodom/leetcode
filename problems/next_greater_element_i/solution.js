const nextGreaterElement = function(nums1, nums2) {
    let ans = [], obj = {}, stack = []
    for(const num of nums2){
       while(stack.length && stack[stack.length - 1] < num){
           obj[stack.pop()] = num
       }
       stack.push(num)
    }
    for(const num of nums1){
        if(obj[num]){
            ans.push(obj[num])
        }else{
            ans.push(-1)
        }
    }
    return ans
}