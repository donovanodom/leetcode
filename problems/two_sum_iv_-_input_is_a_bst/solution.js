const findTarget = (root, k) => {
    const arr = []
    const values = (root) => {
        arr.push(root.val)
        root.left ? values(root.left) : null
        root.right ? values(root.right) : null
    }
    values(root)
    for(i = 0; i < arr.length - 1; i++){
        for(j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] == k) return true
        }
    }
    return false
}