export default {
	get: keys => {
		let data = {};
		keys.forEach(key => {
			data[key] = window.localStorage.getItem("questionsRoom_" + key);
		});
		return data;
	},
	set: (data) => {
		Object.entries(data).forEach(([key, val]) => window.localStorage.setItem("questionsRoom_" + key, val));
	}
};
