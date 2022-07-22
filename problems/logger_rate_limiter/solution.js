
const Logger = function() {
    this.messages = new Map()
}


Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if(!this.messages.has(message)) this.messages.set(message, [])
    let current = this.messages.get(message)
    if(current.length < 1 || current[current.length - 1] + 10 <= timestamp){
        current.shift()
        current.push(timestamp)
        return true
    } 
    return false
}

