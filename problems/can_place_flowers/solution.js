const canPlaceFlowers = (flowerbed, n) => {
    for(i = 0; i < flowerbed.length; i++) {
        if((i == 0 || flowerbed[i-1] == 0) && flowerbed[i] == 0 && (i == flowerbed.length - 1 || flowerbed[i+1] == 0)) {
            flowerbed[i] = 1
            n--
        }
    }
    return n < 1
}