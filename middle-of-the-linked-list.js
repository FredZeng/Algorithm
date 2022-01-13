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
var middleNode = function(head) {
  var empty = new ListNode();
  empty.next = head;

  var slow = empty, fast = empty;
  var total = 0;

  while (fast && fast.next !== null) {
    for (var i = 0; i < 2; i++) {
      fast = fast.next;
      total++;

      if (fast === null) {
        return total % 2 === 1 ? slow : slow.next;
      }
    }

    slow = slow.next;
  }

  return slow.next;
};