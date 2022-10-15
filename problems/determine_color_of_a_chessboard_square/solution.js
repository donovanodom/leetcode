const squareIsWhite = function(coordinates) {
    const alp = Array(8).fill().map((_,i) => String.fromCharCode(i + 97)), [x,y] = coordinates
    if(y % 2 == 0){
        return alp.indexOf(x) % 2 == 0
    }else{
        return alp.indexOf(x) % 2 != 0
    }
};