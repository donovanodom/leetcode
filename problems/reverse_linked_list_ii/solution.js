const reverseBetween = (head, left, right) => {
    let arr = [], pos = 1
    while(head){
        if(pos == left){
            let sub = []
            while(pos != right + 1){
                sub.push(head.val)
                head = head.next
                pos++
            }
            arr.push(...sub.reverse())
        }else{
            arr.push(head.val)
            head = head.next
            pos++
        }
    }
    let ans = new ListNode(), dummy = ans
    while(arr.length){
        dummy.next = new ListNode(arr.shift())
        dummy = dummy.next
    }
    return ans.next
}
