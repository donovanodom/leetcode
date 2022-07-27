const daysBetweenDates = function(date1, date2) {
    const first = new Date(date1), second = new Date(date2)
    return Math.abs((first.getTime()/(1000*60*60*24)) - (second.getTime()/(1000*60*60*24)))
}