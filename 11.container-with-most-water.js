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
    let res = 0, maxi = 0, maxj
    for(let i = 0; i < height.length - 1; i++) {
        if (height[i] <= maxi) continue
        maxi = height[i]
        maxj = 0
        for(let j = height.length - 1; j > i; j--) {
            if (height[j] <= maxj) continue
            maxj = height[j]
            res = Math.max(res, (j - i) * Math.min(height[i], height[j]))
        }
    }
    return res
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