const countComponents = function(n, edges) {
    const parents = Array(n).fill().map((_,i) => i)
    const find = (node) => {
        if(parents[node] == node){
            return parents[node]
        }else{
            return find(parents[node])
        }
    }
    const union = (x,y) => {
        let repx = find(x), repy = find(y)
        if(repx != repy){
            parents[repy] = repx
        }
    }
    for(const [a,b] of edges){
        union(a,b)
    }
    let answer = 0
    for(i = 0; i < parents.length; i++){
        if(parents[i] == i) answer++
    }
    return answer
}

// const countComponents = function(n, edges) {
//     let adjList = {}, visited = new Set(), count = 0
//     for(i = 0; i < n; i++){
//         adjList[i] = []
//     }
//     edges.forEach((edge) => {
//         let x = edge[0], y = edge[1]
//         adjList[x].push(y)
//         adjList[y].push(x)        
//     })

//     for(let node in adjList){
//         node = Number(node)
//         if(traverse(node,adjList,visited)) count += 1
//     }
//     return count
// }

// const traverse = (node, adjList, visited) => {
//     if(visited.has(node)) return false
//     visited.add(node)
//     for(const next of adjList[node]){
//         traverse(next, adjList, visited)
//     }
//     return true
// }
