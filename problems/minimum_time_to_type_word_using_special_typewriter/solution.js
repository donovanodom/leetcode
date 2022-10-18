const minTimeToType = function(word) {
    let moves = 0, alpha = Array(26).fill().map((_,i) => String.fromCharCode(i + 97)), cur = 0
    for(const char of word){
        let next = alpha.indexOf(char)
        let move = Math.min(Math.abs(cur - next), Math.abs(cur - 26) - Math.abs(next - cur) + Math.abs(cur - 0))
        cur = next
        moves += move + 1
    }
    return moves 
}