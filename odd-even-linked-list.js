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
var oddEvenList = function (head) {
  if (!head || !head.next) return head;

  let pre = head;
  let odd = pre.next;

  while (odd && odd.next) {
    let next = odd.next;

    odd.next = next.next;
    odd = odd.next;
    next.next = pre.next;

    pre.next = next;
    pre = next;
  }

  return head;
};
