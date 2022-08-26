class Solution:
    def canCross(self, stones: List[int]) -> bool:
        q, final, memo = [[0,0]], len(stones) - 1, dict()
        while len(q):
            [i,k] = q.pop(0)
            if i == final:
                return True
            if k == 0 and i > 0 or '{}:{}'.format(i,k) in memo:
                continue
            else:
                memo['{}:{}'.format(i,k)] = True
                j = i + 1
                while j < final + 1 and stones[j] <= stones[i] + k + 1:
                    if stones[i] + k == stones[j]:
                        q.append([j,k])
                    if stones[i] + k + 1 == stones[j]:
                        q.append([j,k + 1])
                    if stones[i] + k - 1 == stones[j]: 
                        q.append([j,k - 1])
                    j += 1
        return False