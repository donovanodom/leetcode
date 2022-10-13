const countMatches = function(items, ruleKey, ruleValue) {
    let count = 0, index = ['type', 'color', 'name'].indexOf(ruleKey)
    for(const item of items){
        if(item[index] == ruleValue) count++
    }
    return count
};