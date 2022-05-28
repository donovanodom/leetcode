
const MyQueue = function(){
    this.first = []
    this.last = []
}

MyQueue.prototype.push = function(x){
    let length = this.first.length;
    for (let i = 0; i < length; i++) {
        this.last.push(this.first.pop())
    }
    this.last.push(x)
    return 1
}


MyQueue.prototype.pop = function(){
    let length = this.last.length
    for (let i = 0; i < length; i++) {
        this.first.push (this.last.pop())
    }
    return this.first.pop()
}

MyQueue.prototype.peek = function(){
    if(this.last.length > 0) {
        return this.last[0]
    }
    return this.first[this.first.length-1]
}


MyQueue.prototype.empty = function(){
    return this.first.length == 0 && this.last.length == 0
}

