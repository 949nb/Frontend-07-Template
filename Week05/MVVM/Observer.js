function Observer(data) {
	if (!data || typeof data !== 'object') return;

	Object.keys(data).forEach((key) => {
		defineReactive(data, key, data[key]);
	});
}

function defineReactive(data, key, value) {
	Observer(value); // 监听data;

	Object.defineProperty(data, key, {
		enumerable: true,
		configurable: false,
		get() {
			console.log('监听到了getter =>', value);
			return value;
		},
		set(newValue) {
			console.log('原来的值' + value + '=>' + newValue);
            value = newValue;
		},
	});
}

let data = {
	a: 1,
	b: 2,
};
Observer(data);
data.a = 3;
