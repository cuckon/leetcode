/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = Number.NEGATIVE_INFINITY;
    let current_sum = 0;

    for (let i of nums) {
        if ((current_sum += i) < 0) {
            current_sum = 0;
        } else if (current_sum > max) {
            max = current_sum;
        }
        if (i > max) {
            max = i;
        }
    }
    return max;
};
// @lc code=end

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray([-2,-3,-1]))
console.log(maxSubArray([5,4,-1,7,8]))
