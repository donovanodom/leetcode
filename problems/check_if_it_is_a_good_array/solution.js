const isGoodArray = (nums) => {
    const gcd = (a, b) => (b ? gcd(b, a % b) : a)
    return nums.reduce((g, n) => gcd(g, n)) === 1
}

// credited to https://leetcode.com/problems/check-if-it-is-a-good-array/discuss/1309095/1250-true-if-gcd(array)-is-1-use-co-primes-existence-for-early-exit