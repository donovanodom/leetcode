const leadsToDestination = function(n, edges, source, destination) {
    const adj = {}
    for(const [x,y] of edges){
        if(!adj[x]) adj[x] = []
        adj[x].push(y)
    }
    if(adj[destination]) return false
    let visited = new Set()
    const dfs = (node) => {
        if(!adj[node]) return node == destination
        if(visited.has(node)) return false 
        visited.add(node)
        for(const next of adj[node]){
            if(!dfs(next)) return false
        }
        visited.delete(node)
        return true
    }
    return dfs(source)
}