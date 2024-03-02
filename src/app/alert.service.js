import { isValidInputs } from "./utils/inputs-are-valid";
export class AlertService {
    constructor() {
        this.errorBox = document.getElementById("error");
    }

    hideError() {
        this.errorBox.classList.add("invisible");
    }

    handleAdditionError(inputs, numbers) {
        const fullMessage = inputs.reduce((message, str, index) => {
          if (isValidInputs(numbers[index])) {
            return message + "";
          } else {
            return message + `${str} is not a number. `;
          }
        }, "Please enter two valid numbers! ");
      
        this.errorBox.classList.remove("invisible");
        this.errorBox.innerText = fullMessage;
      };
}