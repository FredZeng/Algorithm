/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
  if (!root) return [];

  let queue = [root];
  let result = [];

  while (queue.length > 0) {
    let top = queue[0];

    if (!top.visited) {
      for (let i = top.children.length - 1; i >= 0; i--) {
        queue.unshift(top.children[i]);
      }
      top.visited = true;
    } else {
      result.push(top.val);
      queue.shift();
    }
  }

  return result;
};
