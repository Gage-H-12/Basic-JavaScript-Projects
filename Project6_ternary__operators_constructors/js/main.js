// a function with HTML and JS using a ternary operation with input from the browser
function Age_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "Youre not old enough to vote":"You can vote";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote";
}

// a constructor function utilizing "new" and "this" keywords
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Dodge", "Pinto", 1971, "Mustard");
function my_Function() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a" + Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model +
    "manufactured in" + Erik.Vehicle_Year;
}

// a function to display the results of the constructor in an HTML element
function myFunction() {
    document.getElementById("keywords_and_Constructors").innerHTML =
    " erik drives a " +
    Erik.Vehicle_Color +
    " -colored " +
    Erik.Vehicle_Model +
    " manufactured in " +
    Erik.Vehicle_Year;
}

// nested function
function add_Strings() {
    var start_string = "Hello";

    function Adding(str) {
        start_string = start_string + " " + str;
    }
    Adding("World");
    document.getElementById("Nested_Function").innerHTML = start_string;
}