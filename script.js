// script.js

// Select elements
const dice = document.getElementById('dice');
const rollBtn = document.getElementById('roll-btn');
const historyList = document.getElementById('history-list');

// Initialize roll history array
const rollHistory = [];

// Function to generate a random dice roll
function rollDice() {
    return Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
}

// Function to update the dice and history
function updateDice(roll) {
    // Add animation
    dice.classList.add('animate');

    // Wait for the animation to complete before updating
    setTimeout(() => {
        dice.classList.remove('animate');
        dice.textContent = roll;
    }, 300);

    // Update roll history
    rollHistory.push(roll);
    const historyItem = document.createElement('li');
    historyItem.textContent = `Roll ${rollHistory.length}: ${roll}`;
    historyList.appendChild(historyItem);
}

// Add event listener to the button
rollBtn.addEventListener('click', () => {
    const roll = rollDice();
    updateDice(roll);
});
