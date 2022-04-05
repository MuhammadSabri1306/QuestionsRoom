const getCurrentUrl = () => new URL(window.location.href);

export default {
	get: key => getCurrentUrl().searchParams.get(key),
	set: (key, val) => getCurrentUrl().searchParams.set(key, val),
	delete: key => getCurrentUrl().searchParams.delete(key)
};
