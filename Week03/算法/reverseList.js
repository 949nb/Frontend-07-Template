//206. 反转链表
// 时间复杂度 O(n) 空间复杂度O(n)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head) return head
 
    let curr = head

    let listArr = []

    while(curr.next) {
        listArr.push(curr)
        curr = curr.next
    }

    listArr.push(curr)

    for(let i = 0; i < listArr.length; i++) {
        if (i === 0) 
            listArr[i].next = null
        else 
            listArr[i].next = listArr[i - 1]
        
    }

    return listArr[listArr.length - 1]

};