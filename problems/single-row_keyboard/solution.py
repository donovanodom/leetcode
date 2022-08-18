class Solution:
    def calculateTime(self, keyboard: str, word: str) -> int:
        chars = dict()
        for i in range(len(keyboard)):
            chars[keyboard[i]] = i
        time = chars[word[0]]
        for i in range(1,len(word)):
            time += abs(chars[word[i]] - chars[word[i - 1]])
        return time