const addBinary = (a, b) => {  
    let len = Math.max(a.length, b.length), car = false, ans = ''
    a = a.padStart(len, '0')
    b = b.padStart(len, '0')
    for(i = len; i >= 0; i--){
        if(a[i] == '0' && b[i] == '0'){
            if(car){
                ans = '1' + ans
                car = false
            }else{
                ans = '0' + ans
            }
        }else if(a[i] == '1' && b[i] == '0' || a[i] == '0' && b[i] == '1'){
            if(car){
                ans = '0' + ans
            }else{
                ans = '1' + ans
            }
        }else if(a[i] == '1' && b[i] == '1'){
            if(car){
                ans = '1' + ans     
            }else{
                ans = '0' + ans
                car = true
            }
        }
    }
    return car ? '1' + ans : ans
}