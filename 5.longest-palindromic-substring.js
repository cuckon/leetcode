/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let res = ['', ...new Set(s.split(''))];
    let inner;
    for(let len = 2; len <= s.length; len++) {
        for(let start = 0; start <= s.length - len; start++) {
            inner = s.substr(start + 1, len - 2);
            if (s[start] == s[start + len - 1] && res.includes(inner)) {
                str = s[start] + inner + s[start + len - 1]
                if (!res.includes(str))
                    res.push(str);
            }
        }
    }
    return res.length && res[res.length - 1] || '';
};
// @lc code=end


function test(input, answer) {
    result = longestPalindrome(input)
    isCorrect = result == answer ? '✅' : '❌ (' + answer + ')'
    console.log(`"${input}" = ${result} : ${isCorrect}`)
}

test('a', 'a')
test('aba', 'aba')
test('daba', 'aba')
test('dabav', 'aba')
