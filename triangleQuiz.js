const triangleQuiz = document.forms[0];
const submitBtn = document.querySelector(".submitBtn");
const outputDiv = document.querySelector(".output");
const correctAnswer = ["Obtuse Angle Triangle","Acute Angle Triangle",
                       "Right Angle Triangle", 
                       "40", "Isosceles Triangle",
                       "Equilateral Triangle"];
submitBtn.addEventListener("click",calculateAns);



function calculateAns(params) {
    

    const triangleQuizForm = new FormData(triangleQuiz)
        
       let index = 0; 
       let score = 0;
     for(let value of triangleQuizForm.values()){
        
        if(value === correctAnswer[index]){
          score += 1;
          outputDiv.innerText = score;
        }else{
            score -= 1;
            outputDiv.innerText = score;
        }
        index += 1;

     }



}