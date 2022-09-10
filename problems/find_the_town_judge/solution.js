const findJudge = function(n, trust) {
    let trusts = Array(n).fill(0), trustedBy = Array(n).fill(0)
    for(const [x,y] of trust){
        trusts[x-1]++
        trustedBy[y-1]++
    }
    for(i = 0; i < n; i++){
        if(!trusts[i] && trustedBy[i] == n - 1) return i + 1
    }
    return -1
}