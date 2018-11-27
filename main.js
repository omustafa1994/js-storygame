
// Welcome message to the user.
const playerName = prompt("Welcome adventurer! what is your name?").toUpperCase();

// Greet player and prompt to start adventure.
let startGame = prompt("Hello " + playerName + ", let's begin! Type 'start' to begin!").toUpperCase();

// Player must type start to continue. 
if (startGame === 'START') {
  beginGame();
} else {
  exit();
}

// Player lives
// todo

// Player inventory 
// todo

// Game Function 1: Choosing the path.
function beginGame() {
  let userDirection = prompt("You are walking down a long narrow road and approach a split road, there are three signs... \n * Left to the magical forest \n * Right to the treacherous volcano \n * Forward to the majestic ocean").toUpperCase();
  if (userDirection === 'LEFT') {
    alert("The magical forest.");
    beginForest();
  } else if (userDirection === 'RIGHT') {
    alert("The treacherous volcano.");
    beginVolcano();
  } else if (userDirection === 'FORWARD') {
    alert("The majestic ocean.");
    beginOcean();
  } else {
    beginGame();
  }
}

// Game Function 2: The Forest: Part 1.
function beginForest() {
  let userSpeechForest = prompt("You are in the great Deku Forest! You find the great Deku Tree and you are asked to take on the Forest Temple... \n * Yes \n * No").toUpperCase();
}

// Game Function 2: The Forest: Part 2.
function beginForest() {
  let userSpeechForest = prompt("You are in the great Deku Forest! You ").toUpperCase();
}

// Game Function 2: The Forest: Part 3.
function beginForest() {
  let userSpeechForest = prompt("You are in the great Deku Forest! You ").toUpperCase();
}

// Game Function 3: The Volcano. Part 1.
// Game Function 3: The Volcano. Part 2.
// Game Function 3: The Volcano. Part 3.

// Game Function 4: The Ocean. Part 1.
// Game Function 4: The Ocean. Part 2.
// Game Function 4: The Ocean. Part 3.

