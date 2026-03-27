let number1 = "";
let number2 = "";
let currentnumber = 1;
let operacao = "";
let resul = "";
let currentnumber = 1;
let operation = 0; // 1=adição; 2=subtração; 3=Multiplicação; 4=Divisão;



function soma() {
    operacao = "+";
    textdisplay();
    currentnumber = 2;
}
function subtracao() {
    operacao = "-";
    textdisplay();
   currentnumber = 2;
}
function multiplicacao() {
    operacao = "*";
    textdisplay();
   currentnumber = 2;
}
function divisao() {
    operacao = "/";
    textdisplay();
    currentnumber = 2;
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
textdisplay(resul)
number1 = "";
number2 = "";
}
/* function textdisplay(a){

document.getElementById("myText").innerHTML = a;
} */
function textdisplay(){

document.getElementById("myText").innerHTML = number1 + operacao + number2 ;
}
function num1(){
    if (currentnumber = 1)
    {
    number1 += 1;
    textdisplay(number1);
    }
    else
    {
    number2 += 1;
    textdisplay(); 
    }
}
function num2(){
    if (currentnumber = 1)
    {
    number1 += 2;
    textdisplay(number1);
    }
    else
    {
    number2 += 2;
    textdisplay(); 
    }
}
function num3(){
    if (currentnumber = 1)
    {
    number1 += 3;
    textdisplay(number1);
    }
    else
    {
    number2 += 3;
    textdisplay(); 
    }
}
function num4(){
    if (currentnumber = 1)
    {
    number1 += 4;
    textdisplay(number1);
    }
    else
    {
    number2 += 4;
    textdisplay(); 
    }
}
function num5(){
    if (currentnumber = 1)
    {
    number1 += 5;
    textdisplay(number1);
    }
    else
    {
    number2 += 5;
    textdisplay(); 
    }
}
function num6(){
    if (currentnumber = 1)
    {
    number1 += 6;
    textdisplay(number1);
    }
    else
    {
    number2 += 6;
    textdisplay(); 
    }
}
function num7(){
    if (currentnumber = 1)
    {
    number1 += 7;
    textdisplay(number1);
    }
    else
    {
    number2 += 7;
    textdisplay(); 
    }
}
function num8(){
    if (currentnumber = 1)
    {
    number1 += 8;
    textdisplay(number1);
    }
    else
    {
    number2 += 8;
    textdisplay(); 
    }
}
function num9(){
    if (currentnumber = 1)
    {
    number1 += 9;
    textdisplay(number1);
    }
    else
    {
    number2 += 9;
    textdisplay(); 
    }
}
function num0(){
    if (currentnumber = 1)
    {
    number1 += 0;
    textdisplay(number1);
    }
    else
    {
    number2 += 0;
    textdisplay(); 
    }
}
