const reorderList = (head) => {
    let map = {}, c = head, n = 0
    while(c){
        map[n] = c
        c = c.next
        n++
    }
    let dummy = new ListNode()
    c = dummy
    for(i = 0; i < n; i++){
        if(i % 2 == 0){
            c.next = map[i / 2]
            c = c.next
        }else{
            c.next = map[n - 1 - (i - 1) / 2]
            c = c.next
        }
    }
    c.next = null
}
