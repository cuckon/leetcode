/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length < 2) return strs[0]

    for (let i=0; i< strs[0].length; i++) {
        for (let s of strs.slice(1)) {
            if (s[i] != strs[0][i])
                return strs[0].substr(0, i)
        }
    }
    return strs[0]
};

console.log(longestCommonPrefix(['a', 'a']))