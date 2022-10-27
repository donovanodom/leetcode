const sortedListToBST = function(head) {
    let arr = []
    while(head){
        arr.push(head.val)
        head = head.next
    }
    return createTree(arr)
}

const createTree = (arr) => {
    if(!arr.length) return null
    if(arr.length == 1) return new TreeNode(arr[0])
    let mid = Math.floor(arr.length / 2), root = new TreeNode(arr[mid])
    let left = arr.slice(0,mid) 
    root.left = createTree(left)
    let right = arr.slice(mid + 1, arr.length)
    root.right = createTree(right)
    return root
} 