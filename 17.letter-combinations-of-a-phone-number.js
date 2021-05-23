/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start

const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
}
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits.length) return [];
    if (digits.length == 1) return map[digits].split('');

    const subs = letterCombinations(digits.substr(1));
    const result = [];
    for (char of map[digits[0]]) {
        for (let sub of subs) {
            result.push(char + sub)
        }
    }
    return result
};
// @lc code=end


function test(input, answer) {
    result = letterCombinations(input)
    isCorrect = result == answer ? '✅' : '❌ (' + answer + ')'
    console.log(`"${input}" = ${result} : ${isCorrect}`)
}


test('23', ["ad","ae","af","bd","be","bf","cd","ce","cf"])
test('2', ['a', 'b', 'c'])
