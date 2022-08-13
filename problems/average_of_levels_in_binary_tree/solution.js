const averageOfLevels = function(root) {
    if(!root) return []
    let obj = {}, ans = [], q = [[root,0]]
    while(q.length){
        let [node,x] = q.shift()
        if(!obj[x]) obj[x] = [0,0]
        obj[x][0] += node.val
        obj[x][1]++
        if(node.left) q.push([node.left, x + 1]) 
        if(node.right) q.push([node.right, x + 1]) 
    }
    Object.keys(obj).forEach((key) => {
        ans.push(obj[key][0] / obj[key][1])
    })
    return ans
}