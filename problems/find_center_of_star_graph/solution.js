const findCenter = function(edges) {
    let arr = Array(edges.length + 1).fill(0)
    for(const [x,y] of edges){
        arr[x - 1]++
        arr[y - 1]++
    }
    return arr.indexOf(edges.length) + 1
}