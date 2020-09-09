document.querySelector('.submit').addEventListener("click",event => {
    event.preventDefault()
    getBornDate()
})
const getBornDate = () => {
    let firstValue = document.querySelector("#first").value
    let secondValue = document.querySelector("#second").value
    if (firstValue && secondValue) {
        let sum = parseFloat(firstValue) + parseFloat(secondValue)
        let mult = parseFloat(firstValue) * parseFloat(secondValue)
        let div = parseFloat(firstValue) / parseFloat(secondValue)
        let rest = parseFloat(firstValue) % parseFloat(secondValue)
        document.getElementById('sum-operation').innerHTML = firstValue + " + " + secondValue;
        document.getElementById('mult-operation').innerHTML = firstValue + " * " + secondValue;
        document.getElementById('div-operation').innerHTML = firstValue + " / " + secondValue;
        document.getElementById('rest-operation').innerHTML = firstValue + " % " + secondValue;
        document.getElementById('sum-value').innerHTML = sum;
        document.getElementById('mult-value').innerHTML = mult;
        document.getElementById('div-value').innerHTML = div;
        document.getElementById('rest-value').innerHTML = isNaN(rest) ? "0" : rest;
    };
};