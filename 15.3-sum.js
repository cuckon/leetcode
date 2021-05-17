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
    let last0, last1, last2;
    let left, right;
    let res = []

    for (let i = 0; i < nums.length; i++) {

        if (last0 == nums[i] || nums[i] > 0)
            continue
        last0 = nums[i]
        left = i + 1
        right = nums.length - 1
        if (nums[left] > -nums[i] || nums[right]*2 < -nums[i])
            continue

        last1 = undefined
        last2 = undefined
        while (left < right) {
            if (nums[left] == last1) {
                left ++
                continue
            }
            if (nums[right] == last2) {
                right --
                continue
            }

            sum = nums[left] + nums[right]
            if (sum > -nums[i]) {
                last2 = nums[right]
                right--
            } else if (sum < -nums[i]) {
                last1 = nums[left]
                left++
            } else{
                res.push([nums[i], nums[left], nums[right]])
                last1 = nums[left]
                left++
            }
        }

    }
    return res
};
// @lc code=end

console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([]))
console.log(threeSum([-1,-1, -1, -1,0,1,2,-1,-4]))
console.log(threeSum([0,0,0,0,0]))
console.log(threeSum([1,1,1,1,0]))
console.log(threeSum([-2,0,1,1,2]))
console.log(threeSum([3,0,-2,-1,1,2]))
console.log(threeSum([1,1,-2]))