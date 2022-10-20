const groupAnagrams = function(strs) {
    let used = Array(strs.length).fill(false), ans = []
    for(i = 0; i < strs.length; i++){  
        if(used[i]){
            continue
        }else{
            used[i] = true
            const alpha = Array(26).fill(0)
            let sub = [strs[i]], j = 0
            while(j < strs[i].length){
                let char = strs[i].charCodeAt(j) - 97
                alpha[char]++
                j++
            }
            let k = i + 1
            while(k < strs.length){
                let arr = [...alpha], l = 0
                while(l < strs[k].length){
                    let char = strs[k].charCodeAt(l) - 97
                    arr[char]--
                    l++
                }
                let anagram = true
                for(const num of arr){
                    if(num != 0) anagram = false
                }
                if(anagram){
                    sub.push(strs[k])
                    used[k] = true
                }
                
                k++
            }  
            ans.push(sub)
        } 
    }
    return ans
}