const getIntersectionNode = function(headA, headB) {
    let dummy1 = headA, dummy2 = headB 
    while(dummy1 != dummy2){
        dummy1 = dummy1 ? dummy1.next : headA
        dummy2 = dummy2 ? dummy2.next : headB
    }
    return dummy1
}