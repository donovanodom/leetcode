const zigzagLevelOrder = (root) => {
    if(!root) return []
    let queue = [[root, 0]], map = {}
    while(queue.length){
        for(const [root, x] of queue){
            if(!map[x]) map[x] = []
            map[x].push(root.val)
        }
        const len = queue.length
        for(i = 0; i < len; i++){
            const [root, x] = queue.shift()
            if(root.right) queue.push([root.right, x + 1])
            if(root.left) queue.push([root.left, x + 1])
        }
    }
    map = Object.keys(map).map((key) => map[key])
    if(map.length < 3) return map
    for(i = 0; i < map.length; i++){
        if(i % 2 == 0) map[i].reverse()
    }
    return map
}
