const shortestToChar = function(s, c) {
    let occ = Array(s.length).fill(), count = 0
    let ans = []
    for(i = 0; i < s.length; i++){
        if(s[i] == c){
            count++
            occ[i] = count
        }
    }
    count = 1
    let trail = 1
    for(i = 0; i < s.length; i++){
        let prev = occ.indexOf(count - 1), curr = occ.indexOf(count)
        if(occ[i] == count){
            ans.push(0)
            count++
        }else if(prev >= 0 && curr > prev){
            if(curr - i < i - prev){
                ans.push(curr - i)
            }else{
                ans.push(i - prev)
            }
        }else if(prev < 0 && curr > prev){
            ans.push(curr - i)
        }else{
            ans.push(trail)
            trail++
        }
    }
    return ans
}