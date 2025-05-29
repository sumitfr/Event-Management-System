function redirectToBookingForm() {
  window.location.href = 'booking2.html';
}

document.addEventListener('DOMContentLoaded', function() {
  var buttons = document.querySelectorAll('.button');
  buttons.forEach(function(button) {
      button.addEventListener('click', redirectToBookingForm);
  });
});

function generateInvoice() {
  // Get input values
  const hotelName = document.getElementById('hotelName').value;
  const bookingDate = document.getElementById('bookingDate').value;
  const invoiceDate = document.getElementById('invoiceDate').value;
  const guestName = document.getElementById('guestName').value;
  const roomType = document.getElementById('roomType').value;
  const checkInDate = document.getElementById('checkInDate').value;
  const checkOutDate = document.getElementById('checkOutDate').value;
  const nights = document.getElementById('nights').value;
  const menuAmount = document.getElementById('menuAmount').value;

   // Calculate total amount
   const totalAmount = nights * menuAmount;


  // Open a new window for the invoice
  const invoiceWindow = window.open('invoice.html', '_blank');

  // Wait for the new window to load
  invoiceWindow.onload = function() {
      // Populate the invoice with data
      invoiceWindow.document.getElementById('displayHotelName').innerText = hotelName;
      invoiceWindow.document.getElementById('displayBookingDate').innerText = bookingDate;
      invoiceWindow.document.getElementById('displayInvoiceDate').innerText = invoiceDate;
      invoiceWindow.document.getElementById('displayGuestName').innerText = guestName;
      invoiceWindow.document.getElementById('displayRoomType').innerText = roomType;
      invoiceWindow.document.getElementById('displayCheckInDate').innerText = checkInDate;
      invoiceWindow.document.getElementById('displayCheckOutDate').innerText = checkOutDate;
      invoiceWindow.document.getElementById('displayNights').innerText = nights;
      invoiceWindow.document.getElementById('displayTotalAmount').innerText = parseFloat(totalAmount).toFixed(2);
  }

      document.getElementById('invoiceBox').style.display = 'block';
}