/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
  if (k == 1) return [head];

  let len = 0;
  let p = head;

  // 获取长度
  while (p != null) {
    len++;
    p = p.next;
  }

  // 最少取 min 个
  let min = Math.floor(len / k);
  // 有 n 组取 min + 1 个
  let n = len % k;
  let result = [];

  let q = head;
  let tmp = 1;
  result.push(q);

  for (let i = 1; i < k; ) {
    if (q == null) {
      result.push(null);
      i++;
    }
    while (q != null) {
      let num = i <= n ? min + 1 : min;
      let next = q.next;

      if (tmp < num) {
        tmp++;
      } else {
        q.next = null;
        tmp = 1;
        next && (result.push(next), i++);
      }

      q = next;
    }
  }

  return result;
};
