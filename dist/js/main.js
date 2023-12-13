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
console.log(countDown.innerText);

userScore = document.querySelector("#userScore");
userFireWork = document.querySelector("#userFireWork");

computerScore = document.querySelector("#computerScore");
computerFireWork = document.querySelector("#computerFireWork");

isGameStarted = false;
numberOfRounds = undefined;

currentRound = undefined;

LONG_DELAY = 1300;
DELAY = 1000;
SHOR_DELAY = 300;

init();

function init() {
  isGameStarted = false;
  userScore.innerText = "0";
  computerScore.innerText = "0";

  show([roundSelectContainer, playButton]);
  hide([countDown, roundID, nextRoundBtn, initBtn]);

  roundSelect.value = "5";
}

function StartGame() {
  if (roundSelect.value === "") {
    displayError("Choose number of rounds above");

    return;
  }
  numberOfRounds = +roundSelect.value;
  isGameStarted = true;

  hide([roundSelectContainer, playButton]);
  show([roundID, countDown]);

  currentRound = 1;
  resetCountDown();
  triggerCountDown();
}

function nextRound() {
  hide([nextRoundBtn]);
  show([countDown]);

  resetCountDown();
  triggerCountDown();
}

function resetCountDown(params) {
  countDown.innerText = "4";
  addClasses([countDown], ["animate-[bounce_1s_ease-in-out_infinite]"]);
}

function triggerCountDown() {
  if (+countDown.innerText > 1) {
    countDown.innerText = +countDown.innerText - 1;
    setTimeout(() => {
      triggerCountDown();
    }, DELAY);
  } else {
    countDown.innerText = "Go..!!";
    removeClasses([countDown], ["animate-[bounce_1s_ease-in-out_infinite]"]);
    enable(gameControls);
  }
}

//game
function select(userinput) {
  let computerinput = Math.floor(Math.random() * 3 + 1);
  console.log({ userinput, computerinput });

  disable(gameControls, SHOR_DELAY);

  if (userinput === computerinput) {
    countDown.innerText = "Draw";
  } else if (
    (userinput === 1 && computerinput === 3) ||
    (userinput === 2 && computerinput === 1) ||
    (userinput === 3 && computerinput === 2)
  ) {
    // Win
    updateScore(userScore);
    show([userFireWork]);

    hide([userFireWork], DELAY);
  } else {
    //lost
    updateScore(computerScore);

    show([computerFireWork]);

    hide([computerFireWork], DELAY);
  }
  prepareForNextRound();
}

function prepareForNextRound() {
  if (currentRound < numberOfRounds) {
    setTimeout(() => {
      currentRound++;
      roundsSpan.innerText = currentRound;
      show([nextRoundBtn]);
    }, DELAY);
  } else {
    const userScoreValue = +this.userScore.innerText;
    const computerScoreValue = +this.computerScore.innerText;

    if (userScoreValue == computerScoreValue) {
      countDown.innerText = "Game over. It was a Draw";
    } else if (userScoreValue > computerScoreValue) {
      countDown.innerText = "Game over.You Won";
    } else {
      countDown.innerText = "You Lost";
    }

    show([initBtn])
  }
}

function updateScore(element) {
  countDown.innerText = "";
  element.innerText = +element.innerText + 1;
}

function enable(elements, delay) {
  setTimeout(
    () => {
      elements.forEach((element) => {
        element.disabled = false;
      });
    },
    delay ? delay : 0
  );
}
function disable(elements, delay) {
  setTimeout(
    () => {
      elements.forEach((element) => {
        element.disabled = true;
      });
    },
    delay ? delay : 0
  );
}

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

function hide(elements, delay) {
  setTimeout(
    () => {
      elements.forEach((element) => {
        element.classList.add("hidden");
      });
    },
    delay ? delay : 0
  );
}

function show(elements) {
  elements.forEach((element) => {
    element.classList.remove("hidden");
  });
}

function displayError(msg) {
  errorMessagePara.innerText = msg;
  setTimeout(() => {
    errorMessagePara.innerText = "";
  }, LONG_DELAY);
}

/** Middleware Function End */
