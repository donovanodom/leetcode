class Solution:
    def calPoints(self, ops: List[str]) -> int:
        stack = []
        for op in ops:
            if op == "+":
                stack.append(int(stack[-1]) + int(stack[-2]))
            elif op == "D":
                stack.append(int(stack[-1]) * 2)
            elif op == "C":
                stack.pop(-1)
            else:
                stack.append(int(op))
        return sum(stack)
        