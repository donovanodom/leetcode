// Kahn's algo
const canFinish = function(numCourses, prerequisites) {
    const inDeg = new Array(numCourses).fill(0)
    for(const pre of prerequisites){
        inDeg[pre[0]]++
    }
    let zeroDeg = []
    for(i = 0; i < numCourses; i++){
        if(inDeg[i] == 0){
            zeroDeg.push(i)
        }
    }
    if(!zeroDeg.length) return false
    while(zeroDeg.length){
        let course = zeroDeg.pop()
        for(const pre of prerequisites){
            if(course == pre[1]){
                inDeg[pre[0]]--
                if(inDeg[pre[0]] == 0){
                    zeroDeg.push(pre[0])
                }
            }
        }
    }
    for(const num of inDeg){
        if(num != 0) return false
    }
    return true
}