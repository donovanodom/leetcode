const minSetSize = function(arr) {
    let obj = {}, ans = 0, len = 0
    for(const num of arr){
        if(!obj[num]) obj[num] = 0
        obj[num]++
    }
    let entries = Object.values(obj).sort((a,b) => a - b)
    while(len < arr.length / 2){         
        len += entries.pop()
        ans++       
    }
    return ans
}