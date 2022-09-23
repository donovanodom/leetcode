const mostVisited = function(n, rounds) {
    let total = 0, cur = 0, shift = rounds[0] - 1, arr = Array(n).fill(0).map((x, i) => x = i + 1)
    for(i = 0; i < rounds.length; i++) rounds[i] -= shift
    for(const r of rounds){
        if(total == 0){
            total += 1
        }else if(r < cur){
            total += n - cur + r
        }else if(r == cur){
            total += n
        }else{
            total += r - cur
        }
        cur = r
    }
    while(arr[0] != rounds[0] + shift){
        arr.push(arr.shift())
    }
    return total % n ? arr.slice(0, total % n).sort((a,b) => a - b) : arr.sort((a,b) => a - b)
}