class Solution:
    def toGoatLatin(self, sentence: str) -> str:
        a = 1
        i = 0
        vowels = ['a','e','i','o','u']
        while i < len(sentence):
            if sentence[i].lower() in vowels:
                while i < len(sentence) and sentence[i] != ' ':
                    i += 1
                sentence = sentence[0:i] + 'ma' + 'a' * a + ' ' + sentence[i+1:]
                i += 2 + a
            else:
                temp = sentence[i]
                sentence = sentence[0:i] + sentence[i+1:]
                while i < len(sentence) and sentence[i] != ' ':
                    i += 1
                sentence = sentence[0:i] + temp + 'ma' + 'a' * a + ' ' + sentence[i+1:]
                i += 3 + a
            a += 1
            i += 1
        return sentence.strip()