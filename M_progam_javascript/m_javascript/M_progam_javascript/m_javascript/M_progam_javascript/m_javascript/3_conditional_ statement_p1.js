// (Conditional staements)


/*
// (if)

    const num1 = 2;
    let num2 = 0;
    if (num1 === 5) {
        num2 + 5;
    }


// (else)

    if (num1 === 5) {
        num2 += 5;
    } else {
        num2 += 10;
    }


// (else if)

    if (num1 === 5) {
        num2 += 5;
    } else if (num1 === 7) {
        num2 += 8;
    } else {
        num2 += 10;
    }




    
/*
Airline ticket example

not menber = full price
norrmal menber =5% discount
silver menber = 15% discount
gold menber = 15% discount
platinu menber = 20% discount
*/

const orininalprice = 100;
let totalprice = 0;
const membertype ="silvermember";

if (membertype === "normalmember"){
    totalprice += 100 * 0.9;
} else if (membertype === "silvermember"){
    totalprice += 100 * 0.9;
} else if (membertype === "goldmember"){
    totalprice += 100 * 0.85;
} else if (membertype === "platinumber"){
    totalprice += 100 * 0.8;
} else {
    totalprice = originalprice;
}

if (membertype === "goldmember"){
    totalprice += 100 * 0.9;
} else if (membertype === "silvermember"){
    totalprice += 100 * 0.9;
} else if (membertype === "goldmember"){
    totalprice += 100 * 0.85;
} else if (membertype === "platinumber"){
    totalprice += 100 * 0.8;
} else {
    totalprice = originalprice;
}
