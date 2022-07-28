const findTheWinner = function(n, k) {
    let group = Array(n).fill().map((_,i) => i + 1), index = k - 1
    while(group.length > 1){
        if(index > group.length - 1) index = index % group.length   
        group.splice(index,1)
        index += k - 1
    } 
    return group[0]
}