const makeConnected = function(n, connections) {
    if(connections.length < n - 1) return -1
    const parents = Array(n).fill().map((_,i) => i)
    const find = (node) => {
        if(parents[node] == node){
            return node
        }else{
            parents[node] = find(parents[node])
            return parents[node]
        }
    }
    const union = (x,y) => {
        let repx = find(x), repy = find(y)
        if(repx != repy){
            parents[repy] = x
        }
    }
    for(const [a,b] of connections){
        union(a,b)
    }
    let min = -1
    for(i = 0; i < n; i++){
        if(parents[i] == i) min++
    }
    return min
}