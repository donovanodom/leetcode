const kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies), ans = []
    for(const c of candies){
        if(c + extraCandies >= max){
            ans.push(true)
        }else{
            ans.push(false)
        }
    }
    return ans
}