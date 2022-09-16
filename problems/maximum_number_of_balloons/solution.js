const maxNumberOfBalloons = function(text) {
    const arr = [0,0,0,0,0]
    for(const char of text){
        if(char == 'b') arr[0]++
        if(char == 'a') arr[1]++
        if(char == 'l') arr[2]++
        if(char == 'o') arr[3]++
        if(char == 'n') arr[4]++
    }
    return Math.min(arr[0], arr[1], Math.floor(arr[2]/2), Math.floor(arr[3]/2), arr[4])
}