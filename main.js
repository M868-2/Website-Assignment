// JavaScript 
// EVENT LISTENER
document.getElementById("btn").addEventListener("click" , btnclicked);

// VARIABLES
let outputEl = document.getElementById("output");
let q1 = document.getElementById("qnOne");
let q2 = document.getElementById("qnTwo").toLowerCase();
let q3 = document.getElementById("qnThree").toLowerCase();
let q4 = document.getElementById("qnFour").toLowerCase();
let q5 = document.getElementById("qnFive");

// IF STATEMENTS
function btnclicked() {
    // VARIABLES
    let q1 = document.getElementById("qnOne");
    let q2 = document.getElementById("qnTwo").toLowerCase();
    let q3 = document.getElementById("qnThree").toLowerCase();
    let q4 = document.getElementById("qnFour").toLowerCase();
    let q5 = document.getElementById("qnFive");

    let scorePercent = 0; 
    if (q1 === 7) {
        scorePercent+20;
    } else if (q2 === "bangtan sonyeodan") {
        scorePercent+20;
    } else if (q3 === "June 12, 2013" || q3 === "June 12 2013") {
        scorePercent+20
    } else if (q4 === "no more dream") {
        scorePercent+20;
    } else if (q5 === 462) {
        scorePercent+20;
    }
    // let scoreTotal = (q1 + q2 + q3 + q4 +q4);
    let percentage = (q1 + q2 + q3 + q4 +q5);
    document.getElementById("percent").innerHTML = percentage;
}
