/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0, r = height.length - 1, max = 0
    while (l < r) {
        max = Math.max(max, Math.min(height[l], height[r]) * (r - l))
        if (height[r] > height[l])
            l ++
        else
            r --
    }
    return max
};
// @lc code=end


function test(input, answer) {
    result = maxArea(input)
    isCorrect = result == answer ? '✅' : '❌ (' + answer + ')'
    console.log(`"${input}" = ${result} : ${isCorrect}`)
}

test([1,8,6,2,5,4,8,3,7], 49)
test([1,1], 1)
test([4,3,2,1,4], 16)
test([1,2,1], 2)
test([0,1,2,1], 2)
test([0,1,0], 0)
test([0,0], 0)