// reactive的实现
let reactivties = new Map();
let callbacks = new Map();
let usedReactivtives = [];
let object = {
	a: 1,
	b: 2,
};

function effect(callback) {
	usedReactivtives = [];
	callback();

	for (let reactivty of usedReactivtives) {
		if (!callbacks.has(reactivty[0])) {
			callbacks.set(reactivty[0], new Map());
		}
		if (!callbacks.get(reactivty[0]).has(reactivty[1])) {
			callbacks.get(reactivty[0]).set(reactivty[1], []);
		}
		callbacks.get(reactivty[0]).get(reactivty[1]).push(callback);
	}
}

function reactive(object) {
	if (reactivties.has(object)) return reactivties.get(object);

	let proxy = new Proxy(object, {
		set(obj, prop, val) {
			obj[prop] = val;
			if (callbacks.get(obj))
				if (callbacks.get(obj).get(prop))
					for (let callback of callbacks.get(obj).get(prop)) {
						callback();
					}
			return obj[prop];
		},
		get(obj, prop) {
			usedReactivtives.push([obj, prop]);
			if (typeof obj[prop] === 'object') return reactive(obj[prop]);

			return obj[prop];
		},
	});

	reactivties.set(object, proxy);
}

let pop = reactive(object);
pop.a = 4;

// effect 将pop.a加入响应式对象的key中, 并且规定它的callback。
effect(() => {
	console.log(pop.a);
});
