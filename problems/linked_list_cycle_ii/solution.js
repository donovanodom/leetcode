const detectCycle = function(head) {
    let seen = new Set(), i = 0
    while(head){
        if(seen.has(head)) return head
        seen.add(head)
        i++
        head = head.next
    }
    return null
}