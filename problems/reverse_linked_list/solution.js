const reverseList = (head) => {
    let p = null, c = head, f = head
    while(f){
        f = f.next
        c.next = p
        p = c
        c = f
    }
    return p
}