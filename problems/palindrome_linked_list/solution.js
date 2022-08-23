const isPalindrome = (head) => {
    let og = '', rv = ''
    while(head){
        og += head.val
        rv = head.val + rv
        head = head.next
    }
    return og == rv
}