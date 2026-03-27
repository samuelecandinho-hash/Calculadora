let number1 = "";
let number2 = "";
let operacao = "";
let resul = "";
currentnumber = 1;

function soma() {
    operacao = "+";
    textdisplay();
    resul = number1 + number2;
}
function subtracao() {
     operacao = "-";
    textdisplay();
    resul = number1 - number2;
}
function multiplicacao() {
     operacao = "*";
    textdisplay();
    resul = number1 * number2;
}
function divisao() {
    operacao = "/";
    textdisplay();
    resul = number1 / number2;

}

function enter() {

}
function textdisplay(){

document.getElementById("myText").innerHTML = number1 + operacao + number2 ;
}
function num1(){
    if (currentnumber = 1)
    {
    number1 += 1;
    textdisplay();
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
    textdisplay();
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
    textdisplay();
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
    textdisplay();
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
    textdisplay();
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
    textdisplay();
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
    textdisplay();
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
    textdisplay();
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
    textdisplay();
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
    textdisplay();
    }
    else
    {
    number2 += 0;
    textdisplay(); 
    }
}
function num0(){
      number1 += 0;
    textdisplay();
}