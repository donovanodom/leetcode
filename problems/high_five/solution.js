const highFive = function(items) {
    const scores = {}
    for(const [id,score] of items){
        if(!scores[id]) scores[id] = []
        let min = Math.min(...scores[id])
        if(scores[id].length == 5 && min < score){
            scores[id][scores[id].indexOf(min)] = score
        }else if(scores[id].length == 5 && min >= score){
            continue
        }else{
            scores[id].push(score)
        }
    }
    return Object.entries(scores).map((item) => {
        return [item[0], Math.floor(item[1].reduce((a,b) => a + b)/5)]
    })
    
};