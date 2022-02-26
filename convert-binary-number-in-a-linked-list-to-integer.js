/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  let sum = 0;

  let p = head;

  while (p != null) {
    sum *= 2;
    sum += p.val;

    p = p.next;
  }

  return sum;
};
