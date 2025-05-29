document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const cardName = document.getElementById('cardName').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;
    const amount = document.getElementById('amount').value;

    
    if (cardName && cardNumber && expiryDate && cvv && amount) {
        alert('Payment processed successfully!');
    
    } else {
        alert('Please fill in all the fields.');
    }
});

document.getElementById('checkout-button').addEventListener('click', function() {
    window.location.href = 'index2.html';
});