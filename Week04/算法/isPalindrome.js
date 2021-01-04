/*
 * [125] 验证回文串
 */

let st = "racucar";

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
	let j = s.length;

	for (let i = 0; i < s.length; i++) {

		if (s[j] === s[i]) {
			continue;
		} else {
			return false;
		}

	}

	return true;
};

console.log(isPalindrome(st));
