let btnElement = document.getElementById("button");
let firstNameElement = document.getElementById("firstName");
let lastNameElement = document.getElementById("lastName");
let outputElement = document.getElementById("output");

function innerFunction() {
    let firstName = firstNameElement.value;
    let lastName = lastNameElement.value;

    return (firstName[0] + lastName[0]);
}

function outerFunction(paramFunc) {
    outputElement.textContent = paramFunc();
}

btnElement.addEventListener('click', () => {
    outerFunction(innerFunction);
});