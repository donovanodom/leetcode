const racecar = (target) => {
    let q = [[0,1,0]], visited = new Set([`0:1`])
    while(q.length){
        let [pos, spd, cnt] = q.shift()
        if(pos == target) return cnt
        let pos2 = pos + spd, spd2 = spd * 2
        let pos3 = pos, spd3 = spd > 0 ? -1 : 1
        if(!visited.has(`${pos2}:${spd2}`) && pos2 >= 0 && pos2 < target * 2){
            visited.add(`${pos2}:${spd2}`)
            q.push([pos2,spd2,cnt+1])
        }
        if(!visited.has(`${pos3}:${spd3}`) && pos3 >= 0 && pos3 < target * 2){
            visited.add(`${pos3}:${spd3}`)
            q.push([pos3,spd3,cnt+1])
        }
    }
}