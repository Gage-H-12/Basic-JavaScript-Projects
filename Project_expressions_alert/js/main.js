
// window.alert method
window.alert("Hello, world!")

// document.write method
document.write("For the last time, hello.")

// creating two variables
var Sent1 = "This is the beginning of the string";
var Sent2 = "and this is the end of the string";

// displaying the variables using the document.write method
document.write(Sent1 + Sent2);

// an expression
document.write(33 * 84)

function myFunction () {
    var sentence = "I am learning"; //creating the variable
    sentence += "a lot from this course!"; //using the += operator to add to the variable
    document.getElemnetById("Concatenate") .innerHTML = sentence; //using document.getElementById()
}