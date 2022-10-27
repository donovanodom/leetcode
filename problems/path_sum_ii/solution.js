const pathSum = function(root, targetSum) {
    let list = {}
    const traverse = (node, sum = 0, arr = []) => {
        if(!node) return
        sum += node.val
        if(!node.left && !node.right && sum == targetSum){
            arr.push(node.val)
            if(!list[sum]) list[sum] = []
            list[sum].push(arr)
        } 
        traverse(node.left, sum, [...arr, node.val]) 
        traverse(node.right, sum, [...arr, node.val])
        return list
    }
    traverse(root)
    return list[targetSum] ? list[targetSum] : []
};

