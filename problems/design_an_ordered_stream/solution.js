const OrderedStream = function(n) {
    this.arr = Array(n).fill()
    this.index = 0
}

OrderedStream.prototype.insert = function(idKey, value) {
    this.arr[idKey - 1] = value
    let ans = []
    while(this.arr[this.index]){
        ans.push(this.arr[this.index])
        this.index++
    }
    return ans
}

