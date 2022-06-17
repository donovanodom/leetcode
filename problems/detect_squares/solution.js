var DetectSquares = function() {
    this.points = {}
}

DetectSquares.prototype.add = function(point) {
    const [x,y] = point 
    if(!this.points[x]) this.points[x] = {}
    if(!this.points[x][y]) this.points[x][y] = 0
    this.points[x][y]++
}

DetectSquares.prototype.count = function(point) {
    const [x1,y1] = point
    let count = 0
    if(this.points[x1]){
        Object.keys(this.points[x1]).map((y2) => {
            const seg = Math.abs(y1 - y2)
            if(seg){
                let x2 = x1 - seg, x3 = x1 + seg
                if(this.points[x2] && this.points[x2][y1] && this.points[x2][y2]){
                    count+= this.points[x2][y1] * this.points[x2][y2] * this.points[x1][y2]
                }
                if(this.points[x3] && this.points[x3][y1] && this.points[x3][y2]){
                    count+= this.points[x3][y1] * this.points[x3][y2] * this.points[x1][y2]
                }
            }
        })
    }
    return count
}

