const cars1 = new Array("Saab", "Volvo", "BMW");
const cars2 = ["Saab", "Volvo", "BMW"];

cars2.push("Suzuki");
cars1[3] = "Suzuki";


// sorting from a-z pay attention this method override the original Array 
cars1.sort();
// reversing the order from last index to start pay attention this method override the original Array
cars1.reverse();

const numbers = [1,5,3,12,10000, 56];
// this is not sorting numbers it beahve like strings
numbers.sort();

// we can provide comperator
function numbersSort(a,b){
    if(a < b){
        return -1;
    } else if(b<a){
        return 1;
    } else {
        return 0;
    }
}
numbers.sort(numbersSort);

// why we are sorting arrays
const randomArr = [];
for (let i = 0; i < 100; i++){
    randomArr[i] = Math.ceil(Math.random() * 100);
}

// check which index 12.
randomArr.indexOf(12);

// lets find number 9 inside randomArr.
function getIndexOfNumber(arr,number){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == number){
            return i;
        }
        console.log(i);
    }
    
}

// find number 9;
// start = 0, end = 99 [arr.length -1]
// index = 49
// arr[49] -> 56;
// end = 49 -1 
// start = 0
// number = 24;
// arr[24] -> 12;
// end -> [24-1]



