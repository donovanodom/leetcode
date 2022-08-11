const findLUSlength = function(a, b) {
    let ans = Math.max(max(a,b),max(b,a)) 
    return ans ? ans : -1
}

const max = (a,b) => {
    let ans = 0, i = 0
    while(i < a.length){
        let j = i
        while(j < b.length){
            if(b.indexOf(a.slice(i,j + 1)) == -1 || a.indexOf(b.slice(i,j + 1)) == -1) ans = Math.max(j + 1 - i,ans)
            j++
        }
        i++
    }
    return ans
}