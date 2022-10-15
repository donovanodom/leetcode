const numDifferentIntegers = function(word) {
    let count = [], i = 0
    while(i < word.length){
        let j = i
        if(/\d/.test(word[j])){
            while(/\d/.test(word[j])){
                j++
            }
            let num = word.slice(i,j), k = 0
            while(num[k] == '0') num = num.slice(1)
            count.push(num)
            i = j
        }else{
            i++
        }
    }
    return [...new Set(count)].length
}