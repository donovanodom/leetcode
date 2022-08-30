const constructRectangle = function(area) {
    for(i = Math.floor(Math.sqrt(area)); i >= 0; i--){
        if(area % i == 0) return [area/i,i]
    }
}