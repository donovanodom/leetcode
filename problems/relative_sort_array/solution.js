const relativeSortArray = function(arr1, arr2) {
    let head = []
    for(const num of arr2){ 
        while(arr1.indexOf(num) >= 0){
            head.push(...arr1.splice(arr1.indexOf(num),1))
        }
    }
    return head.concat(arr1.sort((a,b) => a-b))
}