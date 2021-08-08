const baseInput = document.querySelector("#base");
const heightInput = document.querySelector("#height");
const calculateBtn = document.querySelector("#calculate");
const areaOutputDiv = document.querySelector(".areaOutput");

calculateBtn.addEventListener("click", calculateArea)

function calculateArea(params) {
    
    let  baseValue   = Number(baseInput.value);
    let  heightValue = Number(heightInput.value);

    let area = 0;

    area = 1/2 * baseValue * heightValue;
    areaOutputDiv.innerText = area;

}