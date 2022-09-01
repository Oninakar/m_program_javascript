/* Array */

{} // empty object, nuordered collection
[] // empty array, ordered ccollection

//why?
const unordered = { z: "hello", 1: "world", a: "test"};
const ordered = ["yangon", "mandalay", "myitkyina"]

// index
// Accessing array element
ordered[0]
ordered[1]
ordered[2]

// array.length property <-- how much elements(3)
ordered.length

// push method
ordered.push ("taungyi") //<-- element new htet poung py lite pr tl*nort sone mhar poung py pr tl
// ordered[3] --> "taungyi"

// unsgift method
ordered.unshift("beijing") //<-- element new htet poung py lite pr tl*shae sone mhar poung py pr tl
/* 5
   ordered
   (5) ["beijing", "yangon", "mandalay", "myitkyina", "taungyi"]
*/

// pop method //<-- nort sone mhar shi tat element  ko delet py pr tl
ordered.pop()
ordered
// (4) ["beijing", "yangon", "mandalay", "myitkyina"]

// shift method //<-- shae sone mhar shi tat element ko deleat py pr tl
ordered.shift()
ordered
// (3) ["yangon," "mandalay", "myitkyina"]

// splice method // <-- ko lo chin tat element ka ny sa pee deleat py pr tl
ordered
(4) ["yangon", "mandalay", "taungyi" , "beijing"]
ordered.splice(1, 2)
//(3) ["mandalay", "taungyi", "beijing"]
// ordered
//["yangon"]

// indexOf method // <-- ko lo chin tat element yate index number ko pya py pr tl
(4) ["yangon", "madalay", "taungyi","beijing"]
ordered.indexOf("taungyi")
// 2

// get last item  from an array
const  ordereds = ["yangon", "mandalay", "nyitkyina","jaungyi"]
ordereds[0]
//"yangon"
const index = ordereds - 1;
index
// 3
ordereds[index]
//"taungyi"


// splice + indexOf
(5) ["yangon","mandalay","taungyi", "beijing", "myitkina"]
const taungindex = ordered.indexOf("taungyi");
/* taungindex
   2 */
ordered.splice(taungindex)
// (3)["jaungyi", "beijing", "myitkyina"]
ordered
// (2)["yangon", "mandalay"]


// Array mhar object twy ll use lo ya pr tl
const carInfo = {
   brand: "toyota",
   price: 300000,
   purchasedYear: 2019,
   model: 2016,
}
ordered.carInfo
// 3
ordered
(3) ["yangon", "mandalay", "taungyi"]
/* 0:"yango"
   1:"mandalay"
   2: {brand: "toyota", price: 300000, 2019, 2016}
   */