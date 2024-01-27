// Get the elements by their ids
const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitButton = document.getElementById('submit');

// Function to validate the form
function validateForm() {
  let isValid = true;

  // Check if name is empty
  if (nameInput.value.trim() === '') {
    setErrorFor(nameInput, 'Name cannot be blank');
    isValid = false;
  } else {
    setSuccessFor(nameInput);
  }

  // Check if email is empty
  if (emailInput.value.trim() === '') {
    setErrorFor(emailInput, 'Email cannot be blank');
    isValid = false;
  } else {
    setSuccessFor(emailInput);
  }

  // Check if message is empty
  if (messageInput.value.trim() === '') {
    setErrorFor(messageInput, 'Message cannot be blank');
    isValid = false;
  } else {
    setSuccessFor(messageInput);
  }

  return isValid;
}

// Function to set error message for an input
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  // Add error message inside small
  small.textContent = message;

  // Add error class to form control
  formControl.className = 'form-control error';
}

// Function to set success for an input
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Attach event listeners
form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (validateForm()) {
    alert('Form submitted successfully');
  } else {
    alert('Form has errors');
  }
});