const input1 = document.getElementById("numberOne");
const input2 = document.getElementById("numberTwo");
const addBtn = document.getElementById("addValues");
const result = document.getElementById("result");
const errorBox = document.getElementById("error");

function hideError() {
    errorBox.classList.add("invisible");
}

function showError() {
    errorBox.classList.remove("invisible");
}

function parseInputs(...input) {
    return input.map(num => parseInt(num));
}

hideError();

function isValidInputs(...input) {
    return input.every(num => typeof num === "number" && !isNaN(num));
}

function onClickAddBtn() {
    hideError();
    const inputs = [input1.value, input2.value];
    const parsedInputs = parseInputs(...inputs);
    if(isValidInputs(...parsedInputs)) {
        hideError();
        result.innerText = parsedInputs[0] + parsedInputs[1];
    } else {
        result.innerText = "";
        errorBox.innerText = "Something wrong with the inputs. Please enter numbers only."
        showError();
    }
}

addBtn.addEventListener("click", onClickAddBtn);
