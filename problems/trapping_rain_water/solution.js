const trap = function(height) {
    let left = Array(height.length).fill(0)
    let right = Array(height.length).fill(0)
    let lm = 0, rm = 0
    for(i = 0; i < height.length; i++){
        left[i] = lm
        lm = Math.max(lm,height[i])
    }
    for(i = height.length - 1; i >= 0 ; i--){
        right[i] = rm
        rm = Math.max(rm,height[i])
    }
    let ans = 0
    for(i = 0; i < height.length; i++){
        let cell = Math.min(left[i],right[i]) - height[i]
        if(cell > 0) ans += cell
        
    }
    return ans
}