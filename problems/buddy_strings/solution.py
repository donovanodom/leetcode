class Solution:
    def buddyStrings(self, s: str, goal: str) -> bool:
        if len(s) != len(goal):
            return False
        chars, pres, diff = {}, {}, 0
        for i in range(0,len(goal)):
            chars[i] = goal[i]
            if goal[i] not in pres:
                pres[goal[i]] = 0
            pres[goal[i]] += 1
        mult = False
        for i in range (0,len(s)):
            if s[i] not in pres:
                return False
            elif pres[s[i]] > 1:
                mult = True
            if pres[s[i]] == 0:
                return False
            pres[s[i]] -= 1
            if chars[i] != s[i]:
                diff += 1 
        if diff == 2 or diff == 0 and mult:
            return True
        return False
        