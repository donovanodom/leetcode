const insert = function(intervals, newInterval) {
    let [a,b] = newInterval
    for(i = 0; i < intervals.length; i++){
        let [x,y] = intervals[i]
        if(b < x){
            return [...intervals.slice(0,i), newInterval, ...intervals.slice(i)]
        }else if(a <= x && b <= y){
            return [...intervals.slice(0,i), [a, y], ...intervals.slice(i + 1)]
        }else if(a <= x && b >= y){
            let j = i + 1
            while(j < intervals.length && b >= intervals[j][0]) j++
            return [...intervals.slice(0,i), [a, Math.max(intervals[j - 1][1], b)], ...intervals.slice(j)]
        }else if(a >= x && a <= y){
            let j = i + 1
            while(j < intervals.length && b >= intervals[j][0]) j++
            return [...intervals.slice(0,i), [x, Math.max(intervals[j - 1][1], b)], ...intervals.slice(j)]
        }
    }
    return [...intervals, newInterval]
}