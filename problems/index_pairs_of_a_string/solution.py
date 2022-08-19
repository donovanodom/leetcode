class Solution:
    def indexPairs(self, text: str, words: List[str]) -> List[List[int]]:
        ans = list()
        i = 0
        while i < len(text):
            j = i
            while j < len(text):
                word = text[i:j+1]
                if word in words:
                    ans.append([i,j])
                j += 1
            i += 1
        return ans
        