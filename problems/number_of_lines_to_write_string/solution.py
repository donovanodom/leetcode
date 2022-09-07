class Solution:
    def numberOfLines(self, widths: List[int], s: str) -> List[int]:
        table = dict(zip(list(string.ascii_lowercase),widths))
        count, lines = 0, 0
        for char in s:
            if count + table[char] <= 100:
                count += table[char]
            else:
                count = table[char]
                lines += 1
        return [lines + 1, count]