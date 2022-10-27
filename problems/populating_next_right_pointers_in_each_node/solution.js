const connect = function(root) {
    let cur = root, n = root ? root.left : null
    while(cur && n){
        cur.left.next = cur.right
        if(cur.next) cur.right.next = cur.next.left
        cur = cur.next
        if(!cur){
            cur = n
            n = cur.left
        }
    }
    return root
}
