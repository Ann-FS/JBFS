const fruits = ["Banana", "Orange", "Apple", "Mango"];
// how to find and replace
const index = fruits.indexOf("Banana");
if(index >= 0){
    fruits[index] = "Date"
}

// adding here another way using string methods. 
const newFrouits = fruits.join(" ").replace("Apple", "Watermelon").split(" ");

// few types of dataTypes inside one array.
const multiType = ["string", 1, true, []];

// this is not good

// for (let index = 0; index < multiType.length; index ++){
//     console.log(multiType[index].split(""))
// }