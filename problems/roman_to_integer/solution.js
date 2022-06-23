const romanToInt = (s) => {
    const romans = {"I":1,"V":5, "X":10, "L":50,"C":100, "D":500, "M":1000 }
    let answer = 0, i = 0
    while(i < s.length){
        if(s[i+1] && romans[s[i]] < romans[s[i+1]]){
            answer = answer - romans[s[i]]
        }else{
            answer = answer + romans[s[i]]
        }
        i++
    }
    return answer
}