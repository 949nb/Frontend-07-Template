// 234.回文链表
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
 * 时间复杂度O(n)
 * 空间复杂度O(n)
 */
var isPalindrome = function(head) {

    let indexArr = [];
    let curr = head;
    while (curr !== null) {
        indexArr.push(curr.val)
        curr = curr.next
    }

    let n = indexArr.length - 1
    let time = n % 2 ? Math.floor(n/2) : n / 2
    for(let i = 0; i <= time; i++) {
        if (indexArr[n] !== indexArr[i]) {
            return false;
        }
        n--
    }
    return true
    
}