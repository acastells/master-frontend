export const getAlpacasInitialData = () => {
	const itemData = [];
	for (let i = 1; i <= 4; i++) {
		const data = {
			id: `assets/alpacas${i}`,
			picUrl: `/src/assets/alpacas${i}.jpg`,
			title: `Alpacas ${i}`,
			selected: false,
		};
		itemData.push(data);
	}
	return itemData;
};

export const getCalvesInitialData = () => {
	const itemData = [];
	for (let i = 1; i <= 4; i++) {
		const data = {
			id: `assets/calves${i}`,
			picUrl: `/src/assets/calves${i}.jpg`,
			title: `Calves ${i}`,
			selected: false,
		};
		itemData.push(data);
	}
	return itemData;
};