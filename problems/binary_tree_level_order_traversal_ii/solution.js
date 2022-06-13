const levelOrderBottom = (root) => {
    if(!root) return []
    let queue = [[root, 0]], map = {}
    while(queue.length){
        for(const [node, x] of queue){
            if(!map[x]) map[x] = []
            map[x].push(node.val)
        }
        const len = queue.length
        let i = 0
        while(i < len){
            let [node, x] = queue.shift()
            if(node.left) queue.push([node.left, x + 1])
            if(node.right) queue.push([node.right, x + 1])
            i++
        }
    }
    return Object.keys(map).map((key) => map[key]).reverse()
}