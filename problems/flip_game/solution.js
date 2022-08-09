const generatePossibleNextMoves = function(currentState) {
    if(currentState.length == 1) return []
    const ans = []
    for(i = 1; i < currentState.length; i++){
        if(currentState[i] == '+' && currentState[i-1] == '+'){
            ans.push(currentState.slice(0,i - 1) + '--' +currentState.slice(i + 1))
        }
    }
    return ans
}