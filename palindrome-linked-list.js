/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let dummy = new ListNode(0, head);

  // 找到中点
  let slow = dummy,
    fast = dummy;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let mid = fast ? slow.next : slow;

  // reverse tail
  let i = mid,
    j = mid.next;
  while (j != null) {
    let tmp = j.next;
    j.next = i;
    i = j;
    j = tmp;
  }

  let p = head,
    q = i;
  while (p !== mid) {
    if (p.val != q.val) return false;
    p = p.next;
    q = q.next;
  }

  return true;
};
