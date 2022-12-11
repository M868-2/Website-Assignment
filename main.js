// JavaScript
// EVENT LISTENER
document.getElementById("btn").addEventListener("click", btnClicked);

// VARIABLES
let frac = document.getElementById("score");
let percentage = document.getElementById("percent");

// IF STATEMENTS
function btnClicked() {
  // VARIABLES
  let q1 = document.getElementById("qnOne").value;
  let q2 = document.getElementById("qnTwo").value.toLowerCase();
  let q3 = document.getElementById("qnThree").value.toLowerCase();
  let q4 = document.getElementById("qnFour").value.toLowerCase();
  let q5 = document.getElementById("qnFive").value;

  let scoreCounter = 0;

  if (q1 === 7) {
    scoreCounter ++;
  } else {
    q1.classList.add("active");
  }
  
  if (q2 === "bangtan sonyeodan") {
    scoreCounter ++;
  } else {
    q2.classList.add("active");
  }

  if (q3 === "june 12, 2013" || q3 === "june 12 2013" || q3 === "june 12" || q3 === "june 2013") {
    scoreCounter ++;
  } else {
    q3.classList.add("active");
  }

  if (q4 === "no more dream") {
    scoreCounter ++;
  } else {
    q4.classList.add("active");
  }

  if (q5 === 462) {
    scoreCounter ++;
  } else {
    q5.classList.add("active");
  }

  score.innerHTML = `${scoreCounter}/5`;
  percentage.innerHTML = `${scoreCounter /5 * 100}`;
}
