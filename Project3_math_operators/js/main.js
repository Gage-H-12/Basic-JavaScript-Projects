function addition_Function() {
    var simple_Math = 2 + 2;
    document.getElementById("math") .innerHTML = "2 + 2 = " + simple_Math;
}

function subtraction_Function() {
    var simple_Math = 5 - 2;
    document.getElementById("math") .innerHTML = "5 - 2 = " + simple_Math;
}

function multiplication_Function() {
    var simple_Math = 6 * 8;
    document.getElementById("math") .innerHTML = "6 x 8 = " + simple_Math;
}

function division_Function() {
    var simple_Math = 48 / 6;
    document.getElementById("math") .innerHTML = "48 / 6 = " + simple_Math;
}

function more_Math() {
    var simple_math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("math") .innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_math
}

function modulus_Operator () {
    var simple_Math = 25 % 6;
    document.getElementById("math") .innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator () {
    var x = 10;
    document.getElementById("math") .innerHTML = -x;
}

var X = 5;
X++;
document.write(X);

var X = 5.25;
X--;
document.write(X);

window.alert(Math.random())

window.alert(Math.random() * 100)