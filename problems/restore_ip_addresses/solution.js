const restoreIpAddresses = function(s) {
    let len = s.length, res = []
    if(len > 12) return res
    const search = (i, per, cur) => {
        if(per == 4 && i == len){
            res.push(cur.slice(0, cur.length - 1))
            return
        }else if(per > 4){
            return
        }
        let j = i
        while(j < Math.min(i + 3, len)){
            if(Number(s.slice(i,j + 1)) <= 255 && (i == j || s[i] != '0')){
                search(j + 1, per + 1, cur + s.slice(i,j + 1) + '.')
            }
            j++
        }
    }
    search(0, 0, '')
    return res
}