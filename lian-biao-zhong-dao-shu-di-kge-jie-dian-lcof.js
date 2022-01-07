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
  var i = 0;

  while (i < k && fast) {
    fast = fast.next;
    i++;
  }

  if (i !== k) {
    return null;
  }

  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow;
};
