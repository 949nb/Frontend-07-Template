// 21.合并两个有序列表

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * 这种解法是在官方解题上面看到的，这种控制变量指向对象的做法实在有意思
 */
var mergeTwoLists = function (l1, l2) {
	let preList = new ListNode();
	let pre = preList;

	while (l1 !== null && l2 !== null) {
		if (l1.val <= l2.val) {
			pre.next = l1;
			pre = pre.next;
			l1 = l1.next;
		} else {
			pre.next = l2;
			pre = pre.next;
			l2 = l2.next;
		}

		// l1.val <= l2.val ? 
		// 	(pre.next = l1) && ( (pre = pre.next) && (l1 = l1.next)):
		// 	(pre.next = l2) && (pre = pre.next) && (l2 = l2.next)


	}

	pre.next = l1 === null ? l2 : l1;
	preList = preList.next;

	return preList;
};

let l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let l2 = new ListNode(1, new ListNode(3, new ListNode(4)));

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 时间复杂度: O(n)
 * 空间复杂度: O(n)
 * 傻瓜解法，先把链表套到数组里面 然后再合并排序数组，然后按照数组索引连接链表
 */
var mergeTwoLists2 = function (l1, l2) {
	if (!l1 && !l2) return null;
	let l1Arr = [];
	let l2Arr = [];

	while (l1 !== null || l2 !== null) {
		if (l1 !== null) {
			l1Arr.push(l1);
			l1 = l1.next;
		}
		if (l2 !== null) {
			l2Arr.push(l2);
			l2 = l2.next;
		}
	}

	let resultArr = l1Arr.concat(l2Arr);

	resultArr = resultArr.sort((a, b) => a.val - b.val);

	for (let i = 0; i < resultArr.length; i++) {
		if (i + 1 < resultArr.length) resultArr[i].next = resultArr[i + 1];
		else resultArr[i].next = null;
	}
	return resultArr[0];
};

let result = mergeTwoLists2(l1, l2);

function logResult(res) {
	let resArr = [];
	while (res !== null) {
		resArr.push(res.val);
		res = res.next;
	}
	console.log(resArr.join('->'));
}

logResult(result);
