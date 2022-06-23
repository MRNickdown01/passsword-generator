const pwE1 = document.getElementById("pw");
const copyE1 =document.getElementById("copy");
const lenE1  =document.getElementById("len");
const upperE1 =document.getElementById("upper");
const lowerE1 =document.getElementById("lower");
const numberE1 =document.getElementById("number");
const symbolE1 =document.getElementById("symbol");
const generateE1 =document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers ="0123456789";
const symbols ="!@#$%^&*";


function getLowercase() {
    return lowerLetters[Math.floor(Math.random()*lowerLetters.length)];
}
function getUppercase() {
    return upperLetters[Math.floor(Math.random()*upperLetters.length)];
}
function getNumber() {
    return numbers[Math.floor(Math.random()*numbers.length)];
}
function getSymbol() {
    return symbols[Math.floor(Math.random()*symbols.length)];
}

function generatePassword() {
    const len = lenE1.value;

    let password = "";

    if (upperE1.checked) {
        password += getUppercase();
    }

    if (lowerE1.checked) {
        password += getLowercase();
    }

    if (numberE1.checked) {
        password += getNumber();
    }

    if (symbolE1.checked) {
        password += getSymbol();
    }

    for (let i = password.length; i<len; i++) {
        const x = generateX();
        password += x;
    }

     pwE1.innerText = password;
}
function generateX() {
    const xs =[];
    if (upperE1.checked){
        xs.push(getUppercase());
    }
    if (lowerE1.checked){
        xs.push(getLowercase());
    }
    if(numberE1.checked){
        xs.push(getNumber());
    }
    if(symbolE1.checked){
        xs.push(getSymbol());
    }
    if (xs.length === 0) return "";
    return xs[Math.floor(Math.random() * xs.length)];
}

 generateE1.addEventListener("click",generatePassword);

 copyE1.addEventListener("click", () =>{
    const textarea = document.createElement("textarea");
    const password = pwE1.innerText;

    if(!password){
        return;
    }
    textarea.value =password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("password copied to clipboard");
});
