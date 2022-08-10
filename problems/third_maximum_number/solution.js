const thirdMax = function(nums) {
    if(nums.length < 3) return Math.max(...nums)
    let arr = [nums[0],nums[1],nums[2]], sorted = false
    arr = [...new Set(arr)].sort((a,b) => b - a)
    for(i = 3; i < nums.length; i++){
        if(arr.length < 3){
            if(arr.indexOf(nums[i]) < 0){
                arr.push(nums[i]) 
            } 
            arr.sort((a,b) => b - a)
            continue
        }else if(!sorted){
            arr.sort((a,b) => b - a)
            sorted = true
        }
        let num = nums[i]
        if(num < arr[2] || arr.indexOf(num) >= 0){
            continue
        }else if(num > arr[2] && num < arr[1]){
            arr.pop()
            arr.push(num)
        }else if(num > arr[1] && num < arr[0]){
            const temp = arr[1]
            arr[1] = num
            arr[2] = temp
        }else if(num > arr[0]){
            arr.pop()
            arr.unshift(num)
        }
    }
    return arr.length == 3 ? arr.pop() : Math.max(...arr)
}