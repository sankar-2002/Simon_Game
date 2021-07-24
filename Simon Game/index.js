var userClickedPattern = []; //user choosen colour...
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = []; //has random choosen colours
var level = 0;

function nextSequence() {
  userClickedPattern = [];

  level++;
  $("h1").text("Level " + level);


  var randomNumber = Math.random();
  randomNumber = Math.floor((randomNumber * 4) + 1);
  randomNumber = randomNumber - 1;
  // console.log(randomNumber);

  var randomChoosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChoosenColour);

  // var check = $("#" + randomChoosenColour);
  // console.log(check);

  $("#" + randomChoosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100); //for the flash effect

  switch (randomChoosenColour) {
    case "green":
      var audio1 = new Audio('sounds/green.mp3');
      audio1.play();
      break;

    case "red":
      var audio2 = new Audio('sounds/red.mp3');
      audio2.play();
      break;

    case "yellow":
      var audio3 = new Audio('sounds/yellow.mp3');
      audio3.play();
      break;

    case "blue":
      var audio4 = new Audio('sounds/blue.mp3');
      audio4.play();
      break;

    default:
      var audio5 = new Audio('sounds/wrong.mp3');
      audio5.play();
      break;

  }




}

$(".btn").click(function() {
  var userChoosenColour = $(this).attr("id"); //here this is the keyword which refers to the object that triggered the click..
  userClickedPattern.push(userChoosenColour);
  // console.log(userClickedPattern);
  playSound(userChoosenColour); //this will play the sound when user clicks on the button..
  animatePress(userChoosenColour);
  checkAnswer((userClickedPattern.length) - 1);
})

function playSound(name) {

  switch (name) {
    case "green":
      var audio1 = new Audio('sounds/green.mp3');
      audio1.play();
      break;

    case "red":
      var audio2 = new Audio('sounds/red.mp3');
      audio2.play();
      break;

    case "yellow":
      var audio3 = new Audio('sounds/yellow.mp3');
      audio3.play();
      break;

    case "blue":
      var audio4 = new Audio('sounds/blue.mp3');
      audio4.play();
      break;

    default:
      var audio5 = new Audio('sounds/wrong.mp3');
      audio5.play();
      break;

  }
}

function animatePress(currentColour) {
  var activeButton = document.querySelector("." + currentColour);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}

$("body").keypress(function(sankar) {
  console.log(sankar.key);
  var started = false;
  // if(started === false) {
  //   nextSequence();
  //   started = true;
  // }

  if (!started) {
    $("h1").text("Level " + level);
    nextSequence();
    started = true;
  }

})

function checkAnswer(currentLevel) {

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("Success");
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000)
    }
  } else {
    console.log("Failed");
    var audio6 = new Audio('sounds/wrong.mp3');
    audio6.play();

    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    $("h1").text("Game Over Press Any Key To Restart !!");

    startOver();


  }
}

function startOver() {
   level = 0;
   userClickedPattern = []; //user choosen colour...
   buttonColours = ["red", "blue", "green", "yellow"];
   gamePattern = []; //has random choosen colours
}
