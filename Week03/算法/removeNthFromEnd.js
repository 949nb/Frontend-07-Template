// 19. 删除链表的倒数第N个节点
// 时间复杂度 O(n) 空间复杂度O(n)

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let current = head;
    let listArr = [];
    listArr.push(current);
    while (current.next) {
        current = current.next;
        listArr.push(current);
    }
    if (listArr.length < 1) {
        return head;
    } else if (listArr.length === 1) {
        head = null;
        return head;
    };

    let pre =listArr.length - n - 1

    if (pre < 0) {
        head = listArr[1]
        return head
    }
    listArr[pre].next = listArr[listArr.length - n].next;
    
    return head
};
