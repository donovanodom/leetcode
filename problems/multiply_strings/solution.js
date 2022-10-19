const multiply = function(num1, num2) {
    let i = num1.length - 1, arr = [], place = 0, max = 0, ans = ''
    while(i >= 0){
        let sub = '', car, j = num2.length - 1
        while(j >= 0){
            let num = car ? Number(num1[i]) * Number(num2[j]) + car : Number(num1[i]) * Number(num2[j])
            num = String(num)
            sub = num[num.length - 1] + sub
            if(num.length > 1){
                car = Number(num[0])
            }else{
                car = null
            }
            j--
        }
        if(car){
            sub = String(car) + sub
        }
        sub += '0'.repeat(place)
        max = Math.max(max, sub.length)
        arr.push(sub.split('').reverse().join(''))
        place++
        i--
    } 
    let res = add(arr,max)
    while(res.length > 1 && res[0] == '0') res = res.slice(1)
    return res
}

const add = (arr, max) => {
    let res = '', i = 0, car
    while(i < max){
        let sum = car ? 0 + car : 0
        for(const str of arr){
            if(str[i]){
                sum += Number(str[i])
            }
        }
        sum = String(sum)
        if(sum.length > 1){
            car = Number(sum.slice(0, sum.length - 1))
        }else{
            car = null
        }
        res += sum[sum.length - 1]
        i++
    }
    let num = res.split('').reverse().join('')
    return car ? car + num : num
}