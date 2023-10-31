console.log("************** DELIVERABLE 05 *********************");


class SlothMachine {
	coins: number;

	constructor() {
		this.coins = 0;
	}

	play() {
		this.coins++;
		if (getRandomBoolean() && getRandomBoolean() && getRandomBoolean()) {
			console.log(`Congratulations!!!. You won ${this.coins.toString()} coins!!`)
			this.coins = 0
		} else {
			console.log("Good luck next time!!")
		}
	}
}

function getRandomBoolean() {
	return Math.random() < 0.5; // 50% true, 50% false
}

const machine1 = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();