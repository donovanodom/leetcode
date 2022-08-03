const canFinish = function(numCourses, prerequisites) {
    const inDeg = Array(numCourses).fill(0)
    for(const pre of prerequisites){
        inDeg[pre[0]]++
    }
    const zerDeg = []
    for(i = 0; i < numCourses; i++){
        if(inDeg[i] == 0){
            zerDeg.push(i)
        }
    }
    while(zerDeg.length){
        let course = zerDeg.pop()
        for(const pre of prerequisites){
            if(course == pre[1]){
                inDeg[pre[0]]--
                if(inDeg[pre[0]] == 0){
                    zerDeg.push(pre[0])
                }
            }
        }
    }
    for(const num of inDeg){
        if(num != 0) return false
    }
    return true
}