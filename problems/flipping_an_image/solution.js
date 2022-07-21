const flipAndInvertImage = function(image) {
    for(const row of image){
        row.reverse()
        for(j = 0; j < row.length; j++){
            row[j] ? row[j] = 0 : row[j] = 1
        }
    }
    return image
}