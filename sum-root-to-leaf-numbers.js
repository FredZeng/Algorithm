/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  if (!root) return 0;
  if (!root.left && !root.right) return root.val;

  let result = 0;

  let deepSearch = function (root, val) {
    if (!root) {
      result += val;
      return;
    }
    let cur = val * 10 + root.val;
    if (!root.left && !root.right) {
      result += cur;
      return;
    }

    if (root.left) {
      deepSearch(root.left, cur);
    }
    if (root.right) {
      deepSearch(root.right, cur);
    }
  };

  deepSearch(root, 0);

  return result;
};
