/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
  if (!root) return [];

  let queue = [root];
  let res = [];

  while (queue.length > 0) {
    let nextQueue = [];
    let max;

    for (let i = 0, len = queue.length; i < len; i++) {
      if (i === 0) {
        max = queue[i].val;
      } else {
        max = Math.max(max, queue[i].val);
      }

      queue[i].left && nextQueue.push(queue[i].left);
      queue[i].right && nextQueue.push(queue[i].right);
    }

    res.push(max);
    queue = nextQueue;
  }

  return res;
};
