const validPath = function(n, edges, source, destination) {
    const adjList = {}, visited = new Set()
    edges.forEach((edge) => {
        let x = edge[0], y = edge[1]
        if(!adjList[x]) adjList[x] = []
        adjList[x].push(y)
        if(!adjList[y]) adjList[y] = []
        adjList[y].push(x)        
    })

    const dfs = (node) => {
        visited.add(node)
        adjList[node] && adjList[node].forEach((next) => {
            if(!visited.has(next)) dfs(next)
        })
        
    }
    dfs(source)
    return visited.has(destination)
}
