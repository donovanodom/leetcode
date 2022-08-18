const heightChecker = function(heights) {
    let copy = [...heights], ans = 0
    copy.sort((a,b) => a - b)
    for(i = 0; i < heights.length; i++){
        if(heights[i] != copy[i]) ans++
    }
    return ans
};