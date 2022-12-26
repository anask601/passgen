import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  includeRandomUUID = false;
  password = "";
  randomUUID: string;
  currentValue: any;
  constructor() {}
  onChangeLength(value: string) {
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeAddRandomUUID() {
    this.password = "";
    this.includeRandomUUID = !this.includeRandomUUID;
    // this.includeSymbols = !this.includeSymbols;
    // this.includeNumbers = !this.includeNumbers;
    // this.includeLetters = !this.includeLetters;
  }

  onButtonClick() {
    const numbers = "1234567890";
    const letters = "abcdefghijklmnopqrstuvwyz";
    const symbols = "!@#$%^&*()";
    const randomUUID = crypto.randomUUID() as any;

    let validChars = "";
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    if (this.includeRandomUUID) {
      this.randomUUID = randomUUID;
    }
    let generatedPassword = "";
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;

    if (this.randomUUID) {
      this.password = this.randomUUID;
      this.randomUUID = "";
    }
  }

  onCopy(): void {
    // navigator["clipboard"]
    //   .writeText(content)
    //   .then()
    //   .catch((e) => console.error(e));
    // this.currentValue = this.password;
  }
}
