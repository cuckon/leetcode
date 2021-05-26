/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let steps = [1, 2];
    for (let i = 2; i < n + 1; i++) {
        steps[i % 2] = steps[0] + steps[1];
    }
    return steps[(n + 1) % 2]
};
// @lc code=end

function test(input, answer) {
    result = climbStairs(input)
    isCorrect = result == answer ? '✅' : '❌ (' + answer + ')'
    console.log(`"${input}" = ${result} : ${isCorrect}`)
}

test(2, 2)
test(3, 3)
test(1, 1)
test(4, 5)
