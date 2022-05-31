const hasPathSum = (root, targetSum) => { 
    if(!root) return false
    let sums = []
    const checkSums = (root, sum) => {
        if(root){
            sum += root.val
            if(!root.left && !root.right) sums.push(sum) 
            checkSums(root.right, sum)
            checkSums(root.left, sum)
        }  
    }
    checkSums(root, sum = 0)
    return sums.includes(targetSum)
}

