const passwordInput = document.getElementById('password');
const strengthFill = document.getElementById('strength-fill');
const strengthText = document.getElementById('strength-text');

passwordInput.addEventListener('input', () => {
  const password = passwordInput.value;
  updateStrength(password);
});

function updateStrength(password) {
  let strength = 0;

  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;

  switch (strength) {
    case 0:
    case 1:
      strengthFill.style.width = '25%';
      strengthFill.style.backgroundColor = 'transparent';
      strengthText.textContent = 'Very Weak';
      break;
    case 2:
      strengthFill.style.width = '50%';
      strengthFill.style.backgroundColor = 'red';
      strengthText.textContent = 'Weak';
      break;
    case 3:
      strengthFill.style.width = '75%';
      strengthFill.style.backgroundColor = 'gold';
      strengthText.textContent = 'Strong';
      break;
    case 4:
      strengthFill.style.width = '100%';
      strengthFill.style.backgroundColor = 'green';
      strengthText.textContent = 'Very Strong';
      break;
  }
}