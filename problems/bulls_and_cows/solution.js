const getHint = function(secret, guess) {
    let bull = 0
    for(i = 0; i < secret.length; i++){
        if(secret[i] == guess[i]) bull++
    }
    let cow = 0
    for(i = 0; i < secret.length; i++){
        let temp = guess.indexOf(secret[i])
        if(temp >= 0){
            cow++
            guess = guess.slice(0,temp) + guess.slice(temp + 1)
        } 
    }
    return `${bull}A${cow - bull}B`
}