const dayOfYear = function(date) {
    let year = date.slice(0,4), month = date.slice(5,7), day = date.slice(8), total = 0
    for(i = 1; i < Number(month); i++){
        total += numberOfDays(year, i)
    }
    total += Number(day)
    return total
}

const numberOfDays = function(year, month) {
    let obj = {1:31,2:28,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31}
    if(month != 2){
        return obj[month]
    }else if(year % 400 == 0 && String(year).slice(2) == '00'|| year % 4 == 0 && String(year).slice(2) != '00'){
        return obj[month] + 1
    }else{
        return obj[month]
    }
}