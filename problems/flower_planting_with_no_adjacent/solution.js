const gardenNoAdj = (n, paths) => {
    const adjList = Array(n + 1).fill(0).map(() => [])
    const answer = Array(n + 1).fill(0)   
    for(const [x,y] of paths){
         adjList[x].push(y)
         adjList[y].push(x)
    }
    for(const index in adjList){
        let q = [index] 
        while(q.length) {
            const vert = q.shift()
            const flowers = [1, 2, 3, 4]      
            if(answer[vert]) continue
            const seen = new Set()
            for(const next of adjList[vert]) {
                if(answer[next]){
                    seen.add(answer[next])
                }else{
                    q.push(next)  
                } 
            }
            for(const flower of flowers){
                if(!seen.has(flower)) answer[vert] = flower
            }
        }
    }
    return answer.slice(1)   
}