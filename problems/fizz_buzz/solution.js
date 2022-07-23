const fizzBuzz = function(n) {
    const fb = Array(n + 1).fill(0)
    for(i = 1; i < n + 1; i++){
        if(i % 3 == 0 && i % 5 == 0){
            fb[i] = 'FizzBuzz'
        }else if(i % 3 == 0){
            fb[i] = 'Fizz' 
        }else if(i % 5 == 0){
            fb[i] = 'Buzz' 
        }else{
            fb[i] = `${i}`
        }
    }
    fb.shift()
    return fb
}