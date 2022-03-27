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
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next || k == 0) {
    return head;
  }

  let len = 1;
  let p = head;
  while (p.next != null) {
    len++;
    p = p.next;
  }

  k = k % len;
  if (k == 0) {
    return head;
  }

  p.next = head;

  for (let i = 1, index = len - (k % len); i < index; i++) {
    head = head.next;
  }

  var next = head.next;
  head.next = null;

  return next;
};
