/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
 */

// @lc code=start
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
 function inorderTraversal(root) {
    const stack = [], ret = [];
    root && stack.push(root);
    while (stack.length) {
      const item = stack.pop();
      if (item.left) {
        stack.push(item);
        stack.push(item.left);
        item.left = null;
      }
      else {
        ret.push(item.val);
        item.right && stack.push(item.right);
      }
    }
    return ret;
  }
// @lc code=end

