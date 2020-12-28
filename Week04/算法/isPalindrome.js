/*
 * [125] 验证回文串
 */

let st = 'race ,, a car';

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
	let reg = /[a-z]+/g;

	let j = s.length - 1;
	for (let i = 0; i < s.length; i++) {
		if (reg.test(s[i]) && reg.test(s[j])) {
            if (j < 0) continue;
			if (s[j] !== s[i]) return false;
			j--;
		} else {
			reg.test(s[i]) || i++;
			reg.test(s[j]) || (j--, i--);
		}
	}
	return true;
};

console.log(isPalindrome(st));
