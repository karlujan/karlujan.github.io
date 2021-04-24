/*Thanks for checking out my pen!*/

//function to clear screen input
//"clear" is replacing screen value w/ 0
function emptyOut() {
  document.getElementById("screen").value = 0;
}
//set up var to hold clear button
var clearBtn = document.getElementById("clear");
//add click listener to execute clear function
var clearGo = clear.addEventListener("click", emptyOut);

//operator buttons
//buttons on click will create anon function
//each anon function will just append button's value to the text input
var addBtn = document.getElementById("add");
var addGo = addBtn.addEventListener("click", function () {
  document.getElementById("screen").value += "+";
});

var subBtn = document.getElementById("subtract");
var subGo = subBtn.addEventListener("click", function () {
  document.getElementById("screen").value += "-";
});

var divdBtn = document.getElementById("divide");
var divdGo = divdBtn.addEventListener("click", function () {
  document.getElementById("screen").value += "/";
});

var multBtn = document.getElementById("multiply");
var multGo = multBtn.addEventListener("click", function () {
  document.getElementById("screen").value += "*";
});

var sevenBtn = document.getElementById("7");
var seveGo = sevenBtn.addEventListener("click", function () {
  document.getElementById("screen").value += "7";
});

var eightBtn = document.getElementById("8");
var eightGo = eightBtn.addEventListener("click", function () {
  document.getElementById("screen").value += "8";
});

var nineBtn = document.getElementById("9");
var nineGo = nineBtn.addEventListener("click", function () {
  document.getElementById("screen").value += "9";
});

var fourBtn = document.getElementById("4");
var fourGo = fourBtn.addEventListener("click", function () {
  document.getElementById("screen").value += "4";
});

var fiveBtn = document.getElementById("5");
var fiveGo = fiveBtn.addEventListener("click", function () {
  document.getElementById("screen").value += "5";
});

var sixBtn = document.getElementById("6");
var sixGo = sixBtn.addEventListener("click", function () {
  document.getElementById("screen").value += "6";
});

var oneBtn = document.getElementById("1");
var oneGo = oneBtn.addEventListener("click", function () {
  document.getElementById("screen").value += "1";
});

var twoBtn = document.getElementById("2");
var twoGo = twoBtn.addEventListener("click", function () {
  document.getElementById("screen").value += "2";
});

var threeBtn = document.getElementById("3");
var threeGo = threeBtn.addEventListener("click", function () {
  document.getElementById("screen").value += "3";
});

var zeroBtn = document.getElementById("zero");
var zeroGo = zeroBtn.addEventListener("click", function () {
  document.getElementById("screen").value += "0";
});

var deciBtn = document.getElementById("decimal");
var deciGo = deciBtn.addEventListener("click", function (){
  document.getElementById("screen").value += ".";
})


var totalBtn = document.getElementById("=");
var totalGo = totalBtn.addEventListener("click", function () {
  var convertString = document.getElementById("screen").value;
  var s1 = convertString.split(/[+-/*]/gi);
  var result = parseFloat(convertString);
  document.getElementById("screen").value = result;
});

