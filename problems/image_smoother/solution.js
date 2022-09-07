const imageSmoother = function(img) {
    let res = Array(img.length).fill().map((x) => x = Array(img[0].length).fill(0))
    const neighbors = [[1,0],[1,1],[0,1],[-1,0],[-1,1],[0,-1],[-1,-1],[1,-1]]
    for(y = 0; y < img.length; y++){
        for(x = 0; x < img[y].length; x++){
            let count = 9, sum = img[y][x]
            for(const [neighborx,neighbory] of neighbors){
                let nextx = neighborx + x, nexty = neighbory + y
                if(nextx < 0 || nexty < 0 || nextx >= img[y].length || nexty >= img.length){
                    count--
                }else{
                    sum += img[nexty][nextx]
                }
            }
            res[y][x] = Math.floor(sum / count)
        }
    }
    return res
}