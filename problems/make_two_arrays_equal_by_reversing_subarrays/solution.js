const canBeEqual = function(target, arr) {
    return target.sort((a,b) => a - b).map((x) => String(x)).join('') == arr.sort((a,b) => a - b).map((x) => String(x)).join('')
}