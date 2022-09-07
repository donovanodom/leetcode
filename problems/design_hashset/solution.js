
var MyHashSet = function() {
    this.hash = []
}

MyHashSet.prototype.add = function(key) {
    if(this.hash.indexOf(key) < 0) this.hash.push(key)
}

MyHashSet.prototype.remove = function(key) {
    if(this.hash.indexOf(key) >= 0) this.hash.splice(this.hash.indexOf(key),1)
}

MyHashSet.prototype.contains = function(key) {
    if(this.hash.indexOf(key) >= 0) return true
    return false
}
