const average = (salary) => {
    salary.sort(function(a,b){return a - b})
    salary = salary.slice(1,salary.length -1)
    let sum = salary.reduce((a,b) => a + b)
    return sum / salary.length
}