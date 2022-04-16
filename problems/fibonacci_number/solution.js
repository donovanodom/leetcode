const fib = (n) => {
    let sequence = [0,1]
    if(n < 2){
        return n
    }else if(n === 2){
        return 1
    }else{
        for(i = 0; i < n - 1; i++){
            sequence.push(sequence[sequence.length -1 ] + sequence[sequence.length - 2]) 
        }
        return sequence[sequence.length -1 ]
    }
};