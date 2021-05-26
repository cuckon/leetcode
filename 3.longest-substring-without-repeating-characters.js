/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 *
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length < 2) return s.length

    let start = 0, end = 0
    let result = 1
    while (start < s.length - 1) {
        if (start == end) {
            end ++
        } else if (s.substring(start, end).indexOf(s[end]) != -1) {
            start ++
        } else if (end == s.length - 1) {
            result = Math.max(result, end - start + 1)
            start ++
        } else if (end < s.length - 1){
            end ++
            result = Math.max(result, end - start)
        }

    }
    return result
};
// @lc code=end

function test(s, answer) {
    result = lengthOfLongestSubstring(s)
    isCorrect = result == answer ? '✅' : '❌ (' + answer + ')'
    console.log(`"${s}" = ${result} : ${isCorrect}`)
}


test('abb', 2)
test('a', 1)
test('aa', 1)
test('abc', 3)
test('ab', 2)
test('abaaaaaaaaa', 2)
test('abcdefga', 7)
test('ababc', 3)
test('abcbb', 3)
test('bbbbb', 1)
test('pwwkew', 3)
test('', 0)
