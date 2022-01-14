/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }

  let level = 0;
  const queue = [root];

  while (queue.length > 0) {
    level++;
    for (let i = 0, len = queue.length; i < len; i++) {
      const top = queue.shift();

      top.children.forEach((it) => queue.push(it));
    }
  }

  return level;
};
