const levelOrder = (root) => {
    if(!root) return []
    let q = [[root,0]], map = {}
    while(q.length){
        for(const [node,x] of q){
            if(!map[x]) map[x] = []
            map[x].push(node.val)
        }
        const len = q.length
        let i = 0
        while(i < len){
            let [node,x] = q.shift()
            if(node.left) q.push([node.left,x+1])
            if(node.right) q.push([node.right,x+1])
            i++
        }
    }
    
    return Object.keys(map).map((key) => map[key])
}