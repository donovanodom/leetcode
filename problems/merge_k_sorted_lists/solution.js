const mergeKLists = (lists) => {
    const arr = []
    lists.forEach((list) =>{
        while(list){
            arr.push(list.val)
            list = list.next
        }
    })
    arr.sort(function(a,b){return a - b})
    let answer = new ListNode
    let dummy = answer
    for(i = 0; i < arr.length; i++){
        dummy.next = new ListNode(arr[i])
        dummy = dummy.next
    }
    return answer.next
}