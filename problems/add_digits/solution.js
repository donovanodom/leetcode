const addDigits = (num) => {
    let result
    if(num < 10) return num
    const addNums = (nums) => {
        nums = Array.from(String(nums), Number)
        console.log(nums)
        let sum = nums.reduce((a,b) => a + b)
        console.log(sum)
        if(sum < 10){
            result = sum
            return
        } 
        addNums(sum)  
    }
    addNums(num)
    return result
}