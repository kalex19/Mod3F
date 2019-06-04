export const cards = (state = [], action) => {
	switch (action.type) {
		case 'ALL_CARDS':
			return action.payload.data;
		default:
			return state;
	}
};
