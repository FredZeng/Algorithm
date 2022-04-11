/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return [];
  }

  let res = [];
  let queue = [root];

  while (queue.length > 0) {
    let nextQueue = [];
    let level = [];

    for (let i = 0; i < queue.length; i++) {
      level.push(queue[i].val);

      nextQueue.push(...queue[i].children);
    }

    res.push(level);
    queue = nextQueue;
  }

  return res;
};
