const findRedundantConnection = function(edges) {
    const parents = Array(edges.length).fill().map((_,i) => i)
    const find = (node) => {
        if(parents[node] == node){
            return node
        }else{
            return find(parents[node])  
        }
    }
    const union = (x,y) => {
        let repx = find(x), repy = find(y)
        if(repx == repy) return true
        parents[repy] = repx
    }
    for(const [a,b] of edges){
        if(union(a,b)) return [a,b]
    }
}
