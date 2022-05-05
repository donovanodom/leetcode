const reverseList = (head) => {
    let previous = null, current = head, following = head
    while(following){
        following = following.next
        current.next = previous
        previous = current
        current = following
    }
    return previous
}