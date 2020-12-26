/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var Trie = function () {
	this.$ = Symbol('$');
	this.root = Object.create(null);
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
	let node = this.root;

	for (let ch of word) {
		if (!node[ch]) {
			node[ch] = Object.create(null);
			node = node[ch];
		} else {
			node = node[ch];
		}
	}

	if (node[this.$]) node[this.$]++;
	else node[this.$] = 1;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
	let node = this.root;
	let s = '';
	for (let ch of word) {
		if (node[ch]) {
			s += ch;
			node = node[ch];
			if (node[this.$] && s === word) return true;
		} else {
			return false;
		}
	}
	return Boolean(node[this.$])
};

// let trie = new Trie();
// console.log(trie.insert('word'));
// console.log(trie.search('wor'));

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
	let node = this.root;
	let s = '';
	for (let ch of prefix) {
		if (node[ch]) {
			s += ch;
			node = node[ch];
		} else {
			return false;
		}
	}
	return true;
};
