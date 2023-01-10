// setup
// pool of available letters
const alph = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const node = document.querySelector(".game_container");
const resultBox = document.querySelector(".letters_guessed");
let result = [];
let usedLetters = [];

// get number from 1 to 26
let randomIntFromInterval = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// get unique letter
let insertLetter = function () {
  if (usedLetters.length < 27) {
    const randomLetter = alph[randomIntFromInterval(1, 26) - 1];
    if (!usedLetters.includes(randomLetter)) {
      usedLetters.push(randomLetter);
    } else {
      insertLetter();
    }
    return randomLetter;
  } else {
    alert("Congrats! You remember all letters! Game over");
  }
};

function tableCreate(rows, cols) {
  const body = document.body;
  //tbl = document.createElement("table");
  let tbl = document.querySelector(".table_game");
  console.log("table ", tbl);
  //tbl.style.width = "100px";
  //tbl.style.border = "1px solid black";

  for (let i = 0; i < rows; i++) {
    const tr = tbl.insertRow();
    for (let j = 0; j < cols; j++) {
      const td = tr.insertCell();
      td.appendChild(document.createTextNode(insertLetter()));
      // td.style.border = "1px solid black";
    }
  }
  node.appendChild(tbl);
}

tableCreate(2, 2);

// select letters on buttons from 1 to 26
let letters = document.querySelectorAll(".table_game td");
letters.forEach(function (elem) {
  elem.addEventListener("click", function () {
    let letter = elem.textContent;
    elem.textContent = insertLetter();
    console.log("el ", elem.textContent);

    if (result.length > 10) {
      alert("Congrats! You won! Game over!");
      result = [];
      usedLetters = [];
    } else if (!result.includes(letter)) {
      result.push(letter);
    } else {
      alert(`Oops! ${letter} was already selected. Game over!`);
      result = [];
      usedLetters = [];
    }
    console.log("result ", result);
    resultBox.textContent = result.length;
  });
});
