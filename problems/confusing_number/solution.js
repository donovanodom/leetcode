const confusingNumber = function(n) {
    let inValids = ['2','3','4','5','7']
    let comps = {
        '1':'1',
        '6':'9',
        '8':'8',
        '9':'6',
        '0':'0'
    }
    n = String(n)
    for(const char of n){
        if(inValids.indexOf(char) >= 0) return false
    }
    let m = ''
    for(i = 0; i < n.length; i++){
        m = comps[n[i]] + m
    }
    return Number(n) != Number(m)
}