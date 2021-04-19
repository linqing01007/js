// 统计所有小于非负整数 n 的质数的数量。

//  

// 示例 1：

// 输入：n = 10
// 输出：4
// 解释：小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
// 示例 2：

// 输入：n = 0
// 输出：0
// 示例 3：

// 输入：n = 1
// 输出：0

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/count-primes
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

const countPrimes = function (n) {
  // 枚举
  const isPrime = function (num) {
    // const _num = Math.pow(num, 0.5) 不用除法，因为乘法更快
    for (let i = 2; i * i <= n; i++) {
      if (num % i === 0) return false
    }
    return true
  }
  let res = 0
  for (let i = 2; i < n; i++) {
    res += isPrime(i) ? 1 : 0
  }
  return res
}

const countPrimes1 = function (n) {
  // 埃氏筛
//   考虑这样一个事实：如果 xx 是质数，那么大于 xx 的 xx 的倍数 2x,3x,… 一定不是质数，因此我们可以从这里入手。

// 我们设 isPrime[i] 表示数 ii 是不是质数，如果是质数则为 11，否则为 00。从小到大遍历每个数，如果这个数为质数，则将其所有的倍数都标记为合数（除了该质数本身），即 0，这样在运行结束的时候我们即能知道质数的个数。

// 这种方法的正确性是比较显然的：这种方法显然不会将质数标记成合数；另一方面，当从小到大遍历到数 x 时，倘若它是合数，则它一定是某个小于 x 的质数 y 的整数倍，故根据此方法的步骤，我们在遍历到 y 时，就一定会在此时将 xx 标记为 isPrime[x]=0。因此，这种方法也不会将合数标记为质数。

// 当然这里还可以继续优化，对于一个质数 x，如果按上文说的我们从 2x 开始标记其实是冗余的，应该直接从 x⋅x 开始标记，因为 2x,3x,… 这些数一定在 xx 之前就被其他数的倍数标记过了，例如 2 的所有倍数，3 的所有倍数等

// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/count-primes/solution/ji-shu-zhi-shu-by-leetcode-solution/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
  const isPrime = Array(n).fill(1)
  let ans = 0
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      ans += 1
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = 0
      }
    }
  }
  return ans
}
console.log(countPrimes1(10))