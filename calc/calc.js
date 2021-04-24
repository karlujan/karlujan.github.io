/*Thanks for checking out my code!*/

//function to clear screen input
//"clear" is replacing screen value w/ 0
function emptyOut() {
  document.getElementById("screen").innerText = 0;
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
  if (document.getElementById("screen").innerText == "0"){
    document.getElementById("screen").innerText = " ";
  }
  document.getElementById("screen").innerText += "+";
});

var subBtn = document.getElementById("subtract");
var subGo = subBtn.addEventListener("click", function () {
  if (document.getElementById("screen").innerText == "0"){
    document.getElementById("screen").innerText = " ";
  }
  document.getElementById("screen").innerText += "-";
});

var divdBtn = document.getElementById("divide");
var divdGo = divdBtn.addEventListener("click", function () {
  if (document.getElementById("screen").innerText == "0"){
    document.getElementById("screen").innerText = " ";
  }
  document.getElementById("screen").innerText += "/";
});

var multBtn = document.getElementById("multiply");
var multGo = multBtn.addEventListener("click", function () {
  if (document.getElementById("screen").innerText == "0"){
    document.getElementById("screen").innerText = " ";
  }
  document.getElementById("screen").innerText += "*";
});

var sevenBtn = document.getElementById("7");
var seveGo = sevenBtn.addEventListener("click", function () {
  if (document.getElementById("screen").innerText == "0"){
    document.getElementById("screen").innerText = " ";
  }
  document.getElementById("screen").innerText += "7";
});

var eightBtn = document.getElementById("8");
var eightGo = eightBtn.addEventListener("click", function () {
  if (document.getElementById("screen").innerText == "0"){
    document.getElementById("screen").innerText = " ";
  }
  document.getElementById("screen").innerText += "8";
});

var nineBtn = document.getElementById("9");
var nineGo = nineBtn.addEventListener("click", function () {
  if (document.getElementById("screen").innerText == "0"){
    document.getElementById("screen").innerText = " ";
  }
  document.getElementById("screen").innerText += "9";
});

var fourBtn = document.getElementById("4");
var fourGo = fourBtn.addEventListener("click", function () {
  if (document.getElementById("screen").innerText == "0"){
    document.getElementById("screen").innerText = " ";
  }
  document.getElementById("screen").innerText += "4";
});

var fiveBtn = document.getElementById("5");
var fiveGo = fiveBtn.addEventListener("click", function () {
  if (document.getElementById("screen").innerText == "0"){
    document.getElementById("screen").innerText = " ";
  }
  document.getElementById("screen").innerText += "5";
});

var sixBtn = document.getElementById("6");
var sixGo = sixBtn.addEventListener("click", function () {
  if (document.getElementById("screen").innerText == "0"){
    document.getElementById("screen").innerText = " ";
  }
  document.getElementById("screen").innerText += "6";
});

var oneBtn = document.getElementById("1");
var oneGo = oneBtn.addEventListener("click", function () {
  if (document.getElementById("screen").innerText == "0"){
    document.getElementById("screen").innerText = " ";
  }
  document.getElementById("screen").innerText += "1";
});

var twoBtn = document.getElementById("2");
var twoGo = twoBtn.addEventListener("click", function () {
  if (document.getElementById("screen").innerText == "0"){
    document.getElementById("screen").innerText = " ";
  }
  document.getElementById("screen").innerText += "2";
});

var threeBtn = document.getElementById("3");
var threeGo = threeBtn.addEventListener("click", function () {
  if (document.getElementById("screen").innerText == "0"){
    document.getElementById("screen").innerText = " ";
  }
  document.getElementById("screen").innerText += "3";
});

var zeroBtn = document.getElementById("zero");
var zeroGo = zeroBtn.addEventListener("click", function () {
  if (document.getElementById("screen").innerText == "0"){
    document.getElementById("screen").innerText = " ";
  }
  document.getElementById("screen").innerText += "0";
});

var deciBtn = document.getElementById("decimal");
var deciGo = deciBtn.addEventListener("click", function (){
  if (document.getElementById("screen").innerText == "0"){
    document.getElementById("screen").innerText = " ";
  }
  document.getElementById("screen").innerText += ".";
})


var totalBtn = document.getElementById("=");
var totalGo = totalBtn.addEventListener("click", function () {
  var convertString = document.getElementById("screen").innerText;

  var operations = [];
  for (var i = 0; i < convertString.length; i++) {
    if (convertString[i] == "+" ||  convertString[i] == "-" || convertString[i] == "/" || convertString[i] == "*" ){
      operations.push(convertString[i]);
    }
  }

  var operationsCounter = 0;

  var s1 = convertString.split(/[+-/*]/gi);
  
  var z = 0;

  function result() {
    for(var i = 0; i < s1.length; i++){
      var x = parseFloat(s1[i]);
      
      if(operationsCounter < operations.length && operations[operationsCounter] == "+"){
        z += x;
      }
      else if(operationsCounter < operations.length && operations[operationsCounter] == "-"){
        z -= x;
      }
      else if(operationsCounter < operations.length && operations[operationsCounter] == "/"){
        z /= x;
      }
      else if(operationsCounter < operations.length && operations[operationsCounter] == "*"){
        z *= x;
      }

    }
  }

  result();
  document.getElementById("screen").innerText = z;
});

