const findContentChildren = function(g, s) {
    g.sort((a,b) => b - a)
    s.sort((a,b) => b - a)
    let i = 0, j = 0, ans = 0
    while(i < g.length){
        if(s[j] >= g[i]){
            ans++
            i++
            j++
        }else{
            i++
        }
    }
    return ans
}