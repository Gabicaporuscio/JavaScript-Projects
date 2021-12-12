function Full_Sentence () { // concatenate sentences
    var one = "My ";
    var two = "name ";
    var three = "is ";
    var four = "Gabriella.";
    var Whole_sentence = one.concat(two, three, four);
    document.getElementById("Concatenate").innerHTML = Whole_sentence;
}

function slice_method () {  // display the selected position, in upper case plus and the position of a value.
    var sentence = "My favorite color is Blue.";
    var section = sentence.slice(21, 25);
    var position = sentence.search("Blue")
    document.getElementById("Slice").innerHTML = section.toUpperCase() + position;
}

function string_Method () {  // to return a number as a string
    var x = 182;
    document.getElementById("Numbers_to_string").innerHTML = x.toString();
}

function precision_Method () {  // return a string as a number of a specified length
    var x = 1234567.8987654321
    document.getElementById("Precision").innerHTML = x.toPrecision(10);
}