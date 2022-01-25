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
  if (!head || !head.next) {
    return head;
  }

  var dummy = new ListNode();
  dummy.next = head;
  var p = dummy;

  while (p.next && p.next.next) {
    if (p.next.val === p.next.next.val) {
      var val = p.next.val;

      while (p.next && p.next.val === val) {
        p.next = p.next.next;
      }
    } else {
      p = p.next;
    }
  }

  return dummy.next;
};

// var deleteDuplicates = function (head) {
//   if (!head || !head.next) {
//     return head;
//   }

//   var dummy = new ListNode();
//   var p = dummy;

//   let slow = head;
//   let fast = head.next;
//   let total = 1;

//   while (fast != null) {
//     if (slow.val !== fast.val) {
//       if (total == 1) {
//         p.next = slow;
//         p = p.next;
//         p.next = null;
//       }
//       total = 1;
//     } else {
//       total++;
//     }
//     slow = fast;
//     fast = fast.next;
//   }

//   if (total == 1) {
//     p.next = slow;
//   }

//   return dummy.next;
// };
