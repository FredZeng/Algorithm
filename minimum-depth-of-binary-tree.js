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
var minDepth = function (root) {
  if (!root) return 0;

  let queue = [root];
  let total = 0;

  while (queue.length > 0) {
    let nextQueue = [];

    for (let i = 0, len = queue.length; i < len; i++) {
      let node = queue[i];

      if (!node.left && !node.right) {
        return total + 1;
      }
      node.left && nextQueue.push(node.left);
      node.right && nextQueue.push(node.right);
    }

    queue = nextQueue;
    total++;
  }

  return total;
};

var minDepth = function (root) {
  if (!root) {
    return 0;
  }
  if (!root.left && !root.right) {
    return 1;
  }

  var stack = [root];
  var depth = 0;

  while (stack.length > 0) {
    depth++;
    for (var i = 0, len = stack.length; i < len; i++) {
      var node = stack.shift();

      if (!node.left && !node.right) {
        return depth;
      }

      node.left && stack.push(node.left);
      node.right && stack.push(node.right);
    }
  }

  return depth;
};

var minDepth = function (root) {
  if (!root) {
    return 0;
  }

  if (root.left && root.right) {
    return 1 + Math.min(minDepth(root.left), minDepth(root.right));
  }

  if (root.left) {
    return 1 + minDepth(root.left);
  }

  if (root.right) {
    return 1 + minDepth(root.right);
  }

  return 1;
};
