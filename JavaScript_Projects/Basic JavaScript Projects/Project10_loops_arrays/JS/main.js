function Call_Loop() {    //WHILE LOOP WITH BREAK
    var digit = "";
    var X = 10;
    while (X > 0) {
        if (X === 3) {break; }
        digit += "<br>" + X;
        X--;
    }
    document.getElementById("Loop").innerHTML = digit;
}

var student = ["Gabriella", "29 years", "Brazilian"];  //FOR LOOP
var content = "";
var Y;
function for_loop() {
    for (Y = 0; Y < student.length; Y++) {
    content += student[Y] + "<br>";
    }
    document.getElementById("Student_description").innerHTML= content;
}

function array_Function() {    //USING ARRAYS 
    var Plant = [];
    Plant[0] = "toxic";
    Plant[1] = "non-toxic";
    Plant[2] = "toxic";
    Plant[3] = "non-toxic";
    document.getElementById("Array").innerHTML= "Contains atropine and scopolamine in its stems, leaves, berries, and roots, and causes paralysis in the involuntary muscles of the body, including the heart, nightshade it is considered a very " + Plant[0] + " plant.";
}

function constant_function() {   // CONSTANT CANNOT CHANGE 
    const character = {name:"Donald Duck", species: "duck"};
    character.brand = "Walt Disney";
    document.getElementById("Constant").innerHTML = character.name + " was designed by "+ character.brand;
}


let car = {           // USING RETURN
    make: "dodge ",
    model: "viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The car is a "+this.year + this.color +this.make + this.model;
    }
}
document.getElementById("Car_Object").innerHTML = car.description();




