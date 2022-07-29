const sortArrayByParity = function(nums) {
    let answer = []
    const bin = (arr) => {
        if(arr.length < 2){
            if(arr[0] % 2 != 0){
                answer.push(arr[0])
            }else{
                answer.unshift(arr[0])
            }
            return
        }
        let mid = Math.floor(arr.length / 2)
        bin(arr.slice(0,mid))
        bin(arr.slice(mid))
        
    }
    bin(nums)
    return answer
}
// const sortArrayByParity = function(nums) {
//     for(const num of nums){
//         if(num % 2 != 0){
//             answer.push(num)
//         }else{
//             answer.unshift(num)
//         }
//     }
// }