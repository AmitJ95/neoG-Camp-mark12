const baseInput = document.querySelector("#base");
const heightInput = document.querySelector("#height");
const calculateBtn = document.querySelector("#calculatebh");
const areaOutputDiv = document.querySelector(".areaOutput");
const sideInput = document.querySelector("#side");
const calculateSideBtn = document.querySelector("#calculateSide");
const sideAreaOutputDiv = document.querySelector(".sideAreaOutput");

areaOutputDiv.style.display="none"
sideAreaOutputDiv.style.display = "none";
calculateBtn.addEventListener("click", calculateArea)

function calculateArea(params) {
    
    let  baseValue   = Number(baseInput.value);
    let  heightValue = Number(heightInput.value);
    let area = 0;

    if (baseValue <=0 || heightValue <= 0 ) {
        
        displayError("Enter the valid inputs")
    } else {
        areaOutputDiv.style.display="block"
        area = 1/2 * baseValue * heightValue;
        areaOutputDiv.innerText = area;
    }
    

}


calculateSideBtn.addEventListener("click", calculateSideArea);

function calculateSideArea(params) {
    
    let sideInputValue = Number(sideInput.value);

    if (sideInputValue <= 0 ) {
        displaySideError("Enter the valid inputs");
    } else {
        sideAreaOutputDiv.style.display="block";
        let sqroot = 0;
        let ans = 0
        sqroot = Math.sqrt(3);
        ans = (sqroot/4)*sideInputValue*sideInputValue;
        sideAreaOutputDiv.innerText = ans
    }
}

function displaySideError(msg){
    sideAreaOutputDiv.style.display="block";
    sideAreaOutputDiv.innerText = msg;
}





function displayError(msg){
    areaOutputDiv.style.display="block";
    areaOutputDiv.innerText = msg;
}

