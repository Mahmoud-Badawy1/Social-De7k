document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form1');
  
    form.addEventListener('submit', function(event) {
      const fname = form.querySelector('input[name="fname"]');
      const lname = form.querySelector('input[name="lname"]');
      const email = form.querySelector('input[name="email"]');
      const password = form.querySelector('input[name="pass"]');
      const confirmPassword = form.querySelector('input[name="confirm-pass"]');
      const emailError = document.getElementById('email-error');
      const passwordError = document.getElementById('password-error');
      const confirmPassError = document.getElementById('confirm-pass-error');
      const fnameError = document.getElementById('fname-error');
      const lnameError = document.getElementById('lname-error');
  
      // Email validation
      if (!email.value || !validateEmail(email.value)) {
        emailError.textContent = "Please enter a valid email address.";
        event.preventDefault(); // Prevent form submission
        return false;
      } else {
        emailError.textContent = ""; // Clear any previous error message
      }
      
      // Password validation
      if (!password.value || password.value.length < 4) {
        passwordError.textContent = "Password must be at least 4 characters long.";
        event.preventDefault(); // Prevent form submission
        return false;
      } else {
        passwordError.textContent = ""; // Clear any previous error message
      }
  
      // Confirm Password validation
      if (password.value !== confirmPassword.value) {
        confirmPassError.textContent = "Passwords do not match.";
        event.preventDefault(); // Prevent form submission
        return false;
      } else {
        confirmPassError.textContent = ""; // Clear any previous error message
      }
  
      // Username and Nickname validation
      const usernameRegex = /^[a-zA-Z0-9_-]+$/;
      if (!usernameRegex.test(fname.value)) {
        fnameError.textContent = "Invalid characters. Use letters, numbers, '-', or '_'.";
        event.preventDefault(); // Prevent form submission
        return false;
      } else {
        fnameError.textContent = ""; // Clear any previous error message
      }
  
      if (!usernameRegex.test(lname.value)) {
        lnameError.textContent = "Invalid characters. Use letters, numbers, '-', or '_'.";
        event.preventDefault(); // Prevent form submission
        return false;
      } else {
        lnameError.textContent = ""; // Clear any previous error message
      }
  
      // If all validations pass, allow the form to submit
      return true;
    });
  
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    }
  });
  