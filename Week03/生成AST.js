function* tokenize(tokens) {
	const Reg = /([0-9\.]+)|([ \t]+)|([\r\n]+)|(\+)|(\-)|(\*)|(\/)/g;
	let dic = ['Number', 'Whitespace', 'LineTerminal', '+', '-', '*', '/'];
	let lastIndex;

	while (true) {
		lastIndex = Reg.lastIndex;
		let res = Reg.exec(tokens);
		if (!res) break;
		if (res[0].length < Reg.lastIndex - lastIndex) break;

		let token = {
			type: null,
			value: null,
		};

		for (let i = 1; i <= res.length; i++) {
			if (res[i]) {
				token.type = dic[i - 1];
				token.value = res[0];
			}
		}
		yield token;
	}
	yield { type: 'EOF' };
}

function Expression(source) {
	if (source[0].type === 'AdditiveExpression' && source[1] && source[1].type === 'EOF') {
		let node = {
			type: 'Expression',
			children: [source.shift(), source.shift()],
		};
		source.unshift(node);
		return node;
	}
	AdditiveExpression(source);
	return Expression(source);
}

function AdditiveExpression(source) {
	if (source[0].type === 'MultiplicativeExpression') {
		let node = {
			type: 'AdditiveExpression',
			children: [source[0]],
		};

		source[0] = node;
		return AdditiveExpression(source);
	}

	if (source[0].type === 'AdditiveExpression' && source[1] && source[1].type === '+') {
		let node = {
			type: 'AdditiveExpression',
			operator: '+',
			children: [],
		};
		node.children.push(source.shift());
		node.children.push(source.shift());
		MultiplicativeExpression(source);
		node.children.push(source.shift());
		source.unshift(node);

		return AdditiveExpression(source);
	}

	if (source[0].type === 'AdditiveExpression' && source[1] && source[1].type === '-') {
		let node = {
			type: 'AdditiveExpression',
			operator: '-',
			children: [],
		};
		node.children.push(source.shift());
		node.children.push(source.shift());
		MultiplicativeExpression(source);
		node.children.push(source.shift());
		source.unshift(node);

		return AdditiveExpression(source);
	}

	if (source[0].type === 'AdditiveExpression') {
		return source[0];
	}
	MultiplicativeExpression(source);
	return AdditiveExpression(source);
}

function MultiplicativeExpression(source) {
	if (source[0].type === 'Number') {
		let node = {
			type: 'MultiplicativeExpression',
			children: [source[0]],
		};

		source[0] = node;
		return MultiplicativeExpression(source);
	}

	if (source[0].type === 'MultiplicativeExpression' && source[1] && source[1].type === '*') {
		let node = {
			type: 'MultiplicativeExpression',
			operator: '*',
			children: [],
		};
		node.children.push(source.shift());
		node.children.push(source.shift());
		node.children.push(source.shift());
		source.unshift(node);

		return MultiplicativeExpression(source);
	}

	if (source[0].type === 'MultiplicativeExpression' && source[1] && source[1].type === '/') {
		let node = {
			type: 'MultiplicativeExpression',
			operator: '/',
			children: [],
		};
		node.children.push(source.shift());
		node.children.push(source.shift());
		node.children.push(source.shift());
		source.unshift(node);

		return MultiplicativeExpression(source);
	}

	if (source[0].type === 'MultiplicativeExpression') {
		return source[0];
	}
}

let source = [];
for (let token of tokenize('11 + 2 * 3')) {
	if (token.type !== 'Whitespace' && token.type != 'LineTerminator') {
		source.push(token);
	}
}

console.log(Expression(source));
