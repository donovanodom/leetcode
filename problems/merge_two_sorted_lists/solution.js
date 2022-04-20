const mergeTwoLists = (list1, list2) => {
    if(!list1) return list2
    if(!list2) return list1
    let test = new ListNode
    let tail = test
    while(list1 && list2) {
        if(list1.val <= list2.val) {
            tail.next = list1
            tail = list1
            list1 = list1.next
        } else {
            tail.next = list2
            tail = list2
            list2 = list2.next
        }
    }
    if(!list1) tail.next = list2
    if(list1) tail.next = list1
    return test.next
}