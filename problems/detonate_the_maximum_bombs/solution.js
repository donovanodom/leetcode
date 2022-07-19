const maximumDetonation = (bombs) => {
    let adjList = {}, max = 0
    for(i = 0; i < bombs.length; i++){
        if(!adjList[i]) adjList[i] = []
        for(j = 0; j < bombs.length; j++){
            let [x,y,r] = bombs[i], h = bombs[j][0], k = bombs[j][1]
            if (Math.sqrt(Math.pow(x-h, 2) + Math.pow(y-k, 2)) <= r) adjList[i].push(j)
        }
    }
    for(i = 0; i < bombs.length; i++){
        if(max == bombs.length) return max
        let q = [i], subMax = 0, visited = new Set()
        const len = q.length
        while(q.length){
            let current = q.shift()
            for(j = 0; j < adjList[current].length; j++){
                if(!visited.has(adjList[current][j])){
                    visited.add(adjList[current][j])
                    subMax++
                    q.push(adjList[current][j])
                   
                }
            }
            if(!q.length) max = Math.max(subMax, max)    
        }    
    }
    return max
}