const maximumTime = function(time) {
    for(i = 0; i < time.length; i++){
        if(time[i] == '?'){
            if(i == 0){
                if(Number(time[i + 1]) > 3){
                    time = '1' + time.slice(i + 1)
                }else{
                    time = '2' + time.slice(i + 1)
                }
            }else if(i == 1){
                if(Number(time[i - 1]) < 2){
                    time = time.slice(0,i) + '9' + time.slice(i + 1)
                }else{
                    time = time.slice(0,i) + '3' + time.slice(i + 1)
                }
            }else if(i == 3){
                time = time.slice(0,i) + '5' + time.slice(i + 1)
            }else{
                time = time.slice(0,i) + '9' + time.slice(i + 1)
            }
        }
    }
    return time
};