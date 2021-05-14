/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let results = []

    let test = function(expr, left, right) {
        if (expr.length == n * 2) {
            results.push(expr)
            return
        }

        if (left)
            test(expr + '(', left - 1, right)
        if (right && left < right)
            test(expr + ')', left, right - 1)
    }

    test('', n, n)
    return results
};
// @lc code=end

console.log(generateParenthesis(1))
console.log(generateParenthesis(2))
console.log(generateParenthesis(3))
console.log(generateParenthesis(4))
