let number1 = "";
let number2 = "";
let currentnumber = 1;
let resul = "";
let operation = 0; // 1=adição; 2=subtração; 3=Multiplicação; 4=Divisão;
let number2resetter = 0;



function soma() {
    if (currentnumber == 1)
    {
    textdisplay("+");
    currentnumber = 2;
    operation = 1;
    }
}
function subtracao() {
    if (currentnumber == 1)
    {
    textdisplay("-");
    currentnumber = 2;
    operation = 2;
    }
}
function multiplicacao() {
    if (currentnumber == 1)
    {
    textdisplay("*");
    currentnumber = 2;
    operation = 3;
    }
}
function divisao() {
    if (currentnumber == 1)
    {
    textdisplay("/");
    currentnumber = 2;
    operation = 4;
    }
}

function enter() {
number1 = parseFloat(number1);
number2 = parseFloat(number2);
switch(operation){
    case 1:
    resul = number1 + number2;
    break;
    case 2:
    resul = number1 - number2;
    break;
    case 3:
    resul = number1 * number2;
    break;
    case 4:
    resul = number1 / number2;
    break;
    default:
    resul = "Error";
    break;
}
textdisplay(resul);
number1 = resul;
number1 = number1.toString();
textdisplay(number1);
currentnumber = 1;
number2resetter = 1;
}
function textdisplay(a){
    if (a != ""){
        document.getElementById("myText").innerHTML = a;
    }
}
function num1(){
    if (number2resetter == 1)
    {
        number2resetter = 0;
        number2 = "";
    }
    if (currentnumber == 1)
    {
    number1 += 1;
    textdisplay(number1);
    }
    else
    {
    number2 += 1;
    textdisplay(number2); 
    }
}
function num2(){
    if (number2resetter == 1)
    {
        number2resetter = 0;
        number2 = "";
    }
    if (currentnumber == 1)
    {
    number1 += 2;
    textdisplay(number1);
    }
    else
    {
    number2 += 2;
    textdisplay(number2); 
    }
}
function num3(){
    if (number2resetter == 1)
    {
        number2resetter = 0;
        number2 = "";
    }
    if (currentnumber == 1)
    {
    number1 += 3;
    textdisplay(number1);
    }
    else
    {
    number2 += 3;
    textdisplay(number2); 
    }
}
function num4(){
    if (number2resetter == 1)
    {
        number2resetter = 0;
        number2 = "";
    }
    if (currentnumber == 1)
    {
    number1 += 4;
    textdisplay(number1);
    }
    else
    {
    number2 += 4;
    textdisplay(number2); 
    }
}
function num5(){
    if (number2resetter == 1)
    {
        number2resetter = 0;
        number2 = "";
    }
    if (currentnumber == 1)
    {
    number1 += 5;
    textdisplay(number1);
    }
    else
    {
    number2 += 5;
    textdisplay(number2); 
    }
}
function num6(){
    if (number2resetter == 1)
    {
        number2resetter = 0;
        number2 = "";
    }
    if (currentnumber == 1)
    {
    number1 += 6;
    textdisplay(number1);
    }
    else
    {
    number2 += 6;
    textdisplay(number2); 
    }
}
function num7(){
    if (number2resetter == 1)
    {
        number2resetter = 0;
        number2 = "";
    }
    if (currentnumber == 1)
    {
    number1 += 7;
    textdisplay(number1);
    }
    else
    {
    number2 += 7;
    textdisplay(number2); 
    }
}
function num8(){
    if (number2resetter == 1)
    {
        number2resetter = 0;
        number2 = "";
    }
    if (currentnumber == 1)
    {
    number1 += 8;
    textdisplay(number1);
    }
    else
    {
    number2 += 8;
    textdisplay(number2); 
    }
}
function num9(){
    if (number2resetter == 1)
    {
        number2resetter = 0;
        number2 = "";
    }
    if (currentnumber == 1)
    {
    number1 += 9;
    textdisplay(number1);
    }
    else
    {
    number2 += 9;
    textdisplay(number2); 
    }
}
function num0(){
    if (number2resetter == 1)
    {
        number2resetter = 0;
        number2 = "";
    }
    if (currentnumber == 1)
    {
    number1 += 0;
    textdisplay(number1);
    }
    else
    {
    number2 += 0;
    textdisplay(number2); 
    }
}
function dot(){
    if (currentnumber == 1)
    {
    number1 += ".";
    textdisplay(number1);
    }
    else
    {
    number2 += ".";
    textdisplay(); 
    }
}
