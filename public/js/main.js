roundSelect = document.querySelector("#roundSelect");
roundSelectContainer = document.querySelector("#roundSelectContainer");

errorMessagePara = document.querySelector("#errorMessagePara");

// Popup Section
popup = document.querySelector("#popup");
console.log(popup);
closeBtn = document.querySelector("#closeBtn");

playButton = document.querySelector("#playButton");
nextRoundBtn = document.querySelector("#nextRoundBtn");
initBtn = document.querySelector("#initBtn");

gameControls = document.querySelectorAll(".gameControls");
userControls = document.querySelectorAll(".userControls");
computerControls = document.querySelectorAll(".computerControls");

roundID = document.querySelector("#roundID");
roundsSpan = roundID.querySelector("span");
countDown = document.querySelector("#countDown");

userScore = document.querySelector("#countDown");
userFireWork = document.querySelector("#countDown");

computerScore = document.querySelector("#computerScore");
computerFireWork = document.querySelector("#computerFireWork");

function openPopup() {
  //   popup.classList.remove("hidden");
  removeClasses([popup], ["hidden"]);
}

function closePopup() {
  //   popup.classList.add("hidden");
  addClasses([popup], ["hidden"]);
}

/** Middleware Function Start */
function addClasses(elements, classes) {
  elements.forEach((element) => {
    classes.forEach((classs) => {
      element.classList.add(classs);
    });
  });
}
function removeClasses(elements, classes) {
  elements.forEach((element) => {
    classes.forEach((classs) => {
      element.classList.remove(classs);
    });
  });
}
/** Middleware Function End */
