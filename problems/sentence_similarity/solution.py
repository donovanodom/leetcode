class Solution:
    def areSentencesSimilar(self, sentence1: List[str], sentence2: List[str], similarPairs: List[List[str]]) -> bool:
        if len(sentence1) != len(sentence2):
            return False
        obj = dict()
        for [x,y] in similarPairs:
            if x not in obj:
                obj[x] = set()
            if y not in obj:
                obj[y] = set()
            obj[x].add(y)
            obj[y].add(x)
        for i in range(len(sentence1)):
            if sentence1[i] not in obj:
                obj[sentence1[i]] = set()
            if sentence2[i] not in obj:
                obj[sentence2[i]] = set()
            if sentence1[i] != sentence2[i] and sentence2[i] not in obj[sentence1[i]] and sentence1[i] not in obj[sentence2[i]]:
                return False
        return True
        