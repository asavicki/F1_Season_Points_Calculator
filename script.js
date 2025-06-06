// Grab elements from the DOM
const inputFields = [...document.querySelectorAll('.points')]; // Select all input fields with the class 'points' and covert to an array
const btn = document.querySelector('button');
const result = document.getElementById('result');

// Check if the input values are valid
const checkInput = () => {
  let isValid = true; // Initialize isValid to true

  // Clear input highlights
  inputFields.forEach(input => {
    input.classList.remove('invalid');
  });
  
  // Check each input and highlight invalid ones
  inputFields.forEach(
    input => { 
      const value = input.value.trim(); // Get the trimmed value of the input field
      const numValue = Number(value); // Convert the value to a number

      // Check if the value is empty, <10, or a number is an integer between 1 and 10
      const inputIsValid = value === '' || value === '<10' || (numValue >= 1 &&  numValue <= 10 && Number.isInteger(numValue));

      // If the input is not valid, add the 'invalid' class to highlight it
      if (!inputIsValid) {
        input.classList.add('invalid');
        isValid = false;
      }
    });

    // If any input is invalid, show an alert. Set a timeout to ensure the alert appears after the input is highlighted
    if (!isValid) {
      setTimeout(() => {
        alert('Please enter a whole number between 1 and 10, leave the field empty, or enter <10')
      }, 0);

    }

    return isValid;
}

// Calculate total points
const calculateTotalPoints = () => {
  let totalPoints = 0;

  // Loop through each input field and calculate the total points based on the finish position
  inputFields.forEach(input => {
    const numValue = Number(input.value.trim()); // Convert the input value to a number to determine the finish position
    
    const f1Points = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1]; // Points for positions 1 to 10

    if (numValue >= 1 && numValue <= 10) {
      totalPoints += f1Points[numValue - 1]; 
    } else {
      totalPoints += 0;
    }
  });

  return totalPoints;
}

// Remove highlight from input fields when it's corrected
inputFields.forEach(input => {
  input.addEventListener('input', () => {
    input.classList.remove('invalid');
    result.innerText = '';
  });
});

// Add event listener to the button
btn.addEventListener('click', (e) => {
  e.preventDefault();

  const isValid = checkInput(); // Check if all inputs are valid

  // If all inputs are valid, calculate and display the total points
  if (isValid) {
    result.innerText = calculateTotalPoints();
    // Clear all input fields after calculation
    inputFields.forEach(input => {
      input.value = '';
    });
  };

  // Scroll to the bottom of the page after calculation to see the result
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});