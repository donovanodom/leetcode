const reformatDate = function(date) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let year = date.slice(date.length - 4), month = date.slice(date.length - 8, date.length - 5), i = 0
    while(/\d/.test(date[i])) i++
    let day = date.slice(0,i)
    return year + '-' + String((months.indexOf(month) + 1)).padStart(2,'0') + '-' + day.padStart(2,'0')
}