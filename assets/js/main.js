// Variables
userCycle = [];
simonCycle = [];
const NUM_OF_LEVELS = 3;
var id, color, level = 0;

// Start cycle
$(document).ready(function () {
  $(".level").text("");
  $(".btn-success").click(function () {
    level = 0;
    level++;
    simonCycle = [];
    userCycle = [];
    simonPattern();
  })
  //Listen to user
  $(".circle").click(function () {
    id = $(this).attr("id");
    color = $(this).attr("class").split(" ")[1];
    userCycle.push(id);
    addClassCycle(id, color);
    //Checking User Cycle
    if (checkUserCycle()) {
      displayError();
      userCycle();
      simonPattern();
    }
    //End of cycle
    if (userCycle.length == simonCycle.length && userCycle.length < NUM_OF_LEVELS) {
      level++;
      userCycle = [];
      simonPattern();
    }
    //Checking for wins
    if (userCycle.length == simonCycle.length) {
      $(".level").text("You Win!");
    }
  })
})

//Checking if user cycle against simon cycle
function checkUserCycle() {
  for (var i = 0; i < userCycle.length; i++) {
    if (userCycle[i] != simonCycle[i]) {
      return false;
    }
  }
  return true;
}

//Displaying an error message
function displayError() {
  console.log("Fail");
  var counter = [0];
  var myError = setInterval(function () {
    $(".level").text("Fail");
    counter++;
    if (counter == 3) {
      $(".level").text(level);
      clearInterval(myError);
      userCycle = [];
      counter = 0;
    }
  }, 500);
}

// Simon cycle 
function simonPattern() {
  console.log("level " + level);
  $(".level").text(level);
  if (!displayError) {
    getRandomNumber();
  }
  var i = 0;
  var myInterval = setInterval(function () {
    id = simonCycle[i];
    color = $("#" + id).attr("class");
    color = color.split(" ")[1];
    console.log(id + " " + color);
    addClassCycle(id, color);
    i++;
    if (i == simonCycle.length) {
      clearInterval(myInterval);
    }
  }, 1000);
}

// Create random cycle
function getRandomNumber() {
  var random = Math.floor(Math.random() * 9);
  simonPattern.push(random);
}

// Add temporary class to circle
function addClassCycle(id, color) {
  $("#" + id).addClass(color + "-active");
  setTimeout(function () {
    $("#" + id).removeClass(color + "-active");
  }, 500);
}