/* Conditional statement*/

// switch
switch (expression) {
    case choice1:
        //run this code
        break;
    case choece2:
        //rnn this code
        break;
    default:
        //run this code if no case matches
}


// Example 1
const num1 = 2;
const num2 = 0;

switch (num1) {
    case 1:
        num2 += 1;
        break;
    case 2:
        num2 += 2;
        break;
    default:
        num2 += 3;
}

// num2

//string twy net ll sam kyit pr

//Exmple 2
const clickedtab = "HOME";

switch (clickedtab) {
    case "HOME":
        //1) hide current show tab. 2) show home tab
        break;
    case "VIDIOS":
        //1) hide  current show tab. 2) show videos tab
        break;
    case "PLAYLISTS":
        //1) hide current show tab. 2) show playlists tab
        break;
    case "CHANNEL":
        //1) hide current show tab. 2) show channel tab
        break;
    case "DISCUSSION":
        //1) hide current show tab. 2) show discussion tab
        break;
    case "ABOUT":
        //1) hide current show tab. 2) show about tab
    default:
        //1) hide current show tab. 2) show about tab
}