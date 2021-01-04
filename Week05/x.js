let object = {
	a: 1,
	b: 2,
};

effect(() => {
	console.log(po.a);
});

function effect(callback) {
	callbacks.push(callback);
}

let po = reactive(object);

function reactive(object) {
	return new Proxy(object, {
		set(obj, prop, val) {
			obj[prop] = val;
			for (let callback of callbacks) {
				callback();
			}
			console.log(obj, prop, val);
			return obj[prop];
		},
		get(obj, prop) {
			console.log(obj, prop);
			return obj[prop];
		},
	});
}

po.a = 4;
