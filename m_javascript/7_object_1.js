// object

//why?

const num1 = 10;
const cityname = "yangon";
const isloggedin = true;
/*
name = "Aung Paine"
age = 50
height = 180
city = "Yangon"
isactor = true
*/

{} // emty object
const person1 ={
    name: "Aung Paine", // key value pair
    age: 50,
    height: 180,
    city: "Yangon",
    dateOfBirthday: 1970,
    isActor: true,
    walk: () => {
        alert ("Aung Paine is walking now..")
    }
}

// Accessing object's properties and methods
// 1) dot notaion
person1. name
person1. age
person1. height
person1. city
person1. dateOfBirthday
person1. isActor
person1. walk ()

// 2) bracket notation
person1["name"]
person1['city']
person1["height"]
person1["city"]
person1["dateOfBirthday"]
person1["walk"]()
