
const countGoodRectangles = function(rectangles) {
    let obj = {}
    for(const r of rectangles){
        let k = Math.min(...r)
        if(!obj[k]) obj[k] = 0
        obj[k]++
    }
    return obj[Math.max(...Object.keys(obj))]
}