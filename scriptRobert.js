let number1 = "";
let number2 = "";
let currentnumber = 1;
let operacao = "";
let resul = "";
let operation = 0; // 1=adição; 2=subtração; 3=Multiplicação; 4=Divisão;



function soma() {
    operacao = "+";
    textdisplay();
    currentnumber = 2;
    operation = 1;
}
function subtracao() {
    operacao = "-";
    textdisplay();
   currentnumber = 2;
   operation = 2;
}
function multiplicacao() {
    operacao = "*";
    textdisplay();
   currentnumber = 2;
   operation = 3;
}
function divisao() {
    operacao = "/";
    textdisplay();
    currentnumber = 2;
    operation = 4;
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
resul = toString(resul);
number1 = resul;
number2 = "";
currentnumber = 1;
}
/* function textdisplay(a){

document.getElementById("myText").innerHTML = a;
} */
function textdisplay(a){
    if (a != ""){
        document.getElementById("myText").innerHTML = a;
    }
}
function num1(){
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
