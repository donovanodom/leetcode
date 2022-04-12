const objRtoI = {"I":1,"V":5, "X":10, "L":50,"C":100, "D":500, "M":1000 }
const romanToInt = (s) => {
    let arr = s.split('');
    let answer = 0;
    
    for (i=0; i<s.length; i++)
    {
        if (s[i+1] && objRtoI[s[i]] < objRtoI[s[i+1]]) {
            answer = answer-objRtoI[s[i]];
        }else{
            answer = answer+objRtoI[s[i]];
        }
    }
    return answer;
};