const nearestValidPoint = function(x1, y1, points) {
    let obj = {}, min = Infinity
    for(i = 0; i < points.length; i++){
        let [x2, y2] = points[i]
        if(x1 == x2 || y1 == y2){
            let man = Math.abs(x1 - x2) + Math.abs(y1 - y2)
            if(!obj[man]) obj[man] = []
            obj[man].push(i)
            min = Math.min(min,man)
        }  
    }
    return obj[min] ? obj[min][0] : -1
}