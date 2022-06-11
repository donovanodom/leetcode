const verticalOrder = (root) => {
    if(!root) return []
    let q = [[root, 0]], 
    map = {}
    while(q.length > 0){
        for(const [node, x] of q){
            if(!map[x]) map[x] = []
            map[x].push(node.val)
        }
        const len = q.length
        let i = 0
        while(i < len){
            let [node, x] = q.shift()
            if(node.left){
                q.push([node.left, x - 1])
            } 
            if(node.right){
                q.push([node.right, x + 1])
            } 
            i++
        }
    }
    return Object.keys(map).sort((a,b) => a - b).map((x) => map[x])

}