// Branching Story Project
// Run with: node script.js
//
// Your job has two parts:
//   1. Write your story in the storyNodes object below
//   2. Implement the four functions marked with TODO
//
// The console input/output is handled for you at the bottom of the file.
// You do not need to touch anything in the "do not modify" section.
//
// Read PLAN.md before starting.


// -------------------------------------------------------
// YOUR STORY DATA
//
// Fill out the storyNodes with the appropriate data.
// Keep the same structure - only the text and ids change.
//
// Scene shape:
//   id        - a unique string key, kebab-case (e.g. "dark-hallway")
//   text      - the paragraph the player reads when they arrive here
//   choices   - array of choice objects ({ text, nextId })
//   isEnding  - false for regular scenes, true for ending scenes
//
// Ending scenes also need:
//   endingTitle - a short title shown when this ending is reached
//   choices: [] - an empty array (required, not optional)
//
// Rules:
//   - Every nextId must exactly match a real scene key in this object
//   - Use kebab-case for all ids
//   - You need at least 8 scenes total and at least 2 distinct endings
// -------------------------------------------------------

const storyNodes = {
  beginning: {
    id: "beginning",
    text: "Tonight is going to be a busy night and Le Petit Cochon. Chef is gathering ingredients for his famous pommes aligot when he realizes when he realizes there are not more potatoes.",
    choices: [
      {
        text: "Chef decides to 86 his famous pommes aligot from the menu",
        nextId: "eight-six",
      },
      {
        text: "Chef decides to go to a grocery store to buy a 10lb. bag of potatoes",
        nextId: "store-run",
      },
    ],
    isEnding: false,
  },

  "eighty-six": {
    id: "eighty-six",
    choices: [
      {
        text: "The restuarant opens, guests flow through the doors excitedly to enjoy their meal. They were disappointed to hear that the Chef's famous pommes aligot is not available, but they enjoyed their meal nonetheless.",
        nextId: "great-night",
      },
    ],
    isEnding: false,
  },

  "great-night": {
    id: "great-night",
    choices: [
      {
        text: "Chef makes sure to have potatoes ready for dinner service.  He prepares a batch of his famous pommes aligot",
        nextId: "ending-one",
      },
    ],
    isEnding: false,
  },

  "store-run": {
    id: "store-run",
    choices: [
      {
        text: "Chef walked to the grocery store and returned to his restaurant in under 10 minutes carrying a large bag of potatoes. When he arrived to the service entrance Chef realized he was locked out of his restaurant",
        nextID: "locked-out"
      },
    ],
    isEnding: false
  },

  "locked-out": {
    id: "locked-out",
    choices: [
      {
        text: "Chef contemplates what to do.  He thinks that someone will notice he is missing and will come look for him",
        nextId: "stays-n-waits",
      },
      {
        text: "Chef contrmplates what to do.  He doesn't know when someone will come through the door again.  He springs into actiction, throw the bag of potatoes over his shoulder and looks for another way in",
        nextID: "new-entrance"
      },
    ],
    isEnding: false,
  },

  "stays-n-waits": {
    id: "stays-n-waits",
    choices: [
      {
        text: "Chef waited for 3 hours before someone came to open the door.",
        nextID: "ending-two"
      },
    ],
    isEnding: false
  },

  "new-entrance": {
    id: "new-entrance",
    choices: [
      {
        text: "Chef walks around thebuilding and finds an entrance into the building he never knew was there.",
        nextID: "ending-three"
      },
    ],
    isEnding: false
  },
  "ending-one": {
    id: "ending-one",
    choices: [
      {
        text: "Chef prepares his famous pommes aligot for the evenings service.  A food critic from the Times comes in ans orders the potatoes.  He wrote great reviews about the restaurant the next day.",
        endingTitle: "perfect-weekend"
      },
    ],
    isEnding: true,
  },
  "ending-two": {
    id: "ending-two",
    choices: [
      {
        text: "The kitchen was in disarray.  The staff waited for the Chef for as long as they could.  They began service without him.  Some guests waitied a long time for their food and other walked out.  Many left hungry and disappointed.  A few left bad yelp reviews.",
        endingTitle: "terrible-weekend"
      },
    ],
    isEnding: true,
  },
  "ending-three": {
    id: "ending-three",
    choices: [
      {
        text: "Chef re-eneter the kitchen, triumphant. The cooks begin to prep the potatoes while cehf gets the other ingredients.  The pomme alogot is finished just in time.  A food critic from the Times comes, orders them and loves them.  they write a wonderful review give chef, his restaurant and staff a 5 star rating.",
        endingTitle: "triumpahnt-weekend"
      },
    ],
    isEnding: true,
  }
};


