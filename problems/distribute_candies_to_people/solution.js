const distributeCandies = (candies, num_people) => {
    let n = 1, ans = Array(num_people).fill(0), i = 0
    while(candies){
        if(candies - n < 0){
            ans[i] += candies
            candies = 0
        }else{
            ans[i] += n
            candies -= n
        }
        i++
        n++
        if(i == num_people) i = 0
    }
    return ans
}