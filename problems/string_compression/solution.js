const compress = (chars) => {
    let counter = 0, index = 0
    chars.map((char, i) => {
        if(char == chars[i + 1]) counter++
        else{
            if(!counter){
                chars[index] = char
                index++
            }
            if(counter){
                chars[index] = char
                counter++
                for(const num of counter.toString()) {
                    index++
                    chars[index] = num
                }
                counter = 0
                index++
            } 
        }
    })
    
    return index
}