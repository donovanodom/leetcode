const letterCombinations = (digits) => {
    const comb = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }
    const perms = []
    const pathLength = digits.length;
    
    const test = (digits, path) => {
        if (path.length === pathLength) {
            perms.push(path)
            return
        }
        for (let val of comb[digits[0]]) {
            test(digits.slice(1), path + val)
        }
    }
    test(digits, "")
    return digits != "" ? perms : []
}
