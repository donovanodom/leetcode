const isPalindrome = (head) => {
    let arr = []
    while(head){
        arr.push(head.val)
        head = head.next
    }
    return arr.join('') == arr.slice().reverse().join('')    
}