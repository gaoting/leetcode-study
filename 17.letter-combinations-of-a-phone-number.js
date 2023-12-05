/*
 * @lc app=leetcode.cn id=17 lang=typescript
 * @lcpr version=30111
 *
 * [17] 电话号码的字母组合
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function letterCombinations(digits) {
  const maps = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
  };

  const result = [];
  const backtrack = (path, start) => {
    if (start === digits.length) {
      result.push(path);
      return;
    }
    const letters = maps[digits[start]];
    for (const letter of letters) {
      backtrack(path + letter, start + 1);
    }
  };
  backtrack("", 0);
  return result;
}

console.log(letterCombinations("23"))
// @lc code=end

/*
// @lcpr case=start
// "23"\n
// @lcpr case=end

// @lcpr case=start
// ""\n
// @lcpr case=end

// @lcpr case=start
// "2"\n
// @lcpr case=end

 */
