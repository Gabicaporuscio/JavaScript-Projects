function my_dictionary() {   //function my_dictionary
    var Animal = {          //assign variable animal to
        species:"Cat",
        color: "black",
        age: "8",
        Sound: "Bark!"

    };
    delete Animal.age; //delete animal age
    document.getElementById("dictionary").innerHTML = Animal.age; //output undefined
}