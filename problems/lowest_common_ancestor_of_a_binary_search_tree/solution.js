const lowestCommonAncestor = function(root, p, q) {
    if(!root || root == p || root == q) return root
    let left = lowestCommonAncestor(root.left, p, q) 
    let right = lowestCommonAncestor(root.right, p, q) 
    if(left && right){
        return root
    }else if(left){
        return left
    }else{
        return right
    }
}

// const lowestCommonAncestor = (root, p, q) => {
//     if(p.val < root.val && q.val < root.val){
//         return lowestCommonAncestor(root.left, p, q)
//     }else if(p.val > root.val && q.val > root.val){
//         return lowestCommonAncestor(root.right, p, q)
//     }else{
//         return root
//     }
// }