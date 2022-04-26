const middleNode = (head) => {
    let length = 0
    let current = head
    while(current){
        current = current.next
        length++
    }
    let i = Math.floor(length/2)
    length = 0
    while(length < i){
        head = head.next
        length++
    }
    return head
};