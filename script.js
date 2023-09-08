let displayResult = document.querySelector("#display-result");
let resetButton = document.querySelector("#reset-btn");
let deleteButton = document.querySelector("#delete-btn");
let calculateButton = document.querySelector("#calculate-btn");

let displayString = "";



function getInput(input) {
    // if(displayString.length < 6) {
        displayString = displayString + input;
        displayResult.innerHTML = displayString;
    // }
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
        result = result.toString();//this statement is for to delete a result element one by one by converting into string
        displayString = result;
        displayResult.innerHTML = result;//Refer NumberObject.html in Section 1
        // displayString = ""; //if i type 6+5=11 then if i type 2 or some other digit then it will be reset by 2 with the help of this statement
        
        
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
