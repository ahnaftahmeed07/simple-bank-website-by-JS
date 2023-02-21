// Step-1: Add event listener

document.getElementById('btn-deposit').addEventListener('click', function(){

    // Step-2: get the deposit input field

    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // Step-7: clearing the deposit field
    depositField.value = '';

    if(isNaN(newDepositAmount)){
        alert('Please enter a valid amount!');
        return;
    }

    // Step-3: get the current deposit total

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // Step-4: Add numbers to set the total deposit 

    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // Set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    // Step-5: get balance current total

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceAmountString = balanceTotalElement.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceAmountString);

    // Step-6: calculate current total balance

    const currentBalanceTotal = previousBalanceAmount + newDepositAmount;
    // Set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

})