const firstNum = document.querySelector("#firstNum");
const secNum = document.querySelector("#secNum");
const thirdNum = document.querySelector("#thirdNum");
const submitBtn = document.forms[0];
const outputDiv = document.querySelector(".output");

submitBtn.addEventListener("submit", validateInput);



function validateInput(event) {

    event.preventDefault();

    if (firstNum.value === "" || secNum.value === "" || thirdNum.value === "" ) {
        
        displayError("Enter the valid inputs");
    }
    else{
        createTriangle();
    }   
}

function createTriangle(params) {

    let firstAngle = Number(firstNum.value);
    let secAngle =   Number(secNum.value);
    let thirdAngle = Number(thirdNum.value);
    let sum = 0;

    // validateInput(firstNum.value,secNum.value,thirdNum.value)

     
    
    sum = firstAngle + secAngle + thirdAngle;

    if (sum === 180) {
        
        outputDiv.innerText = "These angles can make a triangle 😁"


    } else {
        outputDiv.innerText = "These angles cannot make a triangle ☹️"
    }


}




function displayError(msg) {
    outputDiv.innerText = msg;
}