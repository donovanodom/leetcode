const distributeCandies = function(candyType) {
    let max = candyType.length / 2
    let og = [...new Set(candyType)]
    return og.length > max ? max : og.length
}