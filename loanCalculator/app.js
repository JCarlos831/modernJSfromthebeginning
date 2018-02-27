// Listen for submit
document.querySelector('#loan-form').addEventListener('submit', function(e){
    // Hide results
    document.querySelector('#results').style.display = 'none';
    
    // Show Loader
    document.querySelector('#loading').style.display = 'block';
    
    setTimeout(calculateResults, 2000);
    
    
    e.preventDefault();
});

// Reset Fields
// function resetFields() {
//     document.querySelector('#amount').innerHTML = '';
//     document.querySelector('#interest').innerHTML = '';
//     document.querySelector('#years').innerHTML = '';
// }

document.querySelector('#resetFields').addEventListener('click', function() {
    console.log('reset');
    document.querySelector('#amount').value = '';
    document.querySelector('#interest').value = '';
    document.querySelector('#years').value = '';
    document.querySelector('#loading').style.display = 'none';
    
    // Hide results
    document.querySelector('#results').style.display = 'none';
});

// Calculate Results
function calculateResults() {
    console.log('Calculating...');
    // UI Variables
    const amount = document.querySelector('#amount');
    const interest = document.querySelector('#interest');
    const years = document.querySelector('#years');
    const monthlyPayment = document.querySelector('#monthly-payment');
    const totalPayment = document.querySelector('#total-payment');
    const totalInterest = document.querySelector('#total-interest')
    
    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;
    
    // Compute monthly payments
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest)/(x-1);
    
    if(isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
        
        // Show results
        document.querySelector('#results').style.display = 'block';
        
        // Hide Loader
            document.querySelector('#loading').style.display = 'none';

    } else {
        showError('Please check your numbers');
    }
}

// Show Error
function showError(error){
    // Hide results
    document.querySelector('#results').style.display = 'none';
        
    // Hide Loader
    document.querySelector('#loading').style.display = 'none';
    
    // Create a Div
    const errorDiv = document.createElement('div');
    
    // Get Elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    
    // Add Class
    errorDiv.className = 'alert alert-danger';
    
    // Create Text Node and Append to Div
    errorDiv.appendChild(document.createTextNode(error));
    
    // Insert Error Above Heading
    card.insertBefore(errorDiv, heading);
    
    // Clear Error After 3 Seconds
    setTimeout(clearError, 3000);
}

// Clear Error
function clearError() {
    document.querySelector('.alert').remove();
}
