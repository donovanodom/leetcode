const findCircleNum = function(isConnected) {
    let cities = [], parents = Array(isConnected.length).fill().map((_,i) => i), prov = 0
    for(i = 0; i < isConnected.length; i++){
        for(j = 0; j < isConnected.length; j++){
            if(isConnected[i][j]) cities.push([i,j])
        }
    }
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
            parents[repy] = repx
        }
    }
    for(const [x,y] of cities){
        union(x,y)
    }
    for(i = 0; i < parents.length; i++){
        if(parents[i] == i) prov++
    }
    return prov
}