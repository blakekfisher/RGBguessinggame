// Notes: Most of the commented code is code that worked fine but was refactored to make DRY code


//Variables
var numSquares = 6;
// var colors = generateRandomColors(numSquares);
var colors = [];
// var pickedColor = pickColor();
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector(".colorDisplay");
var message = document.querySelector(".message");
var h1 = document.querySelector("h1");
var newColorsButton = document.querySelector(".newColors")
var modeButtons = document.querySelectorAll(".mode");

//Start the game
init();
function init() {
  //mode nuttons event listeners
  setUpModeButtons();
  setUpSquares();
  reset();
}

// set up event listeners on the buttons
function setUpModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      // this.textContent  ==== "easy" ? numSquares = 3 : numSquares = 6;
      if (this.textContent === "EASY") {
        numSquares = 3;
      } else {
        numSquares = 6;
      }
      reset();
    });
  }
}

//set up the squares
function setUpSquares() {
  for(var i = 0; i < squares.length; i++) {
    // add colors to square from array
    // squares[i].style.backgroundColor = colors[i];

    //add event listener to each squares
    squares[i].addEventListener("click", function() {

      // grab color or click squares
      var clickedColor = this.style.backgroundColor;
      // console.log(clickedColor, pickedColor);
      if (clickedColor === pickedColor) {
        message.textContent = "Correct";
        newColorsButton.textContent = "PLAY AGAIN?"
        changedColors(clickedColor);
      } else {
        this.style.backgroundColor = "#232323";
        message.textContent = "Try Again";
      }
    });
  }
}

//reset the game
function reset() {
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change the displayed color to match the new color
  colorDisplay.textContent = pickedColor;
  newColorsButton.textContent = "New Colors";
  message.textContent = "";
  //change the square colors
  for(var i = 0; i < squares.length; i++) {
    // add colors to square from array
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  } h1.style.backgroundColor = "steelblue";
}

//THIS IS REFACTORED CODE ********************************
//Add picked colol rgb value to the h1
// colorDisplay.textContent = pickedColor;

//ADD COLORS TO SQIARES


// BUTTON EVENT LISTENERS

// easy button
// easy.addEventListener("click", function() {
//   easy.classList.add("selected");
//   hard.classList.remove("selected");
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (var i = 0; i < squares.length; i++) {
//     if (colors[i]) {
//       squares[i].style.backgroundColor = colors[i];
//     } else {
//       squares[i].style.display = "none";
//     }
//   }
// });

// hard button
// hard.addEventListener("click", function() {
//   hard.classList.add("selected");
//   easy.classList.remove("selected");
//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (var i = 0; i < squares.length; i++) {
//       squares[i].style.backgroundColor = colors[i];
//       squares[i].style.display = "block";
//   }
// });

//********************************************************

//new colors buttonClick
newColorsButton.addEventListener("click", function() {
  reset();
});

  //REFACTORED IN THE RESET FUNCTION

  // newColorsButton.classList.add("buttonClick");
  // //generate new random colors
  // colors = generateRandomColors(numSquares);
  // //pick a new random color from array
  // pickedColor = pickColor();
  // //change the displayed color to match the new color
  // colorDisplay.textContent = pickedColor;
  // this.textContent = "New Colors";
  // message.textContent = "";
  // //change the square colors
  // for(var i = 0; i < squares.length; i++) {
  //   // add colors to square from array
  //   squares[i].style.backgroundColor = colors[i];
  // }
//*******************************************************************

//changes the color of all the squares and the h1 when correct
function changedColors(color) {
  //loop through all squares
  //change each color to match the correct color
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  } h1.style.backgroundColor = color;
}

//randomly pick a color
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

//generate random colors
function generateRandomColors(num) {
  //make and array
  var arr = [];
  //a num random colors to array
  for (var i = 0; i < num; i++) {
    //get random color and add to array
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor() {
  //pick a 'red' from 0 - 255
  var r = Math.floor(Math.random() * 256)
  //pick a 'green' from 0 - 255
  var g = Math.floor(Math.random() * 256)
  //pick a 'blue' from 0 - 255
  var b = Math.floor(Math.random() * 256)
  return "rgb(" + r + ", " + g + ", " + b + ")"
}
