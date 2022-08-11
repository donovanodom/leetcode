const readBinaryWatch = (num) => {
  let ans = []
  for(i = 0; i < 12; i++) {
    for(j = 0; j < 60; j++) {
      if(findNumber(i) + findNumber(j) == num) {
        ans.push(`${i}:${('' + j).padStart(2,'0')}`)
      }
    }
  }
  return ans
}

const findNumber = (num) => {
  let sub = 0, temp = 0
  for(let i = 5; i >= 0; i--) {
    temp = 1 << i
    if(num >= temp) {
      sub = sub + 1
      num = num - temp
    }
  }
  return sub
}