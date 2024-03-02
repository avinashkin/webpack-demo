class ComponentService {
    constructor() {
        this.input1 = document.getElementById("numberOne");
        this.input2 = document.getElementById("numberTwo");
        this.addBtn = document.getElementById("addValues");
        this.result = document.getElementById("result");
    }

    getInputs() {
        return [this.input1.value, this.input2.value];
    }

    setResult(str) {
        this.result.innerText = str;
    }

    onClick(cb) {
        this.addBtn.addEventListener("click", cb);
    }
}