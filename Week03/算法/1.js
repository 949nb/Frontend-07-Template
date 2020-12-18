// 141. 环形链表
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * 时间复杂度O(10000)
 * 空间复杂度O(1)
 */
var hasCycle = function(head) {
    let curr = head
    let time = 0
    while (curr) {
        if (time > 10000)
            break;
        curr = curr.next
        time++
    }
    return time > 10000
};