const numEquivDominoPairs = function(dominoes) {
    let set = {}, count = 0
    for(i = 0; i < dominoes.length; i++){
        let [a,b] = dominoes[i].sort((a,b) => a - b), sub = 0
        if(set[`${a}${b}`]){
            sub = set[`${a}${b}`] - 1
        }else{
            for(j = i + 1; j < dominoes.length; j++){
                let [c,d] = dominoes[j].sort((a,b) => a - b)
                if(a == c && b == d){
                    sub++
                }
            }
        } 
        count += sub
        set[`${a}${b}`] = sub
    }
    return count
}