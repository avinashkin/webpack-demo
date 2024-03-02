const alertService = new AlertService();
const componentService = new ComponentService();
const run = (alertService, componentService) => {
    const cb = () => {
        alertService.hideError();
        const inputs = componentService.getInputs();
        const parsedInputs = parseInputs(...inputs);
        
        if(isValidInputs(...parsedInputs)) {
            componentService.setResult(parsedInputs[0] + parsedInputs[1]);
        } else {
            componentService.setResult("");
            alertService.handleAdditionError(inputs, parsedInputs);
        }
    }
    componentService.onClick(cb);
};

run(alertService, componentService);