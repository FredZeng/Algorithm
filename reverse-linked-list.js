/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @description 迭代法
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head || !head.next) {
    return head;
  }

  var prev = null;
  var cur = head;

  while (cur != null) {
    var next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
};
