const countNodes = function(root) {
    let obj = traverse(root), l = maxKey(obj), w = obj[l], ans = 0, i = 1, cur = 1
    while(i < l){
        ans += cur
        cur *= 2
        i++
    }
    return ans + w
}

const maxKey = (obj) => {
  return Object.keys(obj).reduce((a, b) => Number(a) > Number(b) ? a : b)
}

const traverse = (node, l = 1, n = 0, obj = {}, stop = false, max = 0) => {
    if(stop && l == max || !node){
        if(!obj[l]) obj[l] = 0
        obj[l] += n
        return obj
    }
    if(!obj[l]) obj[l] = 0
    obj[l]++
    max = Math.max(max, l)
    if(node.right) traverse(node.right, l + 1, n, obj, stop)
    if(node.left){
        traverse(node.left, l + 1, n - 1, obj, stop = true, max)
    } 
    return obj
}