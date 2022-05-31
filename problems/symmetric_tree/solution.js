const isSymmetric = (root) => {
    let left = [], right = []
     const checkLeft = (root, list) => {
        if(root){
            list.push(root.val)
            checkLeft(root.left, list)
            checkRight(root.right, list)
        }else{
            list.push('x')
        }
    }
    const checkRight = (root, list) => {
        if(root){
            list.push(root.val)
            checkRight(root.right, list)
            checkLeft(root.left, list)
        }else{
            list.push('x')
        }
    }
    checkLeft(root.left, left)
    checkRight(root.right, right)
    return left.join('') == right.join('')
}