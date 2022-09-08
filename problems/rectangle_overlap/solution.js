const isRectangleOverlap = function(rec1, rec2) {
    let x1 = rec1[0], y1 = rec1[1], x2 = rec1[2], y2 = rec1[3]
	let x3 = rec2[0], y3 = rec2[1], x4 = rec2[2], y4 = rec2[3]
	if (x3 >= x2 || x4 <= x1) return false
	if (y3 >= y2 || y4 <= y1) return false
    return true
}