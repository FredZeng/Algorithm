/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  var fast = head, slow = head;

  while (k > 0) {
    fast = fast.next;
    k--;
  }

  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow;
};
