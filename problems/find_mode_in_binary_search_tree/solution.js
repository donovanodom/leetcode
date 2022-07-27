const findMode = function(root) {
    let list = {}, answer = []
    const rec = (root) => {
        if (!root) return
        if(!list[root.val]) list[root.val] = 0
        list[root.val]++
        rec(root.left)
        rec(root.right)
    }
    rec(root)
    let max = Object.keys(list).map((key) => list[key]).sort().pop()
    for(const key in list){
        if(list[key] == max) answer.push(key)
    }
    return answer
}