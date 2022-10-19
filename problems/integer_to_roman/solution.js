const intToRoman = function(num) {
    const romans = {
        1 : "I",
        5: "V",
        10: "X",
        50: "L",
        100: "C",
        500: "D",
        1000: "M"
    }
    num = String(num).split('').reverse().join('')
    let ans = ''
    for(i = 0; i < num.length; i++){
        let n = Number(num[i]), place = 10 ** i, cur = place * n
        if(n == 9){
            ans = romans[place] + romans[place*10] + ans
        }else if(n == 4){
            ans = romans[place] + romans[(place*10)/2] + ans
        }else if(n == 5){
            ans = romans[cur] + ans
        }else if(n < 4){
            ans = romans[place].repeat(n) + ans
        }else if(n > 5){
            ans = romans[place * 5] + romans[place].repeat(n - 5) + ans
        }
    }
    return ans
}