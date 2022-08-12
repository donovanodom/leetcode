const StringIterator = function(compressedString) {
    this.string = ''
    this.index = 0
    this.chars = {}
    let i = 0
    while(i < compressedString.length){
        let j = i + 1
        while(compressedString[j + 1] && !isNaN(compressedString[j + 1])){
            j++
        }
        let count = compressedString.slice(i+1,j+1)
        this.chars[`${this.string.length}`] = Number(count)
        this.string += compressedString[i]
        i = j + 1
    }
}

StringIterator.prototype.next = function() {
    let char = this.string[this.index]
    this.chars[this.index]--
    if(this.chars[this.index] == 0) this.index++
    return char ? char : " "
}

StringIterator.prototype.hasNext = function() {
    return this.index < this.string.length 
}