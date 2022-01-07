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
var diameterOfBinaryTree = function (root) {
  var res = 0;

  function deepSearch(root) {
    if (!root || (!root.left && !root.right)) {
      return 0;
    }

    var left = root.left ? deepSearch(root.left) + 1 : 0;
    var right = root.right ? deepSearch(root.right) + 1 : 0;

    res = Math.max(left + right, res);

    return Math.max(left, right);
  }

  deepSearch(root);

  return res;
};
