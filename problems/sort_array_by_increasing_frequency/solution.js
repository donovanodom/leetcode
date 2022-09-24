const frequencySort = function(nums) {
    let obj = {}
    for(const num of nums){
        if(!obj[num]) obj[num] = []
        obj[num].push(num)
    }
    let sets = [], ans = []
    Object.keys(obj).map((x) => {
        sets[obj[x].length] ? sets[obj[x].length].push(...obj[x]) : sets[obj[x].length] = obj[x]
    })
    for(i = 0; i < sets.length; i++){
        if(sets[i]){
            sets[i].sort((a,b) => b - a)
            ans.push(...sets[i])
        } 
    }
    return ans  
}