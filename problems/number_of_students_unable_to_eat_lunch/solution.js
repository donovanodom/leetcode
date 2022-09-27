const countStudents = function(students, sandwiches) {
    while(students.includes(sandwiches[0])){
        let cur = students.shift()
        if(sandwiches[0] == cur){
            sandwiches.shift()
        }else{
            students.push(cur)
        }
    }
    return students.length
}