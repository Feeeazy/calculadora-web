const ALLOWED_KEYS = {
  numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  operations: ["+", "-", "*", "/"],
  generic: ["Enter", "Backspace"],
};

class Calculator {
  constructor(id) {
    this.id = id;
    this.root = document.getElementById(this.id);
    this.displayScreen = document.getElementById("displayScreen");
    this.screenEquation = document.getElementById("screenEquation");
    this.display = "";
  }

  start() {
    this.listenKeyboard();
  }

  setDisplay(value) {
    return new Promise((resolve, reject) => {
      try {
        let val = value.toString();
        this.displayScreen.innerText += val;
        this.display += val;
        resolve(true);
      } catch {
        reject(false);
      }
    });
  }

  setEquation(value) {
    return new Promise((resolve, reject) => {
      try {
        let val = value.toString();
        this.screenEquation.innerText = val;
        this.equation = val;
        resolve(true);
      } catch {
        reject(false);
      }
    });
  }

  setOperation(operator) {
    if (this.getDisplayLength >= 1) {
      console.log("setando operação");
      this.setEquation(`${this.getDisplay()} ${operator}`);
    }
  }

  getDisplay() {
    return this.display;
  }

  getDisplayLength() {
    return this.getDisplay().toString().length;
  }

  listenKeyboard() {
    document.addEventListener("keyup", (event) => {
      let pressedKey = event.key;

      let validNumber = ALLOWED_KEYS.numbers.includes(pressedKey);
      let validOperation = ALLOWED_KEYS.operations.includes(pressedKey);
      let validGeneric = ALLOWED_KEYS.generic.includes(pressedKey);

      if (!validNumber && !validOperation && !validGeneric) return false;

      if (validNumber) this.setDisplay(pressedKey);
      if (validOperation) this.setOperation(pressedKey);
    });
  }
}

const calc = new Calculator("Calculadora");
calc.start();
