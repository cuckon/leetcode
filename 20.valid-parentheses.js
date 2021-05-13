/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    let chars = {')': '(', ']': '[', '}': '{'}
    for (let i=0; i<s.length; i++) {
        if (!chars[s[i]])
            stack.push(s[i]);
        else if (stack.pop() != chars[s[i]])
                return false;
    }
    return !stack.length
};
// @lc code=end
console.log('True:')
console.log(isValid('()'))
console.log(isValid('()()'))
console.log(isValid('()[]'))
console.log(isValid(''))
console.log(isValid('((()))'))
console.log(isValid('({})'))
console.log(isValid('({}[])'))
console.log(isValid('({}[][[]])'))
console.log(isValid('({})'))

console.log('False:')
console.log(isValid('([)]'))
console.log(isValid('()('))
console.log(isValid('())()'))
console.log(isValid('()([]'))
console.log(isValid(')'))
console.log(isValid('('))
console.log(isValid('({[})'))
console.log(isValid('({]})'))
console.log(isValid('(({}[])'))
console.log(isValid('[({}[][[]])'))
console.log(isValid('[[[[[['))