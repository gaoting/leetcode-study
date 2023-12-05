/*
 * @lc app=leetcode.cn id=4 lang=javascript
 * @lcpr version=30111
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const arr = [...nums1, ...nums2];
  arr.sort((a, b) => a - b);
  return arr.length % 2 === 1
    ? arr[(arr.length - 1) / 2].toFixed(5)
    : ((arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2).toFixed(5);
};
// @lc code=end

/*
// @lcpr case=start
// [1,3]\n[2]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n[3,4]\n
// @lcpr case=end

 */
