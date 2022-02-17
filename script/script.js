// calculate button 
document.getElementById('calculate-button').addEventListener('click', function () {
    const incomeInput = document.getElementById('income-amount');
    const foodCost = document.getElementById('food-cost');
    const rentCost = document.getElementById('rent-cost');
    const clothesCost = document.getElementById('clothes-cost');
    const showTotalExpenses = document.getElementById('total-expenses');
    const showBalance = document.getElementById('show-balance');

    // error handle 
    // income 
    if (isNaN(incomeInput.value) || incomeInput.value <= 0 || incomeInput.value == '') {
        document.getElementById('income-error').style.display = 'block'
        return
    }
    else {
        document.getElementById('income-error').style.display = 'none'
    }

    //food
    if (isNaN(foodCost.value) == false && foodCost.value >= 0 || foodCost.value == '') {
        document.getElementById('food-error').style.display = 'none';
        if (foodCost.value == '') {
            foodCost.value = 0;
        }
    }
    else if (isNaN(foodCost.value) || foodCost.value < 0) {
        document.getElementById('food-error').style.display = 'block';
        showTotalExpenses.innerText = '';
        showBalance.innerText = '';
        return
    }
    //rent
    if (isNaN(rentCost.value) == false && rentCost.value >= 0 || rentCost.value == '') {
        document.getElementById('rent-error').style.display = 'none';
        if (rentCost.value == '') {
            rentCost.value = 0;
        }
    }
    else if (isNaN(rentCost.value) || rentCost.value < 0) {
        document.getElementById('rent-error').style.display = 'block';
        showTotalExpenses.innerText = '';
        showBalance.innerText = '';
        return
    }
    //cloth
    if (isNaN(clothesCost.value) == false && clothesCost.value >= 0 || clothesCost.value == '') {
        document.getElementById('clothes-error').style.display = 'none';
        if (clothesCost.value == '') {
            clothesCost.value = 0;
        }
    }
    else if (isNaN(clothesCost.value) || clothesCost.value < 0) {
        document.getElementById('clothes-error').style.display = 'block';
        showTotalExpenses.innerText = '';
        showBalance.innerText = '';
        return
    }
    // total cal 
    const totalExpenses = parseFloat(foodCost.value) + parseFloat(rentCost.value) + parseFloat(clothesCost.value);
    if (totalExpenses > incomeInput.value) {
        document.getElementById('income-small-error').style.display = 'block';
        showTotalExpenses.innerText = '';
        showBalance.innerText = '';
        return
    }
    else {
        document.getElementById('income-small-error').style.display = 'none'
    }
// value put into expanses and balance 
    showTotalExpenses.innerText = totalExpenses.toFixed(2);
    showBalance.innerText = (parseFloat(incomeInput.value) - totalExpenses).toFixed(2);
})

// save function 
document.getElementById('save-button').addEventListener('click', function () {
    const incomeInput = document.getElementById('income-amount');
    const savingInput =document.getElementById('saving-input');
    const showSaving =document.getElementById('show-saving');
    const showBalance = document.getElementById('show-balance');
    const showRemainingBalance =document.getElementById('show-remaing-balance');

    const calculateSavingAmount =parseFloat(incomeInput.value) * (parseFloat(savingInput.value) /100);

    showSaving.innerText= calculateSavingAmount.toFixed(2);
    showRemainingBalance.innerText= (parseFloat(showBalance.innerText) - parseFloat(calculateSavingAmount)).toFixed(2)
    


})