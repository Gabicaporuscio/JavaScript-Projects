var my = 29;  // Global variable
function My_age () {
   document.write(my + "<br>");
}
My_age();

function My_age2 () { // Local variable
    var me = 29;
    document.write(me + "<br>");
}
My_age2();

function My_age3() { // using debug
    console.log(me + 10);
}

My_age3();

function Today() {         // function for time of day greating condition
    var Now = new Date().getHours()
    if ( Now > 12 == Now < 18) {
        document.getElementById("UK_Time").innerHTML= " Good afternoon";
    }
    else if (Now < 12 == Now >0) {
        document.getElementById("UK_Time").innerHTML= "Good morning";
    }
    else {
        document.getElementById("UK_Time").innerHTML = "Good night";
    }
}

function Driving_Age () {  // function for input age condition
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Drive = "You are old enough to drive in Brasil";
    }
    else {
        Drive = "You are not old enough to drive in Brasil";
    }
    document.getElementById("What_is_your_age?").innerHTML = Drive;
}