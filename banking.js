function getInput(inputId) {

    //get the Input

    const InputField = document.getElementById(inputId);
    const newInputAmount = InputField.value;



    InputField.value = ''
    return newInputAmount;
}

function updateTotalField(totalInputField, newdepositAmount) {
    const TotalField = document.getElementById(totalInputField);

    const previousTotalAmount = TotalField.innerText
    const newTotalField = parseFloat(previousTotalAmount) + parseFloat(newdepositAmount);

    TotalField.innerText = newTotalField;
}

function getCurrentBalance() {
    debugger;
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceAmount = balanceTotal.innerText
    return previousBalanceAmount;
}

function updateBalance(Amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceAmount = getCurrentBalance();
    if (isAdd == true) {
        const newBalanceTotal = parseFloat(previousBalanceAmount) + parseFloat(Amount)
        balanceTotal.innerText = newBalanceTotal
    }

    else {
        const newBalanceTotal = parseFloat(previousBalanceAmount) - parseFloat(Amount)
        balanceTotal.innerText = newBalanceTotal
    }



}

//deposit

document.getElementById('deposit-button').addEventListener('click', function () {

    //call the function for get the value of newdeposit amount
    const newdepositAmount = getInput('deposit-input');
    if (newdepositAmount > 0) {
        //call the function and get the total deposit
        updateTotalField('deposit-total', newdepositAmount)

        updateBalance(newdepositAmount, true)  //update balance total

    }
    else {
        alert('negative values not allowed')
    }

});

//withdraw

document.getElementById('withdraw-button').addEventListener('click', function () {

    //call the function for get the value of newdeposit amount
    const newwithdrawAmount = getInput('withdraw-input')
    const currentBalance = getCurrentBalance();

    if (newwithdrawAmount > 0 && newwithdrawAmount < currentBalance) {
        //call the function and get the total withdraw
        updateTotalField('withdraw-total', newwithdrawAmount);

        updateBalance(newwithdrawAmount, false);
    }
    else {
        alert('negative values not allowed');
    }
});