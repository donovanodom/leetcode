const numUniqueEmails = function(emails) {
    let set = new Set()
    for(const email of emails){
        let i = 0, j = email.length - 1
        while(email[i] != '+' && email[i] != '@'){
            i++
        }
        while(email[j] != '@'){
              j--
        }
        let local = email.slice(0,i).replace(/\./g,''), domain = email.slice(j,email.length)
        set.add(local + domain)
    }
    return set.size
}