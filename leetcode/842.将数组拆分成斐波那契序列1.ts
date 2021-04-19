function splitIntoFibonacci2 (S: string): number[] {
  const dfs: (list: number[], s: string, length: number, index: number, sum: number, prev: number) => boolean = function (list: number[], s: string, length: number, index: number, sum: number, prev: number) {
    if (index === length) return list.length >= 3
    let curNum: number = 0
    for (let i = index; i < length; i++) {
      curNum = curNum * 10 + parseInt(s[i])
      if (curNum > Math.pow(2, 31) - 1) break
      if (list.length >= 2) {
        if (curNum < sum) continue
        else if (curNum > sum) break
      }
      list.push(curNum)
      if (dfs(list, s, length, i+1, prev+curNum, curNum)) return true
      else list.pop()
    }
    return false
  }
  const list: number[] = new Array().fill(0)
  dfs(list, S, S.length, 0, 0, 0)
  return list
}