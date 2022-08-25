class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        magLen = len(magazine)
        for i in range(len(ransomNote)):
            char = ransomNote[i]
            if char in magazine:
                magazine = magazine.replace(char,'',1)
            if magLen - len(ransomNote) == len(magazine):
                return True
        return False
        