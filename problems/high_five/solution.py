class Solution:
    def highFive(self, items: List[List[int]]) -> List[List[int]]:
        scores = dict()
        for [pers,score] in items:
            if pers not in scores:
                scores[pers] = list()
            if len(scores[pers]) > 0:
                low = min(scores[pers])
                if len(scores[pers]) == 5 and low < score:
                    scores[pers][scores[pers].index(low)] = score
                elif len(scores[pers]) == 5 and low >= score:
                    continue
                else:
                    scores[pers].append(score)
            else:
                scores[pers].append(score)
        ans = list()
        for key in scores:
            average = math.floor(sum(scores[key]) / 5)
            ans.append([key,average])
        ans.sort(key=lambda x:x[0])
        return ans