class Trie {
	$ = Symbol('$');

	constructor() {
		this.root = Object.create(null);
	}

	insert(word) {
		let node = this.root;
		for (let c of word) {
			if (!node[c]) {
				node[c] = Object.create(null);
			}
			node = node[c];
		}
		if (!(this.$ in node)) {
			node[this.$] = 0;
		}
		node[this.$]++;
	}

	has(word) {
		let node = this.root;
		let visit = (node, word) => {
			let s = '';
			for (let c of word) {
				if (node[c]) {
					s += c;
					node = node[c];
				} else {
					return false;
				}
			}
			return s === word && node[this.$] === 1;
		};
		return visit(node, word);
	}

	most() {
		let max = 0;
		let maxWord = null;
		let visit = (node, word) => {
			if (node[this.$] && node[this.$] > max) {
				max = node[this.$];
				maxWord = word;
			}
			for (let p in node) {
				visit(node[p], word + p);
			}
		};
		visit(this.root, '');
		return [maxWord, max];
	}
}

function getTime() {
	return new Date().getTime();
}

function randomWord(length) {
	let s = '';
	for (let i = 0; i < length; i++)
		s += String.fromCharCode(Math.random() * 26 + 'a'.charCodeAt(0));
	return s;
}

let trie = new Trie();

for (let i = 0; i < 10000; i++) {
	trie.insert(randomWord(4));
}

trie.insert('acd');
console.log(trie.has('aaaa'));
console.log(trie.most());
