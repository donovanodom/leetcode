const countTriples = function(n) {
    let arr = Array(n).fill().map((_,i) => (i + 1) ** 2), count = 0, i = 0
    while(i < n){
        let j = i + 1
        while(j < n){
            if(arr.includes(arr[i] + arr[j])) count += 2
            j++
        }
        i++
    }
    return count
};