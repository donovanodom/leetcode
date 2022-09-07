class Solution:
    def uniqueMorseRepresentations(self, words: List[str]) -> int:
        morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
        abc = list(string.ascii_lowercase)
        chars = dict(zip(abc,morse))
        seen = set()
        for word in words:
            str = ''
            for char in word:
                str += chars[char]
            seen.add(str)
        return len(seen)
        
        
