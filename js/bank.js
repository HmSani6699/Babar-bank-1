function getInput(input) {
    const depositInput = document.getElementById(input);
    const depositInputValue = depositInput.value;
    const depositNumber = parseFloat(depositInputValue);
    //get clear deposit input
    depositInput.value = '';
    return depositNumber;
}

function getTotalAmount(depositNumber, amount) {
    const depositTotal = document.getElementById(amount);
    const depositTotalAmount = depositTotal.innerText;
    const previousDepositTotalAmount = parseFloat(depositTotalAmount);
    depositTotal.innerText = previousDepositTotalAmount + depositNumber;
}

function updateBalance(depositNumber, condition) {
    const balanceText = document.getElementById('balance-total');
    const balancetotal = balanceText.innerText;
    const previousBalanceTotal = parseFloat(balancetotal);
    if (condition == true) {
        balanceText.innerText = previousBalanceTotal + depositNumber;
    }
    else {
        balanceText.innerText = previousBalanceTotal - depositNumber;
    }

}
document.getElementById('deposit-button').addEventListener('click', function () {

    const depositNumber = getInput('deposit-input');
    if (depositNumber > 0) {
        getTotalAmount(depositNumber, 'deposit-total');
        updateBalance(depositNumber, true);
    }
});

document.getElementById('witdrow-button').addEventListener('click', function () {
    const witdrowNumber = getInput('witdrow-input');
    const balanceText = document.getElementById('balance-total');
    const balancetotal = balanceText.innerText;
    const previousBalanceTotal = parseFloat(balancetotal);
    if (witdrowNumber > 0 && witdrowNumber < previousBalanceTotal) {
        getTotalAmount(witdrowNumber, 'witdrow-total');
        updateBalance(witdrowNumber, false);
    }
});