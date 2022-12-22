var alph = [
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
var rndInt;

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
var rndInt = randomIntFromInterval(1, 26);
var count = 0;
while (count < 3) {
  addEventListener("load", function () {
    rndInt = randomIntFromInterval(0, 25);
  });
  count++;
}
