const freqAlphabets = function(s) {
    const key = {
        '1':'a',
        '2':'b',
        '3':'c',
        '4':'d',
        '5':'e',
        '6':'f',
        '7':'g',
        '8':'h',
        '9':'i',
        '10#':'j',
        '11#':'k',
        '12#':'l',
        '13#':'m',
        '14#':'n',
        '15#':'o',
        '16#':'p',
        '17#':'q',
        '18#':'r',
        '19#':'s',
        '20#':'t',
        '21#':'u',
        '22#':'v',
        '23#':'w',
        '24#':'x',
        '25#':'y',
        '26#':'z'
    }
    let ans = '', i = 0
    while(i < s.length){
        let j = i + 1
        if(s[j + 1] == '#') j += 2
        ans += key[s.slice(i, j)]
        i = j
    }
    return ans
}