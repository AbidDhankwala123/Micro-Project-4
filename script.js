let displayResult = document.querySelector("#display-result");
let resetButton = document.querySelector("#reset-btn");
let deleteButton = document.querySelector("#delete-btn");
let calculateButton = document.querySelector("#calculate-btn");

let displayString = "";



function getInput(input) {
        displayString = displayString + input;
        displayResult.innerHTML = displayString;
    
}



function calculation(){
        let result = getNextNumber(displayString, 0);
        for(let i=0;i<displayString.length;i++)
        {
            if(displayString[i] == "+")
            {  
                result = result + getNextNumber(displayString, i + 1);
            }
            else if(displayString[i] == "-") {
                result = result - getNextNumber(displayString, i + 1);
            }
            else if(displayString[i] == "x") {
                result = result * getNextNumber(displayString, i + 1);
            }
            else if(displayString[i] == "/") {
                result = result / getNextNumber(displayString, i + 1);
            }
        }

        if(result.toString().includes(".")) {
            result = result.toPrecision(5);
        }
        result = result.toString();
        displayString = result;
        displayResult.innerHTML = result;
        
        
}

function getNextNumber(displayString, index) {

    let symbol = ["+","-","x","/"];
    let str = "";
    for(let i = index; i<displayString.length; i++) {
        if(symbol.includes(displayString[i])) {
            break;
        }
        str = str + displayString[i];
    }
    return parseFloat(str);
}





function resetAll(){
    displayString = 0;
    displayResult.innerHTML = displayString;
    displayString = "";
}



function deleteFirstElement(){
    displayString = displayString.substring(0,displayString.length-1);
    displayResult.innerHTML = displayString;
    if(displayResult.innerHTML == "")
    {
        displayResult.innerHTML = 0;
    }
}

resetButton.addEventListener("click",resetAll);
deleteButton.addEventListener("click",deleteFirstElement);
calculateButton.addEventListener("click",calculation);
