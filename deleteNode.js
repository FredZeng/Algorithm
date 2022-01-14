/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  const empty = new ListNode();
  empty.next = head;

  let next = empty;

  while (next.next !== null) {
    if (next.next.val === val) {
      var after = next.next.next;
      next.next = after;

      return empty.next;
    }

    next = next.next;
  }

  return empty.next;

  // var p = head;

  // while (p !== null) {
  //   if (p.val === val) {
  //     return head.next;
  //   }
  //   if (p.next.val === val) {
  //     p.next = p.next.next;
  //     break;
  //   }
  //   p = p.next;
  // }

  // return head;
};
