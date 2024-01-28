function generateQR() {
    // Get the phone number from the input
    var phoneNumber = document.getElementById('phone').value;
  
    // Check if the phone number is not empty
    if (phoneNumber.trim() === '') {
      alert('Please enter a phone number');
      return;
    }
  
    // Clear previous QR code
    document.getElementById('qrcode').innerHTML = '';
  
    // Generate QR code
    var qrcode = new QRCode(document.getElementById('qrcode'), {
      text: phoneNumber,
      width: 128,
      height: 128
    });
  }
  