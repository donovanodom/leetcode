const swapPairs = (head) => {
    if(!head || !head.next) return head
    let following = head.next, adjacent = head.next.next
    following.next = head
    head.next = swapPairs(adjacent)
    return following
}