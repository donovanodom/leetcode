const partition = function(head, x) {
    let left = [], right = []
    while(head){
        if(head.val < x){
            left.push(head.val)
        }else{
            right.push(head.val)
        }
        head = head.next
    }
    let ans = new ListNode(), dummy = ans
    while(left.length){
        dummy.next = new ListNode(left.shift())
        dummy = dummy.next
    }
    while(right.length){
        dummy.next = new ListNode(right.shift())
        dummy = dummy.next
    }
    return ans.next
}