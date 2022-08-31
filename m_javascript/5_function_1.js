// function


// function declaration
// DRY = Don't Repeat Yourself

let num1 = 0;
function square () {
    num1 = 4 ** 2;
}
square ()
// num1 --> 0; num1 ---> 16;
// call the declared function to use it

// (e.g 1)
//parameter
let num2 = 0;
function square (number) {
    num2 = number ** 2;
}
square (5)
square (4)
// num2 --> 0; num2 --> 25;
// num2 --> 25; num2 --> 16;<-- value ko 2 khar yu tone yi first alue ko htet ma ponh py pr
// call the declared function to use it

// (e.g 2)
//parameter
let num3 = 0;
function square ( number) {
    num3 = number ** 2;
}
square () //<-- square value ma py htr yi js ka auto *NaN* pyung py tl
// num3 --> 0; num3 --> NaN;
// call  the declared function to use it

// (e.g 3)
//parameter
let num4 = 0;
function calculate (number) {
    num4 = number ** 2;
    num4 += 4;
    num4 /= 2;
}
calculate (4)
// num4 --> 0; num4 --> 10;
// call the declared function to use it