const MovingAverage = function(size) {
    this.size = size
    this.tracker = []
    this.sum = 0
}

MovingAverage.prototype.next = function(val) {
    if(this.tracker.length < this.size){
        this.tracker.push(val)
    }else{
        this.sum -= this.tracker.shift()
        this.tracker.push(val)
    }
    this.sum += val
    return  this.sum / this.tracker.length    
}

