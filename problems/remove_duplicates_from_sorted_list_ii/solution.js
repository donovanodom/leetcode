const deleteDuplicates = (head) => {
    let arr = []
    while(head){
        arr.push(head.val)
        head = head.next
    }
    
    arr = arr.filter((x, _, arr) => {
          return arr.filter(y => y === x).length === 1
    })
    let answer = new ListNode
    let dummy = answer
    for(i = 0; i < arr.length; i++){
        dummy.next = new ListNode(arr[i])
        dummy = dummy.next
    }
    return answer.next
}