// Variables
let userCycle = [];
let simonCycle = [];
const NUM_OF_LEVELS = 12;
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
    userPattern();
  });
})

//Checking user pattern
function userPattern() {
  userCycle.push(id);
  addClassCycle(id, color);
  checkUserCycle();
  if (!checkUserCycle()) {
    displayError();
    userCycle = [];
  }

  //End of cycle
  if (userCycle.length == simonCycle.length && userCycle.length < NUM_OF_LEVELS) {
    level++;
    userCycle = [];
    simonPattern();
  }
  //Checking for win
  if (userCycle.length == simonCycle.length) {
    $(".level").text("You Win!");
  }
}
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
  $(".level").text(level);
  getRandomNumber();
  var i = 0;
  var myInterval = setInterval(function () {
    id = simonCycle[i];
    color = $("#" + id).attr("class");
    color = color.split(" ")[1];
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
  simonCycle.push(random);
}

// Add temporary class to circle
function addClassCycle(id, color) {
  $("#" + id).addClass(color + "-active");
  setTimeout(function () {
    $("#" + id).removeClass(color + "-active");
  }, 500);
}