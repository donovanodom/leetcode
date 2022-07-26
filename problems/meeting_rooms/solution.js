const canAttendMeetings = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0])
    for(i=0;i<intervals.length;i++){
        if(intervals[i+1] && intervals[i+1][0] < intervals[i][1]) return false
    }
    return true
}