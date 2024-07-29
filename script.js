function calculateTip() {
    var billAmount = document.getElementById('billAmount').value;
    var tipPercentage = document.getElementById('tipPercentage').value;

    var tipAmount = (billAmount * tipPercentage) / 100;
    var totalAmount = parseFloat(billAmount) + parseFloat(tipAmount);

    document.getElementById('totalAmount').innerText = totalAmount.toFixed(2);
}