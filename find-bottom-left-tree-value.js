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
 * @return {number}
 */
var findBottomLeftValue = function (root) {
  let queue = [root];

  while (queue.length > 0) {
    let nextQueue = [];

    for (let i = 0, len = queue.length; i < len; i++) {
      queue[i].left && nextQueue.push(queue[i].left);
      queue[i].right && nextQueue.push(queue[i].right);
    }

    if (nextQueue.length > 0) {
      queue = nextQueue;
    } else {
      return queue[0].val;
    }
  }

  return queue[0].val;
};
