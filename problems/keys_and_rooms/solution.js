const canVisitAllRooms = (rooms) => {
    const dfs = (room, visited = new Set()) => {
        visited.add(room)     
        rooms[room].forEach((_,i) => {
             if(!visited.has(rooms[room][i])){
                dfs(rooms[room][i], visited)
            }
        })
        return visited.size == rooms.length
    }
    return dfs(0)

}