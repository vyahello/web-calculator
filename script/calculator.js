function calculator() {
    let firstValue = parseInt(document.querySelector("#value1").value);
    let secondValue = parseInt(document.querySelector("#value2").value);
    let operator = document.querySelector("#operator").value;
    let calculate;

    if (operator === "add") {
        calculate = firstValue + secondValue;
    } else if (operator === "subtract") {
        calculate = firstValue - secondValue
    } else if (operator === "divide") {
        calculate = firstValue / secondValue
    } else if (operator === "multiply") {
        calculate = firstValue * secondValue
    }
    document.querySelector("#result").innerHTML = calculate;
}