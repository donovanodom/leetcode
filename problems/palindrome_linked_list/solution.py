class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        og = ''
        rv = ''
        while head:
            og = og + str(head.val)
            rv = str(head.val) + rv
            head = head.next
        return og == rv
        