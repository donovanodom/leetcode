
var MyHashMap = function(map) {
    this.map = []
}


MyHashMap.prototype.put = function(key, value) {
    let index = -1
    this.map.find((el,i) => {
        if(el[0] == key) index = i
    })
    if(index < 0){
        this.map.push([key,value]) 
        
    }else{
        this.map[index][1] = value
    }
}


MyHashMap.prototype.get = function(key) {
    for(i = 0; i < this.map.length; i++){
        let k = this.map[i][0], v = this.map[i][1]
        if(k == key){
            return v
        }
    }
    return -1
}


MyHashMap.prototype.remove = function(key) {
    for(i = 0; i < this.map.length; i++){
        let k = this.map[i][0]
        if(k == key){
            this.map.splice(i,1)
            break
        }
    }
}
