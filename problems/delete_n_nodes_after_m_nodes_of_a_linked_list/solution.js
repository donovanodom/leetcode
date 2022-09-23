const deleteNodes = function(head, m, n) {
    let ans = new ListNode(), i = m, j = n, dummy = ans
    while(head){
        if(i && head){
            dummy.next = new ListNode(head.val)
            head = head.next
            dummy = dummy.next
            i--
        }else{
            while(j && head){
                head = head.next
                j--
            }
            i = m
            j = n
        } 
    }
    return ans.next
}