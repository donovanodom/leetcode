
var RecentCounter = function() {
    this.range = 0
    this.recents = []
    
}

RecentCounter.prototype.ping = function(t) {
    if(this.range == 0){
        this.range = t
        this.recents.push(t)
        return this.recents.length
    }else{
        this.range = t
        while(this.recents[0] < t - 3000){
            this.recents.shift()
        }
        this.recents.push(t)
        return this.recents.length
    }
}