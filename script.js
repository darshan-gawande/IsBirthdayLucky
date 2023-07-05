const birthDate = document.querySelector("#birth-date");
const luckyNumber = document.querySelector("#lucky-number");
const submitButton = document.querySelector("#submit");
const message = document.querySelector("#result");

submitButton.addEventListener("click", () => {
    const dobWithoutHiphen = birthDate.value.replaceAll("-","");
    let sum = 0;
    for( let i = 0; i < dobWithoutHiphen.length; i++){
       sum = sum +  Number(dobWithoutHiphen[i]);
    }
    
    if(sum % (luckyNumber.value) === 0) {
        message.innerText = "Yaay🎊, You are lucky🎉";
    } else {
        message.innerText = "Sorry, You are not lucky😔";
    }
    if((birthDate.value)=== '') {
        message.innerText = " Please enter date of birth";
    } else if (luckyNumber.value === "") {
        message.innerText = "Please enter lucky number";
    }
});
