// Step-1: Add event handler with the withdraw button

document.getElementById('btn-withdraw').addEventListener('click', function(){

    // Step-2: get the withdraw amount from the withdraw input field

    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // Step-3: get previous withdraw total

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // Step-4: calculate total withdraw amount

    const currentWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;

    // *set total withdraw amount

    withdrawTotalElement.innerText = currentWithdrawTotal;

    // Step-5: get the previous balance total

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceAmountString = balanceTotalElement.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceAmountString);

    // Step-6: calculate new balance total

    const newBalanceTotal = previousBalanceAmount - newWithdrawAmount;

    // * set the new balance total

    balanceTotalElement.innerText = newBalanceTotal;

    // Step-7: clear the input field
    
    withdrawField.value = '';

    
})