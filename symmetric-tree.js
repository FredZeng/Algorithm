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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root || (!root.left && !root.right)) {
    return true;
  }

  function compareLeftAndRight(left, right) {
    if (!left && !right) {
      return true;
    } else if (!left || !right) {
      return false;
    } else if (left.val !== right.val) {
      return false;
    } else {
      return compareLeftAndRight(left.left, right.right) && compareLeftAndRight(left.right, right.left);
    }
  }

  return compareLeftAndRight(root.left, root.right);
};
