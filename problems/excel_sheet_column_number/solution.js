const titleToNumber = function(columnTitle) {
    const alpha = Array(26).fill(0).map(( _,i) => String.fromCharCode(65 + i))
    let col = 0
    for(i = 0; i < columnTitle.length; i++){
        col = col * 26 + alpha.indexOf(columnTitle[i]) + 1
    }
    return col
}