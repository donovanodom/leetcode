const hammingWeight = (n) => {
    let answer = 0, x = n.toString(2)
    for(i = 0; i < x.length; i++){
        if(x[i] == 1) answer++
    }
    return answer
}