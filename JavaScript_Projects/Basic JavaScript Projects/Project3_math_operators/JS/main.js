function math_function () { //math addiction and substraction function
    var addition = 345 + 543;
    var subtraction = 543 - 345;
    document.getElementById("Math").innerHTML = addition;
    document.getElementById("Menos").innerHTML = subtraction;
}

function math_function_2 () { // math multiplication and division function
    var x = 8 * 6;
    var y = 36 / 2;
    document.getElementById("Math_2").innerHTML = x;
    document.getElementById("Division").innerHTML = y;

}

function more_Math () {    // expression function
    var z = (1 + 2) *10 / 2 - 5;
    document.getElementById("Math_3").innerHTML = z;
}

function modulus_Operator() {  // remainder function
    var simple_Math = 25 % 6;
    document.getElementById("Math_4").innerHTML = simple_Math;
}

function negation_Operador() { //negative number 
    var neg = 10;
    document.getElementById("Math_5").innerHTML = - neg;
}

var x = 5; 
x++;
document.write(x);

function Math_function () {
document.write(Math.random());
}


