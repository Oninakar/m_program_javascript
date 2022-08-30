// function



let num1 = 0;
//parameter
function caculate (firstnumber , secondnumber , thirdnumber) {
    num1 = firstnumber * secondnumber * thirdnumber;
    num1 += 4;
    num1 /= 2;
}
caculate (5 , 2 , 2)
// num1 --> firstnumber * secondnumber * thirdnumber; num1 --> 12;
// parameter twy amyar gyi that mat lo ya pr tl



// value returning function

let num2 = 0;
function getnumber (number) {
    return number;
// *return yet out ka function body atwin ka code ko bal tot mah ma run py pr buu*

}
// function body apyin ka code ko tot run py pr tl
const myNumber = getnumber (5);

// (e.g)
let num3 = 0;
function getnumber (number) {
    return number1 , number2;
}
const myunmber = getnumber (5)
// num3 --> 0; mynmber --> 5;



// built-in function
alert ("hell world")
// alert <-- browser bar mhar lr pya py pr tl



// ES6 arrow function
const myarrowfunction  =(param1 , param2) => {
    param1 * param2
}
myarrowfunction (2 , 3)
