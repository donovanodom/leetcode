const removeNthFromEnd = (head, n) => {
    if(!head.next){
        head = head.next
        return head
    }
    let array = []
    while(head){
        array.push(head.val)
        head = head.next
    }
    array.splice(array.length - n, 1)
    let answer = new ListNode
    let dummy = answer
    console.log(array)
    for(i = 0; i < array.length; i++){
        dummy.next = new ListNode(array[i])
        dummy = dummy.next
    }
    return answer.next
}