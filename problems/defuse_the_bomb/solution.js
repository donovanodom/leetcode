const decrypt = function(code, k) {
    if(k == 0) return Array(code.length).fill(0)
    code = code.concat(code).concat(code)
    let i = k > 0 ? (code.length / 3) + 1 : (code.length / 3), j = i + k
    let sum = k > 0 ? code.slice(i, j).reduce((a,b) => a + b) : code.slice(j, i).reduce((a,b) => a + b), ans = [sum]
    while(ans.length < code.length / 3){
        sum = k > 0 ? sum - code[i] + code[j] : sum + code[i] - code[j]
        ans.push(sum)
        i++
        j++
    }
    return ans
}