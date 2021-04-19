function splitIntoFibonacci2(S) {
    const dfs = function (list, s, length, index, sum, prev) {
        if (index === length)
            return list.length >= 3;
        let curNum = 0;
        for (let i = index; i < length; i++) {
            curNum = curNum * 10 + parseInt(s[i]);
            if (curNum > Math.pow(2, 31) - 1)
                break;
            if (list.length >= 2) {
                if (curNum < sum)
                    continue;
                else if (curNum > sum)
                    break;
            }
            list.push(curNum);
            if (dfs(list, s, length, i + 1, prev + curNum, curNum))
                return true;
            else
                list.pop();
        }
        return false;
    };
    const list = new Array().fill(0);
    dfs(list, S, S.length, 0, 0, 0);
    return list;
}
//# sourceMappingURL=842.%E5%B0%86%E6%95%B0%E7%BB%84%E6%8B%86%E5%88%86%E6%88%90%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E5%BA%8F%E5%88%971.js.map