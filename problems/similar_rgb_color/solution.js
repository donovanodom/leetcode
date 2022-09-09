const similarRGB = function(color) {
    let similar = ''
    const rgb = ['00', '11', '22', '33', '44', '55', '66', '77', '88', '99', 'aa', 'bb', 'cc', 'dd', 'ee', 'ff']
    for(i = 1; i < color.length; i += 2){
        let arr = rgb.map((x) => Math.abs(parseInt(color.slice(i,i+2),16) - parseInt(x,16))), min = Math.min(...arr)
        for(j = 0; j < arr.length; j++){
            if(arr[j] == min) similar += rgb[j]
        }
    }
    return '#' + similar
}