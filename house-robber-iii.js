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
var rob = function (root) {
  let dp = new Map();

  let traverse = function (root) {
    if (!root) return 0;
    if (dp.has(root)) {
      return dp.get(root);
    }

    let maxNext = traverse(root.left) + traverse(root.right);
    let maxRoot = root.val;

    if (root.left) {
      maxRoot += traverse(root.left.left) + traverse(root.left.right);
    }
    if (root.right) {
      maxRoot += traverse(root.right.left) + traverse(root.right.right);
    }

    let res = Math.max(maxNext, maxRoot);

    dp.set(root, res);

    return res;
  };

  traverse(root);

  return dp.get(root) || root.val;
};
