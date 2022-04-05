const createId = () => {
	const s4 = () => (((1 + Math.random()) * 0x10000)|0).toString(16).substring(1);
	return s4() + s4() + "-" + s4() + s4() + s4() + s4();
};

const createEmptyDataRoom = (params = null) => {
	const data = {
		room: {
			id: "",
			name: ""
		},
		loggedUser: {
			userId: "",
			isAdmin: false,
			username: "",
			email: ""
		},
		questions: []
	};

	if(params === null) return data;

	data.room.id = createId();
	data.room.name = params.roomName;
	data.loggedUser.userId = params.userId;
	data.loggedUser.isAdmin = true;
	data.loggedUser.username = params.username;
	data.loggedUser.email = params.email;
	return data;
};

const createQuestionsItem = (username, userId, content) => {
	return {
		username: username,
		userId: userId,
		content: content,
		isHandsUp: false,
		time: Date.now()
	};
};

const newRoom = params => {
	return createEmptyDataRoom(params);
};

const deleteRoom = () => {
	return createEmptyDataRoom();
};

const changeUsername = (srcData, username, userId, callback) => {
	srcData.loggedUser.username = username;
	srcData.questions = srcData.questions.map(item => {
		if(item.userId == userId) item.username = username;
		return item;
	});

	callback(srcData);
};

const changeEmail = (srcData, email, userId, callback) => {
	srcData.loggedUser.email = email;
	srcData.questions = srcData.questions.map(item => {
		if(item.userId == userId) item.email = email;
		return item;
	});

	callback(srcData);
};

const pushQuestion = (srcData, username, userId, content, callback) => {
	srcData.questions.push(createQuestionsItem(username, userId, content));
	callback(srcData);
};

export default { newRoom, deleteRoom, changeUsername, changeEmail, pushQuestion };
