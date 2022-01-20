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
var reverseKGroup = function (head, k) {
  if (!head) {
    return head;
  }

  let i = 0;
  let last = head;

  // find last node
  while (last != null && i < k) {
    last = last.next;
    i++;
  }

  if (i < k) {
    return head;
  }

  let slow = head;
  let fast = head.next;
  i = 0;
  while (i < k - 1) {
    const next = fast.next;
    fast.next = slow;
    slow = fast;
    fast = next;
    i++;
  }

  head.next = reverseKGroup(last, k);

  return slow;
};
