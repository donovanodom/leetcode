const earliestAcq = function(logs, n) {
    const parents = Array(n).fill().map((_,i) => i)
    const find = (node) => {
        if(parents[node] == node){
            return node
        }else{
            return find(parents[node])
        }
    }
    const union = (x, y) => {
        let dx = find(x), dy = find(y)
        if(dx != dy){
            n--
            parents[dx] = dy
        } 
    }
    logs.sort((a,b) => a[0] - b[0])
    for(const [t,x,y] of logs){
        union(x,y)
        if(n == 1) return t
    }
    return -1
}