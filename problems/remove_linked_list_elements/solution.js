const removeElements = (head, val) => {
    let answer = new ListNode
    let dummy = answer
    while(head){
        if(head.val == val){
            head = head.next
            continue
        }
        dummy.next = new ListNode(head.val)
        dummy = dummy.next
        head = head.next
    }
    return answer.next
}