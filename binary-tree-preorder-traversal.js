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
var preorderTraversal = function (root) {
  if (!root) {
    return [];
  }

  var res = [];
  var stack = [root];
  var top = null;

  while (top = stack.pop()) {
    res.push(top.val);
    top.right && stack.push(top.right);
    top.left && stack.push(top.left);
  }

  return res;
}

// var preorderTraversal = function (root) {
//   if (!root) {
//     return [];
//   } else if (!root.left && !root.right) {
//     return [root.val];
//   }

//   return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)];
// };
