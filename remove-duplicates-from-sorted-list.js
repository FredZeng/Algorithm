/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  var cur = head;
  var next = null;

  while (cur != null && (next = cur.next)) {
    if (cur.val == next.val) {
      cur.next = next.next;
    } else {
      cur = cur.next;
    }
  }

  return head;
};
