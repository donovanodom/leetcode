const allPathsSourceTarget = function(graph) {
    let answer = []
    const dfs = (node, list = []) => {
        if(node == graph.length - 1) answer.push([...list,node])
        if(graph[node]){
            for(const next of graph[node]){
                dfs(next, [...list,node])
            }
        }
    }
    dfs(0)
    return answer
}