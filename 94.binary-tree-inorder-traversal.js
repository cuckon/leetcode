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
var inorderTraversal = function(root) {
    let r = [];
    let stack = []
    let current = root
    while(stack.length || current) {
        if (current) {
            stack.push(current)
            current = current.left
        } else {
            current = stack.pop()
            r.push(current.val)
            current = current.right
        }
    }
    return r
};
// @lc code=end

