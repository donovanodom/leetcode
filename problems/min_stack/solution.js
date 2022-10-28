const MinStack = function() {
    this.stack = []
    this.track = [Infinity]
}

MinStack.prototype.push = function(val) {
    if(this.track && val <= this.track[this.track.length - 1]){
        this.track.push(val)
    }
    this.stack.push(val)
}

MinStack.prototype.pop = function() {
    if(this.stack[this.stack.length - 1] <= this.track[this.track.length - 1]){
        this.track.pop()
    }
    this.stack.pop()
}

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
}

MinStack.prototype.getMin = function() {
    return this.track[this.track.length - 1] == Infinity ? null : this.track[this.track.length - 1]
}
