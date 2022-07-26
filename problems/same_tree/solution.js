const isSameTree = (p, q) => {
    if(!q && !p) return true
    if(!p && q || !q && p) return false
    if(p.val == q.val){
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right) 
    }else{
        return false
    }
    return true
}