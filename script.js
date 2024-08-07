// script.js
const form = document.querySelector('#name-form');
const userInput = document.querySelector('#user-input');
const computerResponse = document.querySelector('#computer-response');

form.addEventListener('submit', function(event) {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();
    
    // Get the value from the input field
    const name = userInput.value.trim();
    
    // Array of enemy names
    const enemies = ['Dr. Evil', 'The Joker', 'Voldemort'];

    // Check if the entered name is in the enemies array
    if (enemies.includes(name)) {
        computerResponse.textContent = 'Go away!';
    } else {
        computerResponse.textContent = `Hello, ${name}!`;
    }
});
