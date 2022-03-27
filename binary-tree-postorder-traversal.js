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
var postorderTraversal = function (root) {
  var res = [];

  traversal(root, res);

  return res;
};

const traversal = function (root, arr) {
  if (!root) {
    return;
  }

  traversal(root.left, arr);
  traversal(root.right, arr);
  arr.push(root.val);
};

// var postorderTraversal = function (root) {
//   if (!root) return [];

//   var res = [];
//   var stack = [root];

//   while (stack.length > 0) {
//     var top = stack[stack.length - 1];

//     if (top.visited) {
//       var node = stack.pop();
//       res.push(node.val);
//       continue;
//     }

//     top.right && stack.push(top.right);
//     top.left && stack.push(top.left);
//     top.visited = true;
//   }

//   return res;
// };
