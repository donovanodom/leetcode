const sortList = (head) => {
    let arr = []
    while(head){
        arr.push(head.val)
        head = head.next
    }
    arr.sort(function(a,b){return a - b})
    let sorted = new ListNode
    let dummy = sorted
    for(i = 0; i < arr.length; i++){
        dummy.next = new ListNode(arr[i])
        dummy = dummy.next
            
    }
    return sorted.next
}