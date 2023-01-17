// JavaScript
// EVENT LISTENER
document.getElementById("btn").addEventListener("click", btnClicked);

// VARIABLES
let frac = document.getElementById("score");
let percentage = document.getElementById("percent");
let msg = document.getElementById("message");
let f1 = document.getElementById("feedback1");
let f2 = document.getElementById("feedback2");
let f3 = document.getElementById("feedback3");
let f4 = document.getElementById("feedback4");
let f5 = document.getElementById("feedback5");

// IF STATEMENTS
function btnClicked() {
  // VARIABLES
  let q1 = document.getElementById("qnOne").value;
  let q2 = document.getElementById("qnTwo").value.toLowerCase();
  let q3 = document.getElementById("qnThree").value.toLowerCase();
  let q4 = document.getElementById("qnFour").value.toLowerCase();
  let q5 = document.getElementById("qnFive").value;

  let scoreCounter = 0;

  if (q1 === "7" || q1 === "7 ") {
    scoreCounter++;
    f1.innerHTML = "correct";
  } else {
    f1.innerHTML = "incorrect";
  }

  if (q2 === "bangtan sonyeodan" || q2 === "bangtan sonyeodan ") {
    scoreCounter++;
    f2.innerHTML = "correct";
  } else {
    f2.innerHTML = "incorrect";
  }

  if (
    q3 === "june 12, 2013" ||
    q3 === "june 12 2013" ||
    q3 === "june 12" ||
    q3 === "june 2013" ||
    q3 === "june 12, 2013 " ||
    q3 === "june 12 2013 " ||
    q3 === "june 12 " ||
    q3 === "june 2013 "
  ) {
    scoreCounter++;
    f3.innerHTML = "correct";
  } else {
    f3.innerHTML = "incorrect";
  }

  if (q4 ==="no more dream" || q4 === "no more dream ") {
    scoreCounter++;
    f4.innerHTML = "correct";
  } else {
    f4.innerHTML = "incorrect";
  }

  if (q5 === "462" || q5 === "462 ") {
    scoreCounter++;
    f5.innerHTML = "correct";
  } else {
    f5.innerHTML = "incorrect";
  }

  frac.innerHTML = `${scoreCounter}/5`;
  percentage.innerHTML = `${(scoreCounter / 5) * 100}%`;

  if (scoreCounter >= 3) {
    msg.innerHTML = "Great work!";
  } else {
    msg.innerHTML =
      "Read the over the previous pages and give this quiz another shot!";
  }
}
