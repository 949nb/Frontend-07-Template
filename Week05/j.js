// 实现reactive

let reactivities = new Map();
let callbacks = new Map();
let object = {
	a: 1,
	b: 2,
};

let usedReactivities = [];

let effect = (callback) => {
	usedReactivities = [];
	callback();

	for (let item of usedReactivities) {
		if (!callbacks.has(item[0])) callbacks.set(item[0], new Map());
		if (!callbacks.get(item[0]).has(item[1])) callbacks.get(item[0]).set(item[1], []);
		callbacks.get(item[0]).get(item[1]).push(callback);
	}
};

let reactive = (object) => {
	if (reactivities.has(object)) return reactivities.get(object);
	let proxy = new Proxy(object, {
		get(obj, prop) {
			console.log('使用了: ', prop);
			usedReactivities.push([obj, prop]);
			return obj[prop];
		},
		set(obj, prop, val) {
			obj[prop] = val;
			console.log('修改了: ', prop + ` 为 => ${val}`);

			if (callbacks.has(obj))
				if (callbacks.get(obj).has(prop))
					for (let callback of callbacks.get(obj).get(prop)) {
						callback();
						console.log(`调用了 ${prop} 属性的callback!`);
					}

			return obj[prop];
		},
	});
    reactivities.set(object, proxy);
    return reactivities.get(object);
};

let obj = reactive(object);
obj.a = 2;
obj.c = 1;

console.log(obj.a);

effect(() => {
	console.log(obj.a);
});

obj.a = 10;
