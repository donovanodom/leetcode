const reverseList = (head) => {
    // p, c, & f will represent previous, current & following nodes respectively 
    let p = null
    let c = head
    let f = head
    while(c){
        f = f.next // Set following equal to following.next
        c.next = p // Set current.next equal to previous
        p = c // Set previous equal to current
        c = f // Set current equal to following
    }
    return p
};