// -------------------------------------------------------
// GAME STATE
// These variables are used by your functions below.
// Do not rename them - the game loop at the bottom depends on them.
// -------------------------------------------------------

let currentSceneId = "start";
const visitedScenes = [];


// -------------------------------------------------------
// YOUR FUNCTIONS
// Implement each function using the TODO comments as a guide.
// None of these functions should ask for input or deal with readline.
// They only read data, update state, and log to the console.
// -------------------------------------------------------


// getCurrentScene(sceneId)
// Returns the scene object for the given id.
function getCurrentScene(sceneId) {
  // TODO: Return the scene from storyNodes using sceneId as the key
  
}


// displayScene(sceneId)
// Logs the scene text and numbered choices to the console.
// For endings, logs the endingTitle instead of choices.
// Do not call any input functions here - the game loop handles that.
function displayScene(sceneId) {
  // TODO: Get the scene using getCurrentScene(sceneId)

  // TODO: Print a divider so turns are easy to read

  // TODO: Print the scene text using console.log

  // TODO: Check scene.isEnding
  //   If true:  print "-- " + scene.endingTitle + " --"
  //   If false: loop through scene.choices and print each one numbered from 1
  //             Example output:
  //               1. Enter the door
  //               2. Walk away
}


// makeChoice(sceneId, choiceNumber)
// Handles a player selecting one of the numbered choices.
// Returns the nextId of the chosen scene.
function makeChoice(sceneId, choiceNumber) {
  // TODO: Get the scene using getCurrentScene(sceneId)

  // TODO: Get the selected choice using scene.choices[choiceNumber - 1]
  //   (choiceNumber is 1-based but arrays are 0-based)

  // TODO: Push sceneId into visitedScenes to track where the player has been

  // TODO: Return selectedChoice.nextId
}


// restartGame()
// Resets all state back to the beginning.
// Do not call displayScene here - the game loop handles that after restart.
function restartGame() {
  // TODO: Set currentSceneId back to "start"

  // TODO: Clear visitedScenes by setting visitedScenes.length = 0
}


// -------------------------------------------------------
// GAME LOOP - DO NOT MODIFY
// This section handles all console input and output.
// It calls your functions above to run the game.
// -------------------------------------------------------

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function runGame() {
  displayScene(currentSceneId);

  const scene = getCurrentScene(currentSceneId);

  if (scene.isEnding) {
    askAfterEnding();
  } else {
    const quitNumber = scene.choices.length + 1;
    console.log(quitNumber + ". Quit");
    askForInput();
  }
}

function askForInput() {
  rl.question("\nEnter your choice: ", function(answer) {
    const choiceNumber = parseInt(answer);
    const scene = getCurrentScene(currentSceneId);
    const quitNumber = scene.choices.length + 1;

    if (isNaN(choiceNumber) || choiceNumber < 1 || choiceNumber > quitNumber) {
      console.log("Please enter a number between 1 and " + quitNumber + ".");
      askForInput();
      return;
    }

    if (choiceNumber === quitNumber) {
      console.log("\nGoodbye.");
      rl.close();
      process.exit(0);
    }

    currentSceneId = makeChoice(currentSceneId, choiceNumber);
    runGame();
  });
}

function askAfterEnding() {
  console.log("\n1. Play Again");
  console.log("2. Quit");

  rl.question("\nEnter your choice: ", function(answer) {
    const choiceNumber = parseInt(answer);

    if (choiceNumber === 1) {
      restartGame();
      runGame();
      return;
    }

    if (choiceNumber === 2) {
      console.log("\nThanks for playing.");
      rl.close();
      process.exit(0);
    }

    console.log("Please enter 1 or 2.");
    askAfterEnding();
  });
}

runGame();
