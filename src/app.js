/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

const cardGenerator = () => {
  let aleatoryNumber = Math.floor(Math.random() * (12 - 1 + 1) + 1);

  let iconNumber = Math.floor(Math.random() * 4);
  let aleatoryIcon = ["♠", "♣", "♥", "♦"];
  let icon = aleatoryIcon[iconNumber];

  let icon1 = document.querySelector("#icon-1");
  icon1.innerHTML = icon;
  let icon2 = document.querySelector("#icon-2");
  icon2.innerHTML = icon;
  let number = document.querySelector("#number");
  number.innerHTML = aleatoryNumber;

  if (icon == "♦" || icon == "♥") {
    icon1.style.color = "red";
    icon2.style.color = "red";
    number.style.color = "red";
  } else {
    icon1.style.color = "black";
    icon2.style.color = "black";
    number.style.color = "black";
  }
};

let boton = document.querySelector("#btn");
boton.addEventListener("click", cardGenerator);
