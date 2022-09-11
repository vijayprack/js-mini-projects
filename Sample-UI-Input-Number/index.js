let getInputValue = function() {
    let inputValue = document.getElementById("inputNum").value;
    if (inputValue < 0) {
        document.getElementById("outputNum").value = "Enter a positive value."
    } else {
        document.getElementById("outputNum").value = 
            (Number(inputValue) + 2) + ", " + (Number(inputValue) + 4) + ", " + (Number(inputValue) + 6);
    };
};