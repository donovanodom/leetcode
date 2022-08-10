const TwoSum = function() {
    this.sums = new Set()
    this.set = new Set()
}

TwoSum.prototype.add = function(number) {
    if(!this.set.size){
        this.set.add(number) 
    }else{
        for(const value of this.set){
            this.sums.add(value + number)
        }
        this.set.add(number)
    }
}

TwoSum.prototype.find = function(value) {
    return this.sums.has(value)
}