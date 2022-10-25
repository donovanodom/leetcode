const numTrees = function(n) {
    const memo = {}
    const rec = (n) => {
        if(n <= 1) return 1
        let res = 0, i = 0
        while(i < n){
            let left, right
            if(memo[i]){
                left = memo[i]
            }else{
                left = rec(i)
                memo[i] = left
            }
            if(memo[n - i - 1]){
                right = memo[n - i - 1]
            }else{
                right = rec(n - i - 1)
                memo[n - i - 1] = right
            }
            res += left * right
            i++
        }
        return res
    }
    return rec(n)
}