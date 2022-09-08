class Solution:
    def lemonadeChange(self, bills: List[int]) -> bool:
        bank = {5:0,10:0,20:0}
        for bill in bills:
            cur = bill
            if bill == 5:
                bank[bill] += 1
            elif bill == 10:
                bank[bill] += 1
                while cur > 5:
                    if bank[5] == 0:
                        return False
                    bank[5] -= 1
                    cur -= 5
            else:
                bank[bill] += 1
                while cur > 5:
                    if cur > 15 and bank[10] > 0:
                        bank[10] -= 1
                        cur -= 10
                    elif bank[5] > 0:
                        bank[5] -= 1
                        cur -= 5
                    else:
                        return False
        return True