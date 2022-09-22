const maxScore = function(s) {
    let max = 0
    for(i = 1; i < s.length; i++){
        let sum = 0, l = s.slice(0,i), r = s.slice(i)
        
        for(z = 0; z < l.length; z++){
            if(l[z] == '0') sum++
        }
        for(o = 0; o < r.length; o++){
            if(r[o] == '1') sum++
        }
        max = Math.max(max, sum)
    }
    return max
}