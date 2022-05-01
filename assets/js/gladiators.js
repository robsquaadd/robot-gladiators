//const prompt = require("prompt-sync")({ sigint: true });

function gameplay() {
  var playerStats = gamesetup();
  fight(playerStats);
}

function gamesetup() {
  var robotName = prompt("What would you like to name your robot?");
  var playerArray = [100, 10, 10, robotName];
  window.alert("Welcome to the jungle", robotName);
  return playerArray;
}

function fight(array) {
  promptFight = prompt(
    "Youngster Joey challenges you to a battle! Will you FIGHT or Skip"
  );
  promptFightFinal = promptFight.toUpperCase();
  if (promptFightFinal === "FIGHT") {
    var opponentName = "Youngster Joey";
    var opponentHealth = Math.floor(20 * Math.random() + 40);
    var opponentArray = [opponentHealth, 12, opponentName];
    while (array[0] > 0 && opponentArray[0] > 0) {
      opponentArray[0] =
        opponentArray[0] - Math.floor(array[1] * Math.random());
      console.log(
        array[3] +
          " attacked " +
          opponentArray[2] +
          " and " +
          opponentArray[2] +
          " now has " +
          opponentArray[0] +
          " health left!"
      );
      array[0] = Math.floor(array[0] - opponentArray[1] * Math.random());
      console.log(
        opponentArray[2] +
          " attacked " +
          array[3] +
          " and " +
          array[3] +
          " now has " +
          array[0] +
          " health left!"
      );
    }
    if (array[0] <= 0) {
      var winner = opponentArray[2];
    } else if (opponentArray[0] <= 0) {
      var winner = array[3];
    }
    var winnerString = "the game is over " + winner + " is the winner!";
    window.alert(winnerString);
  } else if (promptFightFinal === "SKIP") {
    if (array[2] >= 10) {
      var confirmSkip = window.confirm("Are you sure?");
      if (confirmSkip) {
        array[2] = array[2] - 10;
        window.alert(
          "You chose to skip this fight. You now have " +
            array[2] +
            " credits left."
        );
        fight(array);
      } else {
        fight(array);
      }
    } else {
      window.alert("You do not have enough money to skip this fight.");
      fight(array);
    }
  } else {
    window.alert("That is not a valid option! Please choose fight or skip!");
    fight(array);
  }
}

//window.alert("hello world");
gameplay();
