const dayOfTheWeek = function(day, month, year) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let key = new Date(month + ' ' + day + ' ' + year)
    return days[key.getDay()]
}