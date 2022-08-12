const isLongPressedName = function(name, typed) {
    let i = 0, j = 0
    while(i < name.length){
        if(name[i] != typed[j]) return false
        let c1 = 1, c2 = 1
        while(name[i] == name[i+1]){
            c1++
            i++
        }
        while(typed[j] == typed[j+1]){
            c2++
            j++
        }
        if(c2 < c1) return false
        i++
        j++
    }
    return j == typed.length
}