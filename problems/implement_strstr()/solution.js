const strStr = (haystack, needle) => {
    if(!haystack.includes(needle)) return -1
    return haystack.search(needle)
}