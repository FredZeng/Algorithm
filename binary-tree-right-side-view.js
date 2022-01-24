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
var rightSideView = function (root) {
  if (!root) return [];

  var queue = [root];
  var result = [];

  while (queue.length > 0) {
    let len = queue.length;
    let nextQueue = [];
    result.push(queue[len - 1].val);

    for (let i = 0; i < len; i++) {
      const node = queue[i];

      node.left && nextQueue.push(node.left);
      node.right && nextQueue.push(node.right);
    }

    queue = nextQueue;
  }

  return result;
};
