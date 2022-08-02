const validTree = function(n, edges) {
    if(n != edges.length + 1) return false
    const parents = Array(n).fill().map((_,i) => i)
    const rank = Array(n).fill(1)
    const find = (node) => {
        if(parents[node] == node){
            return parents[node]
        }else{
            return find(parents[node])    
        }
    }
    const union = (x,y) => {
        let repx = find(x), repy = find(y)
        if(repx == repy) return false
        if(rank[repx] > rank[repy]){
            parents[repy] = repx
            rank[repx] += rank[repy]
        }else{
            parents[repx] = repy
            rank[repy] += rank[repx]
        }
        return true
    }
    for(const [a,b] of edges){
        if(!union(a,b)) return false
    }
    return true  
}