/*
 * @lc app=leetcode.cn id=23 lang=javascript
 * @lcpr version=30111
 *
 * [23] 合并 K 个升序链表
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  function transform(l, arr) {
    while (l) {
      arr.push(l.val);
      l = l.next;
    }
  }

  let arr = [];
  let res = new ListNode(null);

  lists.map((item) => transform(item, arr));
  arr.sort((a, b) => a - b);
  for (let i = arr.length - 1; i >= 0; i--) {
    let temp = new ListNode(null);
    res.val = arr[i];
    temp.next = res;
    res = temp;
  }
  return res.next;
};
console.log(
  mergeKLists([
    [1, 4, 5],
    [1, 3, 4],
    [2, 6],
  ])
);

// @lc code=end

/*
// @lcpr case=start
// [[1,4,5],[1,3,4],[2,6]]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [[]]\n
// @lcpr case=end

 */

// @lcpr-after-debug-begin
module.exports = mergeKLists;
// @lcpr-after-debug-end
