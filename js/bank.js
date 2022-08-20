document.getElementById('deposit-button').addEventListener('click', function () {
    //get deposit input
    const depositInput = document.getElementById('deposit-input');
    const depositInputValue = depositInput.value;
    const depositNumber = parseFloat(depositInputValue);
    //update deposit total amount
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalAmount = depositTotal.innerText;
    const previousDepositTotalAmount = parseFloat(depositTotalAmount);
    depositTotal.innerText = previousDepositTotalAmount + depositNumber;

    //get update balance
    const balanceText = document.getElementById('balance-total');
    const balancetotal = balanceText.innerText;
    const previousBalanceTotal = parseFloat(balancetotal);
    balanceText.innerText = previousBalanceTotal + depositNumber;

    //get clear deposit input
    depositInput.value = '';
});

document.getElementById('witdrow-button').addEventListener('click', function () {
    //get witdrow input
    const witdrowinput = document.getElementById('witdrow-input');
    const witdroInputValue = witdrowinput.value;
    const witdrowNumber = parseFloat(witdroInputValue);
    //get update witdrow total amount
    const witdrowTotal = document.getElementById('witdrow-total');
    const witdrowTotalAmount = witdrowTotal.innerText;
    const previouswitdeowAmount = parseFloat(witdrowTotalAmount);
    witdrowTotal.innerText = previouswitdeowAmount + witdrowNumber;

    //get update balance
    const balanceText = document.getElementById('balance-total');
    const balancetotal = balanceText.innerText;
    const previousBalanceTotal = parseFloat(balancetotal);
    balanceText.innerText = previousBalanceTotal - witdrowNumber;

    //clear witdrow input
    witdrowinput.value = '';

})