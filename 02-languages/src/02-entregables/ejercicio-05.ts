console.log("************** DELIVERABLE 05 *********************");

class SlothMachine {
  coins: number;

  constructor() {
    this.coins = 0;
  }

  play(): void {
    this.coins++;
    if (getRandomBoolean() && getRandomBoolean() && getRandomBoolean()) {
      var resultText: String = `Congratulations!!!. You won ${this.coins.toString()} coins!!`;
      console.log(resultText);
      this.coins = 0;
    } else {
      console.log("Good luck next time!!");
    }
  }
}

function getRandomBoolean(): boolean {
  return Math.random() < 0.5; // 50% true, 50% false
}

const machine1: SlothMachine = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
