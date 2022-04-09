const getUrlParams = () => new URLSearchParams(window.location.search);

export default {
	get: keys => {
		const urlParams = getUrlParams(),
			data = {};

		keys.forEach(key => {
			data[key] = urlParams.get(key);
		});

		return data;
	},  // nullable
	set: params => {
		const urlParams = getUrlParams();

		Object.entries(params).forEach(([key, val]) => {
			urlParams.append(key, val);
		});

		window.location.search = urlParams;
	},
	delete: keys => {
		const urlParams = getUrlParams();

		keys.forEach(key => {
			urlParams.delete(key);
		});
		
		window.location.search = urlParams;
	}
};
