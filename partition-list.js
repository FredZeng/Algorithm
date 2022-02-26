/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let dummy = new ListNode(0, head);
  let p = dummy;

  // 找到拼接点
  while (p.next != null && p.next.val < x) {
    p = p.next;
  }

  if (p.next == null || p.next.next == null) {
    return head;
  }

  for (let move = p.next; move != null && move.next != null; ) {
    let next = move.next;

    if (next.val < x) {
      let after = next.next;
      move.next = after;

      next.next = p.next;
      p.next = next;
      p = next;
    } else {
      move = move.next;
    }
  }

  return dummy.next;
};
