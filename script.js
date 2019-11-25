const btn = document.querySelector(".btn-1");
const bgColor = document.querySelector("body");
const code = document.querySelector(".hexcode");

btn.addEventListener("click", getHex);

function getHex() {
  let colorNumbers = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F"
  ];
  let hexCode = "#";

  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * colorNumbers.length);
    // console.log(random);
    hexCode += colorNumbers[random];
    // console.log(hexCode);
  }

  bgColor.style.backgroundColor = hexCode;
  code.innerHTML = hexCode;
}
