const removeAnagrams = function(words) {
    let set = new Set(), ans = [words[0]]
    for(i = 1; i < words.length; i++){
        let sorted1 = words[i].split('').sort((a,b) => a.localeCompare(b)).join('')
        let sorted2 = ans[ans.length - 1].split('').sort((a,b) => a.localeCompare(b)).join('')
        if(sorted1 != sorted2){
            ans.push(words[i])
        }
    } 
    return ans
}