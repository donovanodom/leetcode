const removeNthFromEnd = (head, n) => {
    if(!head.next){
        head = head.next
        return head
    }
    let arr = []
    let last = head
    while(head){
       arr.push(head.val)
       head = head.next
    }
    arr.splice(arr.length - n, 1)
    head = last
    for(i = 0; i < arr.length; i++){
        last.val = arr[i]
        if(i == arr.length - 1){
            last.next = null
        }else{
            last = last.next
        }
    }
    return head
}