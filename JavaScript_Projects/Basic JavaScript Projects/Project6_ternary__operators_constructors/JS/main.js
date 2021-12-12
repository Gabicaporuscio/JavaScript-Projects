function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height"). value;
    Can_ride =(Height < 52) ? "You are too short" : "You are tall enough"; // ternary operator. three operands, condition followed by a question (?) and expression to execute if true (:) false
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}