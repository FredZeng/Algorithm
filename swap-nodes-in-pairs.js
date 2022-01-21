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
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }

  const dummy = new ListNode();
  dummy.next = head;

  let last = dummy;
  let slow = head;

  while (slow && slow.next) {
    const next = slow.next;

    last.next = next;
    slow.next = next.next;
    next.next = slow;

    last = slow;
    slow = slow.next;
  }

  return dummy.next;
};

// var swapPairs = function (head) {
//   if (!head || !head.next) {
//     return head;
//   }

//   let next = head.next;
//   head.next = swapPairs(next.next);
//   next.next = head;

//   return next;
// };
