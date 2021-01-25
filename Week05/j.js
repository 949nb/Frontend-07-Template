// 实现reactive

let reactivities = new Map();
let callbacks = new Map();

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
			usedReactivities.push([obj, prop]);
			return obj[prop];
		},
		set(obj, prop, val) {
			obj[prop] = val;

			if (callbacks.has(obj))
				if (callbacks.get(obj).has(prop))
					for (let callback of callbacks.get(obj).get(prop)) {
						callback();
					}

			return obj[prop];
		},
	});
    reactivities.set(object, proxy);
    return reactivities.get(object);
};
