const rotateRight = function(head, k) {
    let dummy = new ListNode(), length = 0
    dummy = head
    while(dummy){
        length++
        dummy = dummy.next
    }
    k = k > length ? k % length : k
    if(k == length) return head
    let j = k, end = new ListNode(), right = end
    while(k < length){
        right.next = new ListNode(head.val)
        right = right.next
        head = head.next
        k++
    }
    end = end.next
    let res = new ListNode(), ans = res
    while(head){
        ans.next = new ListNode(head.val)
        ans = ans.next
        head = head.next
    }
    while(end){
        ans.next = new ListNode(end.val)
        ans = ans.next
        end = end.next
    }
    return res.next
}