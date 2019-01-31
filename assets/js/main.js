// Variables
let userCycle = [];
let simonCycle = [];
const NUM_OF_LEVELS = 12;
let id;
let color;
let level = 0;

// Start cycle
$(document).ready(function () {
  $(".level").text("");
  $(".btn-dark").click(function () {
    if ($(this).html() === "START") {
      $(this).html("RESET");
    }
    level = 0;
    level++;
    simonCycle = [];
    userCycle = [];
    simonPattern();
  });

  //Listen to user
  $(".circle").click(function () {
    id = $(this).attr("id");
    color = $(this).attr("class").split(" ")[1];
    userPattern();
  });
});

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
  var myInterval = setInterval(function () {
    if (userCycle.length == simonCycle.length &&
      userCycle.length < NUM_OF_LEVELS) {
      level++;
      userCycle = [];
      simonPattern();
      shuffle();
    }

    //Checking for win
    if (userCycle.length === simonCycle.length) {
      $(".level").text("You Win!");
    }
    clearInterval(myInterval);
  }, 2000);
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
    $(".level-text").text("");
    $(".level").text("Oops, try again!");
    counter++;
    if (counter == 3) {
      $(".level-text").text("Level:");
      $(".level").text(level);
      clearInterval(myError);
      userCycle = [];
      counter = 0;
    }
  }, 500);
}

// Simon function
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

// Shuffles the child elements of "#container" which are the circles
function shuffle() {
  var parent = document.querySelector("#container");
  for (var i = 0; i < parent.children.length; i++) {
    parent.appendChild(parent.children[Math.random() * i | 0]);
  }
}
