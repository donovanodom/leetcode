const maximumUnits = function(boxTypes, truckSize) {
    let adj = [], max = 0
    for(const [boxes,units] of boxTypes){
        if(!adj[units]) adj[units] = 0
        adj[units] += boxes
    }
    for(i = adj.length - 1; i >= 0; i--){
        if(!adj[i]) continue
        let boxes = adj[i]
        if(truckSize >= boxes){
            max += boxes * i
            truckSize -= boxes
        }else{
            max += truckSize * i
            return max
        }
    }
    return max
}