document.addEventListener('DOMContentLoaded', function() {
    // Retrieve data from localStorage
    const hotelName = localStorage.getItem('hotelName');
    const bookingDate = localStorage.getItem('bookingDate');
    const invoiceDate = localStorage.getItem('invoiceDate');
    const guestName = localStorage.getItem('guestName');
    const roomType = localStorage.getItem('roomType');
    const checkInDate = localStorage.getItem('checkInDate');
    const checkOutDate = localStorage.getItem('checkOutDate');
    const nights = localStorage.getItem('nights');
    const totalAmount = localStorage.getItem('totalAmount');

    // Populate the invoice with data
    document.getElementById('displayHotelName').innerText = hotelName;
    document.getElementById('displayBookingDate').innerText = bookingDate;
    document.getElementById('displayInvoiceDate').innerText = invoiceDate;
    document.getElementById('displayGuestName').innerText = guestName;
    document.getElementById('displayRoomType').innerText = roomType;
    document.getElementById('displayCheckInDate').innerText = checkInDate;
    document.getElementById('displayCheckOutDate').innerText = checkOutDate;
    document.getElementById('displayNights').innerText = nights;
    document.getElementById('displayTotalAmount').innerText = parseFloat(totalAmount).toFixed(2);

    document.getElementById('checkout-button').addEventListener('click', function() {
        window.location.href = 'payment.html';
    });
});
