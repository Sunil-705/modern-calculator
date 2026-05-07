let currentDisplay = "";

const display = document.getElementById("display");

function appendValue(value){
    currentDisplay += value;
    display.value = currentDisplay;
}

function clearDisplay(){
    currentDisplay = "";
    display.value = "";
}

function deleteLast(){
    currentDisplay = currentDisplay.slice(0, -1);
    display.value = currentDisplay;
}

function calculate(){
    try{
        currentDisplay = eval(currentDisplay).toString();
        display.value = currentDisplay;
    }
    catch(error){
        display.value = "Error";
        currentDisplay = "";
    }
}