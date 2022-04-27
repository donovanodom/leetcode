const getDecimalValue = (head) => {
    let result = ''
    while(head){
        result += head.val
        head = head.next
    }
    return parseInt(result, 2)   
}