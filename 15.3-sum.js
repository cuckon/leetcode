/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) {
        return []
    }

    cmp = (x, y) => x - y

    nums = nums.sort(cmp)
    let left, right;
    let res = []

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] == nums[i - 1] || nums[i] > 0)
            continue
        left = i + 1
        right = nums.length - 1
        if (nums[left] > -nums[i] || nums[right]*2 < -nums[i])
            continue

        while (left < right) {
            if (nums[left] == nums[left - 1]) {
                left ++
                continue
            }
            if (nums[right] == nums[right + 1]) {
                right --
                continue
            }

            sum = nums[left] + nums[right]
            if (sum > -nums[i]) {
                right--
            } else if (sum < -nums[i]) {
                left++
            } else{
                res.push([nums[i], nums[left], nums[right]])
                left++
            }
        }

    }
    return res
};
// @lc code=end

console.log(threeSum([-1,0,1,2,-1,-4])) //[[-1,-1,2],[-1,0,1]]
console.log(threeSum([]))
console.log(threeSum([-1,-1, -1, -1,0,1,2,-1,-4]))
console.log(threeSum([0,0,0,0,0]))
console.log(threeSum([1,1,1,1,0]))
console.log(threeSum([-2,0,1,1,2]))
console.log(threeSum([3,0,-2,-1,1,2]))
console.log(threeSum([1,1,-2]))