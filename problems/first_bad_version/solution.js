const solution = (isBadVersion) => {
    return (n) => { 
        let current = 1, follow = n
        if(!isBadVersion(n-1)) return n
        while(current <= follow){
            let pointer = Math.floor((current + follow) /2)
            if(isBadVersion(pointer)){
                if(current == follow) return pointer
                follow = pointer
            }else{
                current = pointer + 1
            }     
        }
    }
}

