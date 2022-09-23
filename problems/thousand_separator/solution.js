const thousandSeparator = function(n) {
    n = String(n)
    let ans = ''
    for(i = n.length - 4; i >= 0; i -= 3){
        ans = '.' + n.slice(i + 1, i + 4) + ans
    }
    ans = n.length % 3 ? n.slice(0, n.length % 3) + ans : n.slice(0,3) + ans
    return ans
}