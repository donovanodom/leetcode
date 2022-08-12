const findRestaurant = function(list1, list2) {
    let min = Infinity, obj = {}
    for(i = 0; i < list1.length; i++){
        let index = list2.indexOf(list1[i])
        if(index >= 0){
            min = Math.min(min,index + i)
            if(!obj[index + i]) obj[index + i] = []
            obj[index + i].push(list1[i])
        } 
    }
    return obj[min]
}