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
    let scoreTotal = (q1 + q2 + q3 + q4 +q4);
    let precentage = (q1 + q2 + q3 + q4 +q4);

    let score = 0; 
    if (q1 === 7) {
        score+20;
    } else if (q2 === "bangtan sonyeodan") {
        score+20;
    } else if (q3 === "June 12, 2013" || q3 === "June 12 2013") {
        score+20
    } else if (q4 === "no more dream") {
        score+20;
    } else if (q5 === 462) {
        score+20
    }
}
