const backspaceCompare = (s, t) => {
    const displayed = (string) => {
        let dis = ''
        for(i = 0; i < string.length; i++){
            dis += string[i]
            if(string[i] == '#') dis = dis.slice(0,-2)
        }
        return dis   
    }
    return displayed(s) == displayed(t)
}