const oppSide = document.querySelector("#oppSide");
const adjSide = document.querySelector("#adjSide");
const hypotnuseDiv = document.querySelector(".hypotnuse-output");
const checkHypotBtn = document.forms[0];

checkHypotBtn.addEventListener("submit", validateSidesInput);


function validateSidesInput(event){

    console.log("hah");
    event.preventDefault();
    if (oppSide.value === "" || adjSide.value === "") {
        displayError("Enter the valid inputs");
    } else {
        
        calculateHypotnuse();
    }
}

function calculateHypotnuse(params) {
    
   let oppSides = Number(oppSide.value);
   let adjSides = Number(adjSide.value);


   hypotnuseDiv.innerText = Math.hypot(oppSides,adjSides);
   

}



function displayError(msg) {
    hypotnuseDiv.innerText = msg;
}