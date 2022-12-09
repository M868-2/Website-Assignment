// JavaScript
// EVENT LISTENER
document.getElementById("btn").addEventListener("click", btnClicked);

// IF STATEMENTS
function btnClicked() {
  // VARIABLES
  let q1 = document.getElementById("qnOne");
  let q2 = document.getElementById("qnTwo").toLowerCase();
  let q3 = document.getElementById("qnThree").toLowerCase();
  let q4 = document.getElementById("qnFour").toLowerCase();
  let q5 = document.getElementById("qnFive");

  let scorePercent = 0;
  let scoreFrac = 0;
  if (q1 === 7) {
    scorePercent + 20;
    scoreFrac++;
  } else {
  }
  if (q2 === "bangtan sonyeodan") {
    scorePercent + 20;
    scoreFrac++;
  } else if (q3 === "June 12, 2013" || q3 === "June 12 2013") {
    scorePercent + 20;
    scoreFrac++;
  } else if (q4 === "no more dream") {
    scorePercent + 20;
    scoreFrac++;
  } else if (q5 === 462) {
    scorePercent + 20;
    scoreFrac++;
  }
  document.getElementById("frac").innerHTML = scoreFrac;
  document.getElementById("percent").innerHTML = percentage;
}
