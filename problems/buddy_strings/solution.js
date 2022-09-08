const buddyStrings = function(s, goal) {
    if(s.length != goal.length) return false
    let chars = {}, pres = {}, diff = 0
    for(i = 0; i < goal.length; i++){
        chars[i] = goal[i]
        if(!pres[goal[i]]) pres[goal[i]] = 0
        pres[goal[i]]++
    }
    let mult = false
    for(i = 0; i < s.length; i++){
        if(pres[s[i]] > 1) mult = true
        if(!pres[s[i]]) return false
        pres[s[i]]--
        if(chars[i] != s[i]){
           diff++  
        }
    }
    if(diff == 2 || diff == 0 && mult) return true
    return false
}