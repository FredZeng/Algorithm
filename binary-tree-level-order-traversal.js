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
var levelOrder = function (root) {
  if (!root) {
    return [];
  }

  let queue = [root];
  const res = [];

  while (queue.length > 0) {
    const nextQueue = [];
    const arr = [];

    for (let i = 0, len = queue.length; i < len; i++) {
      let node = queue[i];
      arr.push(node.val);

      node.left && nextQueue.push(node.left);
      node.right && nextQueue.push(node.right);
    }

    res.push(arr);
    queue = nextQueue;
  }

  return res;
};
