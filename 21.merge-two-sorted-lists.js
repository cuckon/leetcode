/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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


var mergeTwoLists = function(l1, l2) {
    let head = new ListNode()
    let current = head
    let p1 = l1, p2 = l2
    while (p1 && p2) {
        if (p1.val < p2.val) {
            current.next = new ListNode(p1.val)
            p1 = p1.next
        } else {
            current.next = new ListNode(p2.val)
            p2 = p2.next
        }
        current = current.next
    }

    current.next = p1 || p2
    return head.next
}
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


// console.log(chainToArray(mergeTwoLists(
//     makeChain([1, 2, 4]),
//     makeChain([1, 3, 4]),
// )))

console.log(chainToArray(mergeTwoLists(
    makeChain([]),
    makeChain([1, 3, 4]),
)))

console.log(chainToArray(mergeTwoLists(
    makeChain([1, 2, 4]),
    makeChain([]),
)))

console.log(chainToArray(mergeTwoLists(
    makeChain([1, 2, 4]),
    makeChain([1, 2, 4]),
)))

console.log(chainToArray(mergeTwoLists(
    makeChain([]),
    makeChain([]),
)))

console.log(chainToArray(mergeTwoLists(
    makeChain([1, 1, 1]),
    makeChain([1, 1, 1]),
)))