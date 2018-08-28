import "./styles/style.css";

var beep1 = new Audio(
  "https://ia600503.us.archive.org/8/items/futuresoundfx-98/futuresoundfx-1.mp3"
);
var beep2 = new Audio(
  "https://ia800503.us.archive.org/8/items/futuresoundfx-98/futuresoundfx-13.mp3"
);
var beep3 = new Audio(
  "https://ia600503.us.archive.org/8/items/futuresoundfx-98/futuresoundfx-16.mp3"
);
var beep4 = new Audio(
  "https://ia800503.us.archive.org/8/items/futuresoundfx-98/futuresoundfx-14.mp3"
);
const boxes = document.querySelectorAll(".wrapper__box");
const count = document.querySelector(".wrapper__count");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".modal__close-btn");
const text = document.querySelector(".modal__text");
const resButton = document.getElementById("reset");
const wrapper = document.querySelector(".wrapper");

var commandArr = [];
var idx = 0;
var countNumber = 0;

closeModalBtn.addEventListener("click", closeDirections);

boxes.forEach(el => {
  el.addEventListener("click", huClick);
});

resButton.addEventListener("click", reset);

function reset() {
  idx = 0;
  commandArr = [];
  countNumber = 0;
  count.textContent = "Count: " + countNumber;
  setTimeout(function() {
    genCommand();
  }, 750);
}

function genCommand() {
  let num = Math.floor(Math.random() * Math.floor(4));
  num = num.toString();
  commandArr.push(num);
  for (var i = 0; i < commandArr.length; i++) {
    (function(i) {
      setTimeout(function() {
        boxPress(commandArr[i]);
      }, 750 * i);
    })(i);
  }
}

function huClick(el) {
  var id = el.target.id;
  boxPress(id);
  checkClick(id);
}

function boxPress(id) {
  var box = document.getElementById(id);
  switch (id) {
    case "0":
      box.classList.add("color1");
      beep1.currentTime = 0;
      beep1.play();
      break;
    case "1":
      box.classList.add("color2");
      beep2.currentTime = 0;
      beep2.play();
      break;
    case "2":
      box.classList.add("color3");
      beep3.currentTime = 0;
      beep3.play();
      break;
    case "3":
      box.classList.add("color4");
      beep4.currentTime = 0;
      beep4.play();
      break;
  }
  setTimeout(function() {
    box.classList.remove("color1");
    box.classList.remove("color2");
    box.classList.remove("color3");
    box.classList.remove("color4");
  }, 650);
}

function checkClick(clicked) {
  if (clicked != commandArr[idx]) {
    alert("lose");
  } else if (idx == commandArr.length - 1) {
    idx = 0;
    countNumber += 1;
    if (countNumber == 20) {
      alert("win");
    } else {
      count.textContent = "Count: " + countNumber.toString();
      wrapper.classList.add("wrapper--success");
      setTimeout(function() {
        wrapper.classList.remove("wrapper--success");
      }, 800);
      setTimeout(function() {
        genCommand();
      }, 1200);
    }
  } else {
    idx += 1;
  }
}

function alert(winOrLose) {
  // text.innerHTML = "";
  if (winOrLose == "win") {
    text.innerHTML = "<h1>Winner! &#128077;</h1>";
  } else {
    text.innerHTML = "<h1>Loser! &#128078;</h1>";
  }
  modal.classList.add("modal--is-visible");
  closeBtn.addEventListener("click", closeAlert);
}

function closeDirections() {
  modal.classList.remove("modal--is-visible");
  reset();
}
