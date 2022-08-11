const findRelativeRanks = function(score) {
    let medals = {}
    const score2 = [...new Set(score)]
    score2.sort((a,b) => b - a)
    for(i = 0 ; i < score2.length; i++){
        if(i == 0){
            medals[score2[i]] = "Gold Medal"
        }else if(i == 1){
            medals[score2[i]] = "Silver Medal"
        }else if(i == 2){
            medals[score2[i]] = "Bronze Medal"
        }else{
            medals[score2[i]] = `${i + 1}`
        }
    }
    for(i = 0 ; i < score.length; i++){
        score[i] = medals[score[i]]
    }
    return score
}