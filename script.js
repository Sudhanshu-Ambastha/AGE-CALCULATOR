// Function to calculate the age
function calculateAge() {
  let dob = document.getElementById('dob').value;
  
  if (!dob) {
    alert("Please enter your birthdate!");
    return;
  }

  let birthDate = new Date(dob);
  let currentDate = new Date();
  
  if (birthDate > currentDate) {
    alert("Birthdate cannot be in the future.");
    return;
  }

  let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
  let ageMonths = currentDate.getMonth() - birthDate.getMonth();
  let ageDays = currentDate.getDate() - birthDate.getDate();

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  if (ageDays < 0) {
    ageMonths--;
    let daysInPrevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    ageDays += daysInPrevMonth;
  }

  // Update the age result in HTML
  document.getElementById('years').textContent = ageYears;
  document.getElementById('months').textContent = ageMonths;
  document.getElementById('days').textContent = ageDays;
}

// Event listener for the button
document.getElementById('calculateBtn').addEventListener('click', calculateAge);
