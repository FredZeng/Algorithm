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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) {
    return [];
  }

  let queue = [root];
  let res = [];
  let level = 0;

  while (queue.length > 0) {
    const arr = [];
    const nextQueue = [];

    for (let i = 0, len = queue.length; i < len; i++) {
      let node = queue[i];

      arr.push(node.val);

      node.left && nextQueue.push(node.left);
      node.right && nextQueue.push(node.right);
    }

    queue = nextQueue;
    res.push(level % 2 == 1 ? arr.reverse() : arr);
    level++;
  }

  return res;
};
