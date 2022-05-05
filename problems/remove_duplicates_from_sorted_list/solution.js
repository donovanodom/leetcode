const deleteDuplicates = (head) => {
    let arr = []
    while(head){
        arr.push(head.val)
        head = head.next
    }
    let result = new ListNode
    let dummy = result
    let uniq = [...new Set(arr)]
    for(const num in uniq){
        dummy.next = new ListNode(uniq[num])
        dummy = dummy.next
    }
    return result.next
}