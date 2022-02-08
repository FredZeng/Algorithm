/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  var dummy = new ListNode();
  dummy.next = head;

  while (head != null && head.next != null) {
    var next = head.next;
    head.next = next.next;

    next.next = dummy.next;
    dummy.next = next;
  }

  return dummy.next;
};
