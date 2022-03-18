/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
  if (!head || !head.next) return head;

  let dummy = new ListNode();
  dummy.next = head;

  let last = head;
  let cur = head.next;

  while (cur != null) {
    if (last.val <= cur.val) {
      last = last.next;
      cur = cur.next;
    } else {
      let next = cur.next;
      last.next = next;

      let tmp = dummy;
      while (tmp.next.val < cur.val) {
        tmp = tmp.next;
      }

      cur.next = tmp.next;
      tmp.next = cur;
      cur = next;
    }
  }

  return dummy.next;
};
