let counterElement = document.getElementById("counterValue");

let localValue = JSON.parse(localStorage.getItem("counterElementValue"));
if (localValue !== null) {
    counterElement.textContent = localValue;
}

function onIncrement() {
    let previousCounterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) + 1;
    counterElement.textContent = updatedCounterValue;

    if (updatedCounterValue > 0) {
        counterElement.style.color = "blue";
    } else if (updatedCounterValue < 0) {
        counterElement.style.color = "red";
    } else {
        counterElement.style.color = "black";
    }
    localStorage.setItem("counterElementValue", JSON.stringify(updatedCounterValue));

}

function onDecrement() {
    let previousCounterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) - 1;
    counterElement.textContent = updatedCounterValue;
    if (updatedCounterValue > 0) {
        counterElement.style.color = "blue";
    } else if (updatedCounterValue < 0) {
        counterElement.style.color = "red";
    } else {
        counterElement.style.color = "black";
    }
    localStorage.setItem("counterElementValue", JSON.stringify(updatedCounterValue));
}

function onReset() {
    counterElement.textContent = 0;
    counterElement.style.color = "black";
    localStorage.setItem("counterElementValue", JSON.stringify(0));
}






let counterElement2 = document.getElementById("counterValue2");

function onIncrement2() {
    let previousCounterValue = counterElement2.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) + 1;
    counterElement2.textContent = updatedCounterValue;

    if (updatedCounterValue > 0) {
        counterElement2.style.color = "blue";
    } else if (updatedCounterValue < 0) {
        counterElement2.style.color = "red";
    } else {
        counterElement2.style.color = "black";
    }

}

function onDecrement2() {
    let previousCounterValue = counterElement2.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) - 1;
    counterElement2.textContent = updatedCounterValue;
    if (updatedCounterValue > 0) {
        counterElement2.style.color = "blue";
    } else if (updatedCounterValue < 0) {
        counterElement2.style.color = "red";
    } else {
        counterElement2.style.color = "black";
    }
}

function onReset2() {
    counterElement2.textContent = 0;
    counterElement2.style.color = "black";
}