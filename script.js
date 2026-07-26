let calc = localStorage.getItem("calc") || "";

const display = document.getElementById("display");

display.value = calc;

function Update(value){
    calc += value;
    display.value = calc;
    localStorage.setItem("calc", calc);
}

function calculate(){

    try{
        calc = eval(calc).toString();
        display.value = calc;
        localStorage.setItem("calc", calc);
    }
    catch{
        display.value = "Error";
        calc = "";
    }

}

function clearDisplay(){

    calc = "";
    display.value = "";
    localStorage.removeItem("calc");

}
