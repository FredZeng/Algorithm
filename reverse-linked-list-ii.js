/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (!head || !head.next) {
    return head;
  }

  let dummy = new ListNode();
  dummy.next = head;
  let p = dummy;
  let pre = dummy;
  let index = 0;
  const leftPreIndex = left - 1;

  while (index < right) {
    if (index == leftPreIndex) {
      pre = p;
      p = p.next;
    } else if (index > leftPreIndex) {
      let node = p;
      let next = node.next;
      node.next = next.next;
      next.next = pre.next;
      pre.next = next;
    } else {
      p = p.next;
    }
    index++;
  }

  return dummy.next;
};
