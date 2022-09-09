class Solution:
    def minDeletionSize(self, strs: List[str]) -> int:
        count = 0
        cols = list(zip(*strs))
        for word in cols:
            for i in range(len(word) - 1):
                if word[i] > word[i + 1]:
                    count += 1
                    break
        return count
        