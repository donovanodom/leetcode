
const Logger = function() {
    this.messages = {}
}


Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if(!this.messages[message]) this.messages[message] = []
    let current = this.messages[message]
    if(current.length < 1 || current[current.length - 1] + 10 <= timestamp){
        current.push(timestamp)
        return true
    } 
    return false
}

