const computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    let r1 = (ax1 - ax2) * (ay1 - ay2), r2 = (bx1 - bx2) * (by1 - by2)
    if((ax1 < bx2 && bx1 < ax2) && (ay1 < by2 && by1 < ay2)){
        return r1 + r2 - (Math.max(ax1, bx1) - Math.min(ax2, bx2)) * (Math.max(ay1,by1) - Math.min(ay2, by2))
    }
    return r1 + r2
}
