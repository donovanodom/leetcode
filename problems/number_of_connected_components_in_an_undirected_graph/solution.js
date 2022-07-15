const countComponents = function(n, edges) {
    let adjList = {}, visited = new Set(), count = 0
    for(i = 0; i < n; i++){
        adjList[i] = []
    }
    edges.forEach((edge) => {
        let x = edge[0], y = edge[1]
        adjList[x].push(y)
        adjList[y].push(x)        
    })

    for(let node in adjList){
        node = Number(node)
        if(traverse(node,adjList,visited)) count += 1
    }
    return count
}

const traverse = (node, adjList, visited) => {
    if(visited.has(node)) return false
    visited.add(node)
    for(const next of adjList[node]){
        traverse(next, adjList, visited)
    }
    return true
}
