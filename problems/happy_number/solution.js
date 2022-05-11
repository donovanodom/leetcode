const isHappy = (n) => {
    let answer, sums = []
    const happyNumber = (nums) => {
        nums = Array.from(String(nums), Number)
        let squares = [], sum = 0
        for(i = 0; i < nums.length; i++){    
            squares.push(Math.pow(nums[i], 2))
        }
        sum = squares.reduce((a, b) => a + b)
        if(sum === 1){
            answer = true
            return
        } 
        if(sums.includes(sum)){
            answer = false
            return
        } 
        sums.push(sum)
        console.log(sum,sums, squares)
        happyNumber(sum)
    }
    happyNumber(n)   
    return answer
}