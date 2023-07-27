const confirmBtn = document.querySelector('.confirmBtn')
const inputName = document.querySelector('.name')
const inputNum = document.querySelector('.number')
const inputMonths = document.querySelector('.mm')
const inputYears = document.querySelector('.yy')
const inputCvc = document.querySelector('.cvc')
const errorName = document.querySelector('.errorName')
const errorNum = document.querySelector('.errorNum')
const errorDate = document.querySelector('.errorDate')
const errorCVC = document.querySelector('.errorCVC')
const card = document.querySelector('.card')
const cardName = document.querySelector('.cardName')
const cardNum = document.querySelector('.cardNum')
const cardMonth = document.querySelector('.cardMonth')
const cardYears = document.querySelector('.cardYears')
const cardCVC = document.querySelector('.cardCVC')
const message = document.querySelector('.message')
confirmBtn.addEventListener("click", function(){
    if(inputName.value === ""){
        inputName.style.border = "1px solid hsl(0, 100%, 66%)";
        errorName.style.display = "flex";
    }else{
        cardName.textContent = inputName.value;
    }
    if(inputNum.value.match(/[0-9]/)){
        cardNum.textContent = inputNum.value
    }else{
        inputNum.style.border = "1px solid hsl(0, 100%, 66%)";
        errorNum.style.display = "flex";
    }
    if(inputMonths.value === ""){
        inputMonths.style.border = "1px solid hsl(0, 100%, 66%)";
        errorDate.style.display = "flex";
    }else{
        cardMonth.textContent = inputMonths.value
    }
    if(inputYears.value === ""){
        inputYears.style.border = "1px solid hsl(0, 100%, 66%)";
        errorDate.style.display = "flex";
    }else{
        cardYears.textContent = inputYears.value
    }
    if(inputCvc.value === ""){
        inputCvc.style.border = "1px solid hsl(0, 100%, 66%)";
        errorCVC.style.display = "flex";
    }else{
        cardCVC.textContent = inputCvc.value
    }
    if(inputName.value === "" || inputNum.value === "" || inputMonths.value === "" || inputYears.value === "" || inputCvc.value === ""){
        alert("error")
    }else{
        card.style.display = "none";
        message.style.display = "flex"
    }
})
