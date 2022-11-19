const construct2DArray = function(original, m, n) {
    if(m * n != original.length) return []
    return Array(m).fill().map((x) => x = Array(n).fill().map((y) => y = original.shift()))
}