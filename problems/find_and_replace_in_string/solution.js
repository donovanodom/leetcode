const findReplaceString = function(s, indices, sources, targets) {
    let ans = '', map = {}
    for(i=0;i<indices.length;i++){
        map[indices[i]] = [sources[i],targets[i]]
    }

    for(i=0;i<s.length;i++){
        if(map[i] && s.substr(i,map[i][0].length) === map[i][0]){
            ans += map[i][1]
            i += map[i][0].length - 1
            indices.shift()
            sources.shift()
            targets.shift()
        }else{
            ans += s[i] 
        }
    }
    return ans
}