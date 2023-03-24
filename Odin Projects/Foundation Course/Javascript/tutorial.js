/* 
function inside an object is method
every method is function but not every function is method.


*/

//*set default value of text when no argument is given.
function showMessage(from, text = "no text given") {
  console.log(from + ":" + text);
}
showMessage("Pann");
