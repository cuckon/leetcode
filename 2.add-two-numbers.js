/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(0)
    let current = head
    let tmp_sum = 0

    while (l1 || l2) {
        current.next = new ListNode(tmp_sum)
        current = current.next

        current.val += (l1 ? l1.val : 0) + (l2 ? l2.val : 0)
        l1 = l1?.next
        l2 = l2?.next

        tmp_sum = current.val / 10 | 0
        current.val %= 10
    }

    if (tmp_sum)
        current.next = new ListNode(tmp_sum)

    return head.next
};
// @lc code=end


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


function makeChain(vals) {
    let head = new ListNode()
    current = head

    for(let v of vals) {
        current.next = new ListNode(v)
        current = current.next
    }
    return head.next
}


function chainToArray(node) {
    let array = []
    while (node != null) {
        array.push(node.val)
        node = node.next
    }
    return array
}


console.log(chainToArray(addTwoNumbers(
        makeChain([2, 4]), makeChain([5, 6, 4])
)))

console.log(chainToArray(addTwoNumbers(
    makeChain([0, 2, 4]), makeChain([5, 6, 4])
)))

console.log(chainToArray(addTwoNumbers(
    makeChain([0]), makeChain([5, 6, 4])
)))

console.log(chainToArray(addTwoNumbers(
    makeChain([9, 9, 9]), makeChain([9, 9, 9])
)))

console.log(chainToArray(addTwoNumbers(
    makeChain([9, 9, 9]), makeChain([1])
)))