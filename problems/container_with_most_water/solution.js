const maxArea = (height) => {
    let maxArea = 0;
    let i = 0, j = height.length-1;
    while(i<j) {
        let area = height[i] < height[j] ? height[i] * (j - i) : height[j] * (j - i);
        if (area > maxArea) {
            maxArea = area;
        }
            if (height[i] > height[j]) {
            j--;
        } else {
            i++;
        }
    }
    return maxArea;
}