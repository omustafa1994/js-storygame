
// Welcome message to the user.
const playerName = prompt("Welcome adventurer! what is your name?").toUpperCase();

// Greet player and prompt to start adventure.
let startGame = prompt("Hello " + playerName + ", let's begin! Type 'start' to begin!").toUpperCase();

// Player inventory 
const inventory = [];
const winningCond = ["Grass stone","Fire stone","Water stone"]

// Player must type start to continue. 
if (startGame === 'START') {
  beginGame();
} else {
  exit();
}

// ***********************************************************************************************************************
// Game Function: Choosing the path.
// ***********************************************************************************************************************
function beginGame() {
  let userDirection = prompt("You are walking down a long narrow road and approach a split road, there are three signs... \n * Left to the magical forest \n * Right to the treacherous volcano \n * Straight to the majestic ocean \n *** Check inventory?").toUpperCase();
  if (userDirection === 'LEFT') {
    alert("The magical forest.");
    beginForest();
  } else if (userDirection === 'RIGHT') {
    alert("The treacherous volcano.");
    beginVolcano();
  } else if (userDirection === 'STRAIGHT') {
    alert("The majestic ocean.");
    beginOcean();
    // User can check their inventory
  } else if (userDirection === 'CHECK') {
    alert(inventory.toString());
    // How to win, collect all 3 stones
    if (inventory === "Grass stone","Fire stone","Water stone") {
      alert("YOU WIN!!!");
    } else {
      beginGame();
    }
    beginGame();
  } else {
    beginGame();
  }
}

// ***********************************************************************************************************************
// Game Function: The Forest: Part 1.
// ***********************************************************************************************************************
function beginForest() {
  let userSpeechForest = prompt("You are in the great Deku Forest! You find the great Deku Tree and you are asked to take on the Forest Temple... \n * Yes \n * No").toUpperCase();
  if (userSpeechForest === 'YES') {
    alert("You enter the grass temple.");
    beginForestTemple();
  } else {
    exit();
  }
}

// Game Function: The Forest: Part 2. 
function beginForestTemple() {
  let userSearchForest = prompt("You have entered the Forest Temple! You must navigate correctly to the end... Good luck! \n W - up \n A - left \n S - down \n D - right").toUpperCase();
  if (userSearchForest === 'W') { // first direction
    let userSearchForest = prompt("Keep going! \n W - up \n A - left \n S - down \n D - right").toUpperCase();
    if (userSearchForest === 'D') { // second direction
      let userSearchForest = prompt("Keep going! \n W - up \n A - left \n S - down \n D - right").toUpperCase();
      if (userSearchForest === 'W') { // third direction
        alert("You found the Grass stone!");
        inventory.push("Grass stone");
        beginForestEnd();
      } else {
        alert("You got lost.");
        beginForestTemple();
      }
    } else {
      alert("You got lost.");
      beginForestTemple();
    }
  } else {
    alert("You got lost.");
    beginForestTemple();
  }
}

// Game Function: The Forest: Part 3.
function beginForestEnd() {
  let userEndingForest = prompt("The great Deku Tree says thank you " + playerName + ". Would you like to be teleported to the begining? \n * Yes \n * No").toUpperCase();
  if (userEndingForest === 'YES') {
    alert("You've been teleported.");
    beginGame();
  } else {
    exit();
  }
}

// ***********************************************************************************************************************
// Game Function: The Volcano: Part 1.
// ***********************************************************************************************************************
function beginVolcano() {
  let userSpeechVolcano = prompt("You are at the great Treacherous Volcano! You find the great Goron Leader and you are asked to take on the Fire Temple... \n * Yes \n * No").toUpperCase();
  if (userSpeechVolcano === 'YES') {
    alert("You enter the fire temple.");
    beginVolcanoTemple();
  } else {
    exit();
  }
}

// Game Function: The Volcano: Part 2. 
function beginVolcanoTemple() {
  let userSearchVolcano = prompt("You have entered the Volcano Temple! You must navigate correctly to the end... Good luck! \n W - up \n A - left \n S - down \n D - right").toUpperCase();
  if (userSearchVolcano === 'W') { // first direction
    let userSearchVolcano = prompt("Keep going! \n W - up \n A - left \n S - down \n D - right").toUpperCase();
    if (userSearchVolcano === 'D') { // second direction
      let userSearchVolcano = prompt("Keep going! \n W - up \n A - left \n S - down \n D - right").toUpperCase();
      if (userSearchVolcano === 'W') { // third direction
        alert("You found the Fire stone!")
        inventory.push("Fire stone")
        beginVolcanoEnd();
      } else {
        alert("You got lost.");
        beginVolcanoTemple();
      }
    } else {
      alert("You got lost.");
      beginForestTemple();
    }
  } else {
    alert("You got lost.");
    beginForestTemple();
  }
}

// Game Function: The Volcano: Part 3.
function beginVolcanoEnd() {
  let userEndingVolcano = prompt("The great Goron Leader says thank you " + playerName + ". Would you like to be teleported to the begining? \n * Yes \n * No").toUpperCase();
  if (userEndingVolcano === 'YES') {
    alert("You've been teleported.");
    beginGame();
  } else {
    exit();
  }
}

// ***********************************************************************************************************************
// Game Function: The Ocean: Part 1.
// ***********************************************************************************************************************
function beginOcean() {
  let userSpeechOcean = prompt("You are at the great Majestic Ocean! You find the great Zora King and you are asked to take on the Water Temple... \n * Yes \n * No").toUpperCase();
  if (userSpeechOcean === 'YES') {
    alert("You enter the water temple.");
    beginOceanTemple();
  } else {
    exit();
  }
}

// Game Function: The Ocean: Part 2. 
function beginOceanTemple() {
  let userSearchOcean = prompt("You have entered the Water Temple! You must navigate correctly to the end... Good luck! \n W - up \n A - left \n S - down \n D - right").toUpperCase();
  if (userSearchOcean === 'W') { // first direction
    let userSearchOcean = prompt("Keep going! \n W - up \n A - left \n S - down \n D - right").toUpperCase();
    if (userSearchOcean === 'D') { // second direction
      let userSearchOcean = prompt("Keep going! \n W - up \n A - left \n S - down \n D - right").toUpperCase();
      if (userSearchOcean === 'W') { // third direction
        alert("You found the Water stone!")
        inventory.push("Water stone")
        beginOceanEnd();
      } else {
        alert("You got lost.");
        beginOceanTemple();
      }
    } else {
      alert("You got lost.");
      beginOceanTemple();
    }
  } else {
    alert("You got lost.");
    beginOceanTemple();
  }
}

// Game Function: The Ocean: Part 3.
function beginOceanEnd() {
  let userEndingOcean = prompt("The great Zora King says thank you " + playerName + ". Would you like to be teleported to the begining? \n * Yes \n * No").toUpperCase();
  if (userEndingOcean === 'YES') {
    alert("You've been teleported.");
    beginGame();
  } else {
    exit();
  }
}

// ***********************************************************************************************************************
// Game Function: The Finale.
// ***********************************************************************************************************************