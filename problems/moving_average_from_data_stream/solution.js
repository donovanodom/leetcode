const MovingAverage = function(size) {
    this.size = size
    this.tracker = {}
    this.pointer = 0
    this.sum = 0
}

MovingAverage.prototype.next = function(val) {
    this.sum += val
    this.tracker[this.pointer] = val
    if(Object.keys(this.tracker).length > this.size){    
        this.sum -= this.tracker[this.pointer - this.size] 
        this.pointer++
        return  this.sum / this.size 
    }else{
        this.pointer++
        return  this.sum / Object.keys(this.tracker).length
    }  
}